import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Transaction } from '@/types';
import {
    editTransaction,
    TransactionType,
    DEBIT_TRANSACTION_TYPES,
    CREDIT_TRANSACTION_TYPES
} from '@/services';

interface EditTransactionDialogProps {
    transaction: Transaction | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onTransactionUpdated: () => void;
}

export function EditTransactionDialog({ transaction, open, onOpenChange, onTransactionUpdated }: EditTransactionDialogProps) {
    const { register, handleSubmit, setValue, watch, formState: { isSubmitting } } = useForm();
    const operationType = watch('operation_type');
    const transactionType = watch('transaction_type');

    // Get available types based on operation
    const availableTypes = operationType === 'credit' ? CREDIT_TRANSACTION_TYPES : DEBIT_TRANSACTION_TYPES;

    useEffect(() => {
        if (transaction) {
            // Derive operation_type from debit/credit columns
            const operationType = transaction.credit && transaction.credit > 0 ? 'credit' : 'debit';

            setValue('operation_type', operationType);
            setValue('amount', transaction.amount);
            setValue('description', transaction.description);
            setValue('narration', transaction.narration);
            setValue('beneficiary_name', transaction.beneficiary_name);
            setValue('transaction_type', transaction.transaction_type);
            setValue('reference_number', transaction.reference_number);
        }
    }, [transaction, setValue]);

    // When operation changes, reset transaction_type to first valid option if current type is invalid
    useEffect(() => {
        if (operationType && transactionType && !availableTypes.includes(transactionType)) {
            setValue('transaction_type', availableTypes[0]);
        }
    }, [operationType, transactionType, availableTypes, setValue]);

    const onSubmit = async (data: any) => {
        if (!transaction) return;
        try {
            const result = await editTransaction(transaction.id, {
                operation_type: data.operation_type,
                amount: parseFloat(data.amount),
                description: data.description,
                narration: data.narration,
                beneficiary_name: data.beneficiary_name,
                transaction_type: data.transaction_type as TransactionType,
                reference_number: data.reference_number
            });

            if (!result.success) {
                throw new Error(result.error);
            }

            toast.success('Transaction updated successfully');
            onOpenChange(false);
            onTransactionUpdated();
        } catch (error: any) {
            console.error('Error updating transaction:', error);
            toast.error('Failed to update transaction');
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Transaction</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Operation <span className="text-destructive">*</span></Label>
                            <Select onValueChange={(v) => setValue('operation_type', v)} defaultValue={transaction?.credit && transaction.credit > 0 ? 'credit' : 'debit'}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Credit/Debit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="credit">Credit (+)</SelectItem>
                                    <SelectItem value="debit">Debit (-)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label>Type <span className="text-destructive">*</span></Label>
                            <Select onValueChange={(v) => setValue('transaction_type', v)} defaultValue={transaction?.transaction_type}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {availableTypes.map((type) => (
                                        <SelectItem key={type} value={type}>
                                            {type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Amount <span className="text-destructive">*</span></Label>
                            <Input type="number" step="0.01" {...register('amount', { required: true })} />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label>Narration <span className="text-destructive">*</span></Label>
                        <Input {...register('narration', { required: true })} />
                    </div>

                    <div className="grid gap-2">
                        <Label>Refrence no <span className="text-destructive">*</span></Label>
                        <Input {...register('reference_number', { required: true })} />
                    </div>

                    <div className="grid gap-2">
                        <Label>Description (Optional)</Label>
                        <Input {...register('description')} />
                    </div>

                    <div className="grid gap-2">
                        <Label>Beneficiary Name (Optional)</Label>
                        <Input {...register('beneficiary_name')} />
                    </div>



                    <DialogFooter>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
