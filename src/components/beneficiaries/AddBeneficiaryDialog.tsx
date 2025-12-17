
import { useEffect, useState } from 'react';
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface AddBeneficiaryDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onBeneficiaryAdded: () => void;
    defaultUserId?: string;
}

export function AddBeneficiaryDialog({ open, onOpenChange, onBeneficiaryAdded, defaultUserId }: AddBeneficiaryDialogProps) {
    const { register, handleSubmit, reset, setValue, formState: { isSubmitting, isValid } } = useForm({ mode: 'onChange' });
    const [beneficiaryType, setBeneficiaryType] = useState<string>('within_bank');

    useEffect(() => {
        if (open && defaultUserId) {
            setValue('user_id', defaultUserId);
        }
    }, [open, defaultUserId, setValue]);

    const onSubmit = async (data: any) => {
        try {
            const benId = `BEN_${Date.now()}`;

            const { error } = await supabase
                .from('user_beneficiaries')
                .insert({
                    user_id: data.user_id,
                    beneficiary_id: benId,
                    beneficiary_name: data.beneficiary_name,
                    account_number: data.account_number,
                    ifsc_code: data.ifsc_code,
                    bank_name: data.bank_name,
                    nickname: data.nickname,
                    is_within_bank: beneficiaryType === 'within_bank',
                    is_active: true
                });

            if (error) throw error;

            toast.success('Beneficiary added successfully');
            reset();
            setBeneficiaryType('within_bank');
            onOpenChange(false);
            onBeneficiaryAdded();
        } catch (error: any) {
            console.error('Error adding beneficiary:', error);
            toast.error('Failed to add beneficiary: ' + error.message);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Beneficiary</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                    <input
                        type="hidden"
                        {...register('user_id', { required: true })}
                        value={defaultUserId}
                    />

                    <div className="grid gap-2">
                        <Label>Beneficiary Type <span className="text-destructive">*</span></Label>
                        <Select value={beneficiaryType} onValueChange={setBeneficiaryType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select beneficiary type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="within_bank">Within Bank</SelectItem>
                                <SelectItem value="other_bank">Other Bank</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-2">
                        <Label>Beneficiary Name <span className="text-destructive">*</span></Label>
                        <Input {...register('beneficiary_name', { required: true })} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Account Number <span className="text-destructive">*</span></Label>
                            <Input {...register('account_number', { required: true })} />
                        </div>
                        <div className="grid gap-2">
                            <Label>IFSC Code <span className="text-destructive">*</span></Label>
                            <Input {...register('ifsc_code', { required: true })} />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label>Bank Name <span className="text-destructive">*</span></Label>
                        <Input {...register('bank_name', { required: true })} />
                    </div>

                    <div className="grid gap-2">
                        <Label>Nickname (Optional)</Label>
                        <Input {...register('nickname')} />
                    </div>

                    <DialogFooter>
                        <Button type="submit" disabled={!isValid || isSubmitting}>
                            {isSubmitting ? 'Adding...' : 'Add Beneficiary'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
