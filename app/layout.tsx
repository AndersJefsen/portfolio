import './globals.css';
import React from 'react';
import Navbar from '../components/Navbar.client';
import Footer from '../components/footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <Navbar />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
