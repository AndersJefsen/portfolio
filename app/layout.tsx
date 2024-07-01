import './globals.css';
import React from 'react';
// Removed direct import of Navbar since we're using dynamic import below
import Footer from '../components/footer.tsx';
import dynamic from 'next/dynamic';
import { NavbarProvider } from '../components/NavbarContext.client.tsx';

const NavbarClient = dynamic(() => import('../components/Navbar.client.tsx'), {
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