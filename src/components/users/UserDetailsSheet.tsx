
import { useEffect, useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Transaction, Beneficiary } from '@/types';
import { supabase } from '@/integrations/supabase/client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface UserDetailsSheetProps {
    user: User | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function UserDetailsSheet({ user, open, onOpenChange }: UserDetailsSheetProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user && open) {
            fetchDetails();
        }
    }, [user, open]);

    const fetchDetails = async () => {
        if (!user) return;
        setLoading(true);
        try {
            // Fetch Transactions
            const { data: txData } = await supabase
                .from('user_transactions')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false });

            if (txData) setTransactions(txData as any);

            // Fetch Beneficiaries
            const { data: benData } = await supabase
                .from('user_beneficiaries')
                .select('*')
                .eq('user_id', user.id);

            if (benData) setBeneficiaries(benData as any);

        } catch (error) {
            console.error('Error fetching user details:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!user) return null;

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>User Details</SheetTitle>
                    <SheetDescription>
                        View and manage details for {user.account_holder_name || user.username}
                    </SheetDescription>
                </SheetHeader>

                <div className="mt-6">
                    <Tabs defaultValue="profile">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="profile">Profile</TabsTrigger>
                            <TabsTrigger value="transactions">Transactions</TabsTrigger>
                            <TabsTrigger value="beneficiaries">Beneficiaries</TabsTrigger>
                        </TabsList>

                        <TabsContent value="profile" className="space-y-4 mt-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Account Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="font-semibold">Account Number:</span>
                                        <span>{user.account_number}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="font-semibold">Type:</span>
                                        <Badge variant="outline">{user.account_type}</Badge>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="font-semibold">Status:</span>
                                        <Badge variant={user.status === 'ACTIVE' ? 'default' : 'destructive'}>{user.status}</Badge>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="font-semibold">Balance:</span>
                                        <span>${user.balance.toFixed(2)}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="font-semibold">Customer ID:</span>
                                        <span>{user.customer_id}</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="font-semibold">Email:</span>
                                        <span>{user.email}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="font-semibold">Mobile:</span>
                                        <span>{user.mobile_number}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="font-semibold">Address:</span>
                                        <span>{user.address || 'N/A'}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="transactions" className="mt-4">
                            <ScrollArea className="h-[500px] rounded-md border p-4">
                                {transactions.length === 0 ? (
                                    <div className="text-center text-muted-foreground p-4">No transactions found.</div>
                                ) : (
                                    <div className="space-y-4">
                                        {transactions.map((tx) => (
                                            <div key={tx.id} className="flex justify-between items-center border-b pb-2 last:border-0">
                                                <div>
                                                    <p className="font-medium text-sm">{tx.description || tx.transaction_type}</p>
                                                    <p className="text-xs text-muted-foreground">{new Date(tx.created_at).toLocaleDateString()}</p>
                                                </div>
                                                <div className={`font-semibold text-sm ${tx.transaction_type === 'CREDIT' ? 'text-green-600' : 'text-red-600'}`}>
                                                    {tx.transaction_type === 'CREDIT' ? '+' : '-'}${tx.amount.toFixed(2)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </ScrollArea>
                        </TabsContent>

                        <TabsContent value="beneficiaries" className="mt-4">
                            <ScrollArea className="h-[500px] rounded-md border p-4">
                                {beneficiaries.length === 0 ? (
                                    <div className="text-center text-muted-foreground p-4">No beneficiaries found.</div>
                                ) : (
                                    <div className="space-y-4">
                                        {beneficiaries.map((ben) => (
                                            <div key={ben.id} className="flex flex-col border-b pb-2 last:border-0">
                                                <div className="flex justify-between">
                                                    <span className="font-medium">{ben.beneficiary_name}</span>
                                                    <Badge variant={ben.is_active ? 'secondary' : 'outline'}>{ben.is_active ? 'Active' : 'Inactive'}</Badge>
                                                </div>
                                                <span className="text-xs text-muted-foreground">{ben.bank_name} - {ben.account_number}</span>
                                                <span className="text-xs text-muted-foreground">IFSC: {ben.ifsc_code}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </ScrollArea>
                        </TabsContent>
                    </Tabs>
                </div>
            </SheetContent>
        </Sheet>
    );
}
