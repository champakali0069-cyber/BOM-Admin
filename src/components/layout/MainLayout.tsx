
import { ReactNode } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AppSidebar } from './AppSidebar';
import { Header } from './Header';
import { SidebarProvider } from '@/context/SidebarContext';

const getHeaderInfo = (pathname: string) => {
    switch (pathname) {
        case '/':
            return { title: 'Dashboard', subtitle: "Welcome back! Here's what's happening today." };
        case '/users':
            return { title: 'User Management', subtitle: 'Manage, monitor, and edit user accounts' };
        case '/transactions':
            return { title: 'Transactions', subtitle: 'Select a user to manage their transactions' };
        case '/beneficiaries':
            return { title: 'Beneficiaries', subtitle: 'Select a user to manage their beneficiaries' };
        case '/settings':
            return { title: 'Settings', subtitle: 'Manage your account settings and preferences' };
        default:
            return { title: 'Admin Panel', subtitle: '' };
    }
};

export function MainLayout() {
    const location = useLocation();
    const { title, subtitle } = getHeaderInfo(location.pathname);

    return (
        <SidebarProvider>
            <div className="flex h-screen w-full overflow-hidden bg-background">
                <AppSidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header title={title} subtitle={subtitle} />
                    <main className="flex-1 overflow-y-auto p-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}
