import { supabase } from '@/integrations/supabase/client';

export type TransactionType = 'CREDIT' | 'DEBIT' | 'TRANSFER_IN' | 'TRANSFER_OUT';

export interface Transaction {
    id: string;
    user_id: string;
    amount: number;
    transaction_type: TransactionType;
    transaction_date: string;
    transaction_time: string;
    created_at: string;
    balance_after?: number;
}

/**
 * Calculate new balance after applying a transaction
 */
export function calculateBalanceAfter(previousBalance: number, amount: number, type: TransactionType): number {
    switch (type) {
        case 'CREDIT':
        case 'TRANSFER_IN':
            return previousBalance + amount;
        case 'DEBIT':
        case 'TRANSFER_OUT':
            return previousBalance - amount;
        default:
            return previousBalance;
    }
}

/**
 * Recalculate balance_after for all transactions starting from a specific point
 * and update the user's current balance
 */
export async function recalculateTransactionBalances(userId: string, startingBalance: number, fromDate?: string) {
    try {
        // Get all transactions for this user, ordered by date/time
        let query = supabase
            .from('user_transactions')
            .select('*')
            .eq('user_id', userId)
            .order('transaction_date', { ascending: true })
            .order('transaction_time', { ascending: true })
            .order('created_at', { ascending: true });

        // If fromDate provided, only get transactions from that date onwards
        if (fromDate) {
            query = query.gte('transaction_date', fromDate);
        }

        const { data: transactions, error } = await query;

        if (error) throw error;
        if (!transactions || transactions.length === 0) {
            // No transactions, just update user balance
            await updateUserBalance(userId, startingBalance);
            return { success: true, finalBalance: startingBalance };
        }

        let runningBalance = startingBalance;
        const updates = [];

        // Calculate balance_after for each transaction
        for (const txn of transactions) {
            const newBalanceAfter = calculateBalanceAfter(
                runningBalance,
                txn.amount,
                txn.transaction_type as TransactionType
            );

            updates.push({
                id: txn.id,
                balance_after: newBalanceAfter
            });

            runningBalance = newBalanceAfter;
        }

        // Update all transactions with new balance_after values
        for (const update of updates) {
            await supabase
                .from('user_transactions')
                .update({ balance_after: update.balance_after })
                .eq('id', update.id);
        }

        // Update user's current balance
        await updateUserBalance(userId, runningBalance);

        return { success: true, finalBalance: runningBalance };
    } catch (error) {
        console.error('Error recalculating balances:', error);
        throw error;
    }
}

/**
 * Get the balance before a specific transaction
 */
export async function getBalanceBeforeTransaction(userId: string, transactionDate: string, transactionTime: string): Promise<number> {
    try {
        // Get all transactions before this one
        const { data: previousTransactions, error } = await supabase
            .from('user_transactions')
            .select('balance_after')
            .eq('user_id', userId)
            .or(
                `transaction_date.lt.${transactionDate},and(transaction_date.eq.${transactionDate},transaction_time.lt.${transactionTime})`
            )
            .order('transaction_date', { ascending: false })
            .order('transaction_time', { ascending: false })
            .limit(1);

        if (error) throw error;

        if (previousTransactions && previousTransactions.length > 0) {
            return previousTransactions[0].balance_after || 0;
        }

        // No previous transactions, get user's initial balance
        const { data: userData, error: userError } = await supabase
            .from('user_details')
            .select('balance')
            .eq('user_id', userId)
            .single();

        if (userError) throw userError;

        return userData?.balance || 0;
    } catch (error) {
        console.error('Error getting balance before transaction:', error);
        return 0;
    }
}

/**
 * Update user's current balance in user_details table
 */
export async function updateUserBalance(userId: string, newBalance: number) {
    try {
        const { error } = await supabase
            .from('user_details')
            .update({ balance: newBalance })
            .eq('user_id', userId);

        if (error) throw error;
        return { success: true };
    } catch (error) {
        console.error('Error updating user balance:', error);
        throw error;
    }
}

/**
 * Get user's initial balance (balance before any transactions)
 */
export async function getUserInitialBalance(userId: string): Promise<number> {
    try {
        const { data, error } = await supabase
            .from('user_details')
            .select('balance')
            .eq('user_id', userId)
            .single();

        if (error) throw error;
        return data?.balance || 0;
    } catch (error) {
        console.error('Error getting user initial balance:', error);
        return 0;
    }
}

/**
 * Recalculate all balances from scratch for a user
 */
export async function recalculateAllBalances(userId: string) {
    try {
        // Get user's initial balance (we'll use the current balance as starting point)
        const { data: userData, error: userError } = await supabase
            .from('user_details')
            .select('balance')
            .eq('user_id', userId)
            .single();

        if (userError) throw userError;

        // Get the very first transaction to determine initial balance
        const { data: firstTransaction, error: firstTxError } = await supabase
            .from('user_transactions')
            .select('*')
            .eq('user_id', userId)
            .order('transaction_date', { ascending: true })
            .order('transaction_time', { ascending: true })
            .limit(1);

        if (firstTxError) throw firstTxError;

        let initialBalance = userData?.balance || 0;

        // If there's a first transaction, work backwards to find initial balance
        if (firstTransaction && firstTransaction.length > 0) {
            const firstTx = firstTransaction[0];
            // Reverse calculate: if first tx was +5000 and initial was 10000, then starting was 5000
            if (firstTx.transaction_type === 'CREDIT' || firstTx.transaction_type === 'TRANSFER_IN') {
                // Starting balance = balance_after - amount
                initialBalance = (firstTx.balance_after || initialBalance) - firstTx.amount;
            } else {
                // Starting balance = balance_after + amount
                initialBalance = (firstTx.balance_after || initialBalance) + firstTx.amount;
            }
        }

        // Now recalculate everything from this initial balance
        return await recalculateTransactionBalances(userId, initialBalance);
    } catch (error) {
        console.error('Error recalculating all balances:', error);
        throw error;
    }
}
