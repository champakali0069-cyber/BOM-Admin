
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { DashboardStats } from '@/types';

export function useDashboardData() {
    const [stats, setStats] = useState<DashboardStats>({
        totalUsers: 0,
        activeUsers: 0,
        totalTransactions: 0,
        totalRevenue: 0,
        userGrowth: 0,
        transactionGrowth: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchStats() {
            try {
                setLoading(true);

                // 1. Users Count
                const { count: totalUsers, error: usersError } = await supabase
                    .from('users')
                    .select('*', { count: 'exact', head: true });

                if (usersError) throw usersError;

                // 2. Active Users
                const { count: activeUsers, error: activeError } = await supabase
                    .from('users')
                    .select('*', { count: 'exact', head: true })
                    .eq('status', 'ACTIVE');

                if (activeError) throw activeError;

                // 3. Transactions Count
                const { count: totalTransactions, error: txError } = await supabase
                    .from('user_transactions')
                    .select('*', { count: 'exact', head: true });

                if (txError) throw txError;

                // 4. Total Balance (Revenue proxy)
                const { data: balanceData, error: balanceError } = await supabase
                    .from('user_details')
                    .select('balance');

                if (balanceError) throw balanceError;

                const totalRevenue = balanceData?.reduce((acc, curr) => acc + (Number(curr.balance) || 0), 0) || 0;

                setStats({
                    totalUsers: totalUsers || 0,
                    activeUsers: activeUsers || 0,
                    totalTransactions: totalTransactions || 0,
                    totalRevenue,
                    userGrowth: 0, // Needs historical data
                    transactionGrowth: 0 // Needs historical data
                });

            } catch (err: any) {
                console.error('Error fetching dashboard stats:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchStats();
    }, []);

    return { stats, loading, error };
}
