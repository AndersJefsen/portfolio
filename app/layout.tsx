import './globals.css';
import React from 'react';
// Removed direct import of Navbar since we're using dynamic import below
import Footer from '../components/footer';
import dynamic from 'next/dynamic';

const NavbarClient = dynamic(() => import('../components/Navbar.client.tsx'), {
  ssr: false, // This will only render the component on the client side
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <NavbarClient /> 

      {children}
      <Footer />
    </div>
  );
};

export default Layout;