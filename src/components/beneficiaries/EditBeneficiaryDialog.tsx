
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
import { Switch } from '@/components/ui/switch';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Beneficiary } from '@/types';

interface EditBeneficiaryDialogProps {
    beneficiary: Beneficiary | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onBeneficiaryUpdated: () => void;
}

export function EditBeneficiaryDialog({ beneficiary, open, onOpenChange, onBeneficiaryUpdated }: EditBeneficiaryDialogProps) {
    const { register, handleSubmit, setValue, watch } = useForm();
    const isActive = watch('is_active');

    useEffect(() => {
        if (beneficiary) {
            setValue('beneficiary_name', beneficiary.beneficiary_name);
            setValue('account_number', beneficiary.account_number);
            setValue('ifsc_code', beneficiary.ifsc_code);
            setValue('bank_name', beneficiary.bank_name);
            setValue('nickname', beneficiary.nickname);
            setValue('is_active', beneficiary.is_active);
        }
    }, [beneficiary, setValue]);

    const onSubmit = async (data: any) => {
        if (!beneficiary) return;
        try {
            const { error } = await supabase
                .from('user_beneficiaries')
                .update({
                    beneficiary_name: data.beneficiary_name,
                    account_number: data.account_number,
                    ifsc_code: data.ifsc_code,
                    bank_name: data.bank_name,
                    nickname: data.nickname,
                    is_active: data.is_active
                })
                .eq('id', beneficiary.id);

            if (error) throw error;

            toast.success('Beneficiary updated successfully');
            onOpenChange(false);
            onBeneficiaryUpdated();
        } catch (error: any) {
            console.error('Error updating beneficiary:', error);
            toast.error('Failed to update beneficiary');
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Beneficiary</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label>Beneficiary Name</Label>
                        <Input {...register('beneficiary_name')} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Account Number</Label>
                            <Input {...register('account_number')} />
                        </div>
                        <div className="grid gap-2">
                            <Label>IFSC Code</Label>
                            <Input {...register('ifsc_code')} />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label>Bank Name</Label>
                        <Input {...register('bank_name')} />
                    </div>

                    <div className="grid gap-2">
                        <Label>Nickname</Label>
                        <Input {...register('nickname')} />
                    </div>

                    <div className="flex items-center space-x-2">
                        <Switch
                            id="active-mode"
                            checked={isActive}
                            onCheckedChange={(checked) => setValue('is_active', checked)}
                        />
                        <Label htmlFor="active-mode">Active Status</Label>
                    </div>

                    <DialogFooter>
                        <Button type="submit">Save Changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
