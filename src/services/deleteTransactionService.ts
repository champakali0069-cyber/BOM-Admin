/**
 * Delete Transaction Service
 * Handles removing transactions with proper balance recalculation
 * 
 * IMPACT ANALYSIS:
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ When deleting a transaction:                                    │
 * │                                                                  │
 * │ 1. The deleted transaction's impact is REMOVED from balance    │
 * │    • If it was CREDIT +1000 → user balance decreases by 1000   │
 * │    • If it was DEBIT -1000 → user balance increases by 1000    │
 * │                                                                  │
 * │ 2. ALL subsequent transactions need their balance_after        │
 * │    recalculated to maintain the chain                          │
 * │                                                                  │
 * │ 3. The user's final balance is updated to reflect the removal  │
 * │                                                                  │
 * │ EDGE CASES:                                                     │
 * │ • Deleting a 'failed'/'pending' transaction has NO balance     │
 * │   impact (since it wasn't counted in the first place)          │
 * │ • Deleting the ONLY transaction resets balance to initial      │
 * └─────────────────────────────────────────────────────────────────┘
 */

import { supabase } from '@/integrations/supabase/client';
import {
    TransactionType,
    TransactionStatus,
    calculateImpact,
    shouldImpactBalance
} from './transactionTypes';
import { recalculateAllBalances } from './balanceService';

export interface DeleteTransactionResult {
    success: boolean;
    balanceImpact: number;  // How much the balance changed by deleting
    newUserBalance?: number;
    error?: string;
}

/**
 * Delete a transaction and recalculate all balances
 * 
 * Process:
 * 1. Fetch the transaction to get user_id and calculate impact
 * 2. Delete the transaction
 * 3. Recalculate all remaining balances
 * 4. Return the impact and new user balance
 */
export async function deleteTransaction(transactionId: string): Promise<DeleteTransactionResult> {
    try {
        // Fetch the transaction first to get user_id and calculate impact
        const { data: transaction, error: fetchError } = await supabase
            .from('user_transactions')
            .select('*')
            .eq('id', transactionId)
            .single();

        if (fetchError || !transaction) {
            return {
                success: false,
                balanceImpact: 0,
                error: 'Transaction not found'
            };
        }

        const userId = transaction.user_id;
        const type = transaction.transaction_type as TransactionType;
        const status = transaction.status as TransactionStatus;
        const amount = transaction.amount;

        // Calculate the impact this transaction HAD on the balance
        // When we delete it, the opposite will happen
        const originalImpact = calculateImpact(amount, type, status);
        const balanceImpact = -originalImpact; // Reverse the impact

        // Delete the transaction
        const { error: deleteError } = await supabase
            .from('user_transactions')
            .delete()
            .eq('id', transactionId);

        if (deleteError) {
            return {
                success: false,
                balanceImpact: 0,
                error: deleteError.message
            };
        }

        // Recalculate all remaining balances for this user
        const result = await recalculateAllBalances(userId);

        // Note: If the deleted transaction's status was not 'success',
        // balanceImpact will be 0 (which is correct - no balance change)
        return {
            success: true,
            balanceImpact: balanceImpact,
            newUserBalance: result.newBalance
        };

    } catch (error: any) {
        console.error('Error deleting transaction:', error);
        return {
            success: false,
            balanceImpact: 0,
            error: error.message || 'Unknown error occurred'
        };
    }
}

/**
 * Bulk delete multiple transactions
 * More efficient than deleting one by one
 */
export async function deleteTransactions(transactionIds: string[]): Promise<{
    success: boolean;
    deletedCount: number;
    totalBalanceImpact: number;
    newUserBalance?: number;
    errors: string[];
}> {
    const errors: string[] = [];
    let totalBalanceImpact = 0;
    let deletedCount = 0;
    let userId: string | null = null;

    // Fetch all transactions to calculate impacts
    const { data: transactions, error: fetchError } = await supabase
        .from('user_transactions')
        .select('*')
        .in('id', transactionIds);

    if (fetchError || !transactions || transactions.length === 0) {
        return {
            success: false,
            deletedCount: 0,
            totalBalanceImpact: 0,
            errors: ['Transactions not found']
        };
    }

    // All transactions should belong to the same user
    userId = transactions[0].user_id;

    // Calculate total impact
    for (const tx of transactions) {
        const impact = calculateImpact(
            tx.amount,
            tx.transaction_type as TransactionType,
            tx.status as TransactionStatus
        );
        totalBalanceImpact -= impact; // Reverse impact
    }

    // Delete all transactions
    const { error: deleteError } = await supabase
        .from('user_transactions')
        .delete()
        .in('id', transactionIds);

    if (deleteError) {
        errors.push(deleteError.message);
        return {
            success: false,
            deletedCount: 0,
            totalBalanceImpact: 0,
            errors
        };
    }

    deletedCount = transactions.length;

    // Recalculate all balances
    const result = await recalculateAllBalances(userId);

    return {
        success: true,
        deletedCount,
        totalBalanceImpact,
        newUserBalance: result.newBalance,
        errors
    };
}

/**
 * Preview what will happen if a transaction is deleted
 * Useful for confirmation dialogs
 */
export async function previewDeleteImpact(transactionId: string): Promise<{
    transaction: {
        date: string;
        type: string;
        amount: number;
        status: string;
    } | null;
    balanceImpact: number;
    willAffectBalance: boolean;
}> {
    const { data: transaction, error } = await supabase
        .from('user_transactions')
        .select('transaction_date, transaction_type, amount, status')
        .eq('id', transactionId)
        .single();

    if (error || !transaction) {
        return {
            transaction: null,
            balanceImpact: 0,
            willAffectBalance: false
        };
    }

    const type = transaction.transaction_type as TransactionType;
    const status = transaction.status as TransactionStatus;
    const impact = calculateImpact(transaction.amount, type, status);

    return {
        transaction: {
            date: transaction.transaction_date,
            type: transaction.transaction_type,
            amount: transaction.amount,
            status: transaction.status
        },
        balanceImpact: -impact, // Negative because we're removing
        willAffectBalance: shouldImpactBalance(status)
    };
}
