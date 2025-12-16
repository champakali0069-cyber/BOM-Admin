
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      {children}
    </>
  );
}
