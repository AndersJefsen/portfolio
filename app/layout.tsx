import './globals.css';
import React from 'react';
import Footer from '@/components/footer';
import dynamic from 'next/dynamic';
import { NavbarProvider } from '@/components/NavbarContext.client';

const NavbarClient = dynamic(() => import('@/components/Navbar.client'), {
  ssr: false, // This will only render the component on the client side
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <NavbarProvider>
        <NavbarClient />
      </NavbarProvider>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;