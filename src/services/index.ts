/**
 * Transaction Services Index
 * 
 * Centralized exports for all transaction-related services
 * 
 * USAGE:
 * import { addTransaction, editTransaction, deleteTransaction } from '@/services';
 * 
 * ARCHITECTURE OVERVIEW:
 * ┌─────────────────────────────────────────────────────────────────┐
 * │                    DEPENDENCY TREE                              │
 * ├─────────────────────────────────────────────────────────────────┤
 * │                                                                  │
 * │  transactionTypes.ts (Base types & utilities)                   │
 * │         │                                                        │
 * │         ├── balanceService.ts (Core balance calculations)       │
 * │         │         │                                              │
 * │         │         ├── addTransactionService.ts                  │
 * │         │         ├── editTransactionService.ts                 │
 * │         │         └── deleteTransactionService.ts               │
 * │         │                                                        │
 * │         └── UI Components use services directly                 │
 * │                                                                  │
 * └─────────────────────────────────────────────────────────────────┘
 * 
 * BALANCE IMPACT RULES:
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ Field              │ Impact on Balance                          │
 * ├────────────────────┼────────────────────────────────────────────┤
 * │ transaction_date   │ Changes order → recalculates chain         │
 * │ transaction_type   │ CREDIT/IN = +, DEBIT/OUT = -              │
 * │ amount             │ Direct value change                        │
 * │ status             │ Only 'success' applies to balance          │
 * │ narration, desc    │ No impact (metadata only)                  │
 * │ beneficiary_name   │ No impact (metadata only)                  │
 * └─────────────────────────────────────────────────────────────────┘
 */

// Type exports
export type {
    Transaction,
    TransactionType,
    TransactionStatus,
    AddTransactionInput,
    EditTransactionInput,
    BalanceCalculationResult
} from './transactionTypes';

// Utility exports
export {
    isCredit,
    isDebit,
    shouldImpactBalance,
    calculateImpact,
    getDebitCreditValues,
    generateTransactionId,
    getCurrentTimeString,
    getCurrentDateString,
    getUserInitialBalance,
    CREDIT_TYPES,
    DEBIT_TYPES,
    BALANCE_IMPACTING_STATUSES
} from './transactionTypes';

// Balance service exports
export {
    updateUserBalance,
    getOrderedTransactions,
    getBalanceBeforePosition,
    recalculateAllBalances,
    calculateNewTransactionBalance,
    recalculateFromDate
} from './balanceService';

// Add transaction service exports
export type { AddTransactionResult } from './addTransactionService';
export {
    addTransaction,
    validateAddTransactionInput
} from './addTransactionService';

// Edit transaction service exports
export type { EditTransactionResult } from './editTransactionService';
export {
    editTransaction,
    calculateEditImpact,
    validateEditTransactionInput
} from './editTransactionService';

// Delete transaction service exports
export type { DeleteTransactionResult } from './deleteTransactionService';
export {
    deleteTransaction,
    deleteTransactions,
    previewDeleteImpact
} from './deleteTransactionService';
