import { User, Transaction, DashboardStats } from '@/types';

export const mockUsers: User[] = [];

export const mockTransactions: Transaction[] = [];

export const mockDashboardStats: DashboardStats = {
  totalUsers: 0,
  activeUsers: 0,
  totalTransactions: 0,
  totalRevenue: 0,
  userGrowth: 0,
  transactionGrowth: 0,
};

export const chartData = {
  userGrowth: [],
  transactions: [],
  accountTypes: [],
};
