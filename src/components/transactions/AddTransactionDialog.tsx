
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

interface AddTransactionDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onTransactionAdded: () => void;
    defaultUserId?: string;
}

export function AddTransactionDialog({ open, onOpenChange, onTransactionAdded, defaultUserId }: AddTransactionDialogProps) {
    const { register, handleSubmit, reset, setValue } = useForm();

    useEffect(() => {
        if (open && defaultUserId) {
            setValue('user_id', defaultUserId);
        }
    }, [open, defaultUserId, setValue]);

    const onSubmit = async (data: any) => {
        try {
            const txnId = `TXN_${Date.now()}`;
            const now = new Date();
            const dateStr = now.toISOString().split('T')[0];
            const timeStr = now.toTimeString().split(' ')[0];

            const { error } = await supabase
                .from('user_transactions')
                .insert({
                    user_id: data.user_id,
                    transaction_id: txnId,
                    transaction_date: dateStr,
                    transaction_time: timeStr,
                    transaction_type: data.transaction_type,
                    amount: parseFloat(data.amount),
                    description: data.description,
                    status: data.status,
                    balance_after: 0,
                    beneficiary_name: data.beneficiary_name
                });

            if (error) throw error;

            toast.success('Transaction added successfully');
            reset();
            onOpenChange(false);
            onTransactionAdded();
        } catch (error: any) {
            console.error('Error adding transaction:', error);
            toast.error('Failed to add transaction: ' + error.message);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                    <DialogTitle>Add Transaction</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label>User ID (UUID)</Label>
                        <Input
                            {...register('user_id', { required: true })}
                            placeholder="e.g. 550e8400-e29b..."
                            defaultValue={defaultUserId}
                            readOnly={!!defaultUserId}
                            className={defaultUserId ? "bg-muted" : ""}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Type</Label>
                            <Select onValueChange={(v) => setValue('transaction_type', v)} defaultValue="DEBIT">
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
                            <Input type="number" step="0.01" {...register('amount', { required: true })} />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label>Description</Label>
                        <Input {...register('description', { required: true })} />
                    </div>

                    <div className="grid gap-2">
                        <Label>Beneficiary Name (Optional)</Label>
                        <Input {...register('beneficiary_name')} />
                    </div>

                    <div className="grid gap-2">
                        <Label>Status</Label>
                        <Select onValueChange={(v) => setValue('status', v)} defaultValue="success">
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
                        <Button type="submit">Add Transaction</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
