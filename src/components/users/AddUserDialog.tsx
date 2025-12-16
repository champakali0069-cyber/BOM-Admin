
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
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

interface AddUserDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onUserAdded: () => void;
    children?: React.ReactNode;
}

export function AddUserDialog({ open, onOpenChange, onUserAdded, children }: AddUserDialogProps) {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data: any) => {
        try {
            // 1. Insert into users table
            const { data: newUser, error: userError } = await supabase
                .from('users')
                .insert({
                    account_number: data.account_number,
                    mpin: data.mpin,
                    username: data.username,
                    status: data.status
                })
                .select()
                .single();

            if (userError) throw userError;

            // 2. Insert into user_details table
            const { error: detailsError } = await supabase
                .from('user_details')
                .insert({
                    user_id: newUser.id,
                    account_holder_name: data.account_holder_name,
                    account_type: data.account_type,
                    balance: parseFloat(data.balance),
                    customer_id: `CUST_${Date.now()}`, // Simple generic ID generation
                    email: data.email,
                    mobile_number: data.mobile_number,
                    address: data.address
                });

            if (detailsError) {
                // Rollback user creation (manual since no transaction support in client-side REST without functions)
                await supabase.from('users').delete().eq('id', newUser.id);
                throw detailsError;
            }

            toast.success('User added successfully');
            reset();
            onOpenChange(false);
            onUserAdded();
        } catch (error: any) {
            console.error('Error adding user:', error);
            toast.error('Failed to add user: ' + error.message);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogDescription>
                        Create a new user account and profile.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" {...register('username', { required: true })} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="account_number">Account Number</Label>
                            <Input id="account_number" {...register('account_number', { required: true })} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="mpin">MPIN</Label>
                            <Input id="mpin" type="password" maxLength={6} {...register('mpin', { required: true })} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="status">Status</Label>
                            <Select onValueChange={(v) => register('status').onChange({ target: { value: v } })} defaultValue="ACTIVE">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ACTIVE">Active</SelectItem>
                                    <SelectItem value="INACTIVE">Inactive</SelectItem>
                                    <SelectItem value="BLOCKED">Blocked</SelectItem>
                                </SelectContent>
                            </Select>
                            {/* Register hidden input for select to work with react-hook-form smoothly or use Controller */}
                            <input type="hidden" {...register('status')} defaultValue="ACTIVE" />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="account_holder_name">Full Name</Label>
                        <Input id="account_holder_name" {...register('account_holder_name', { required: true })} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="account_type">Account Type</Label>
                            <Select onValueChange={(v) => register('account_type').onChange({ target: { value: v } })} defaultValue="SAVINGS">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="SAVINGS">Savings</SelectItem>
                                    <SelectItem value="CURRENT">Current</SelectItem>
                                </SelectContent>
                            </Select>
                            <input type="hidden" {...register('account_type')} defaultValue="SAVINGS" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="balance">Initial Balance</Label>
                            <Input id="balance" type="number" step="0.01" {...register('balance', { required: true })} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" {...register('email')} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="mobile_number">Mobile</Label>
                            <Input id="mobile_number" {...register('mobile_number')} />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" {...register('address')} />
                    </div>

                    <DialogFooter>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Saving...' : 'Create User'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
