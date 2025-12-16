
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
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Transaction } from '@/types';

interface EditTransactionDialogProps {
    transaction: Transaction | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onTransactionUpdated: () => void;
}

export function EditTransactionDialog({ transaction, open, onOpenChange, onTransactionUpdated }: EditTransactionDialogProps) {
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        if (transaction) {
            setValue('amount', transaction.amount);
            setValue('description', transaction.description);
            setValue('status', transaction.status);
            setValue('beneficiary_name', transaction.beneficiary_name);
            setValue('transaction_type', transaction.transaction_type);
        }
    }, [transaction, setValue]);

    const onSubmit = async (data: any) => {
        if (!transaction) return;
        try {
            const { error } = await supabase
                .from('user_transactions')
                .update({
                    amount: parseFloat(data.amount),
                    description: data.description,
                    status: data.status,
                    beneficiary_name: data.beneficiary_name,
                    transaction_type: data.transaction_type
                })
                .eq('id', transaction.id);

            if (error) throw error;

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
                            <Label>Type</Label>
                            <Select onValueChange={(v) => setValue('transaction_type', v)} defaultValue={transaction?.transaction_type}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="DEBIT">Debit</SelectItem>
                                    <SelectItem value="CREDIT">Credit</SelectItem>
                                    <SelectItem value="TRANSFER_OUT">Transfer Out</SelectItem>
                                    <SelectItem value="TRANSFER_IN">Transfer In</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label>Amount</Label>
                            <Input type="number" step="0.01" {...register('amount')} />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label>Description</Label>
                        <Input {...register('description')} />
                    </div>

                    <div className="grid gap-2">
                        <Label>Beneficiary Name</Label>
                        <Input {...register('beneficiary_name')} />
                    </div>

                    <div className="grid gap-2">
                        <Label>Status</Label>
                        <Select onValueChange={(v) => setValue('status', v)} defaultValue={transaction?.status}>
                            <SelectTrigger>
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="success">Success</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="failed">Failed</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <DialogFooter>
                        <Button type="submit">Save Changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
