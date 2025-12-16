import { useIsMobile } from '@/hooks/use-mobile';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  setCollapsed: (value: boolean) => void;
  isMobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!isMobileOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const setCollapsed = (value: boolean) => {
    if (isMobile) {
      setMobileOpen(!value); // Inverting semantic: "Collapsed" (hidden) means !Open
    } else {
      setIsCollapsed(value);
    }
  };

  return (
    <SidebarContext.Provider value={{
      isCollapsed,
      toggleSidebar,
      setCollapsed,
      isMobileOpen,
      setMobileOpen
    }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebarContext must be used within a SidebarProvider');
  }
  return context;
}
