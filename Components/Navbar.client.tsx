'use client';

import { useRouter } from 'next/router';
import './navbar.css';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.tabs');
      if (window.scrollY > 10) {
        navbar?.classList.add('tabs-scrolled');
      } else {
        navbar?.classList.remove('tabs-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const router = useRouter();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="tabs">
          <input
            type="radio"
            name="tabs"
            id="radio-1"
            checked={router.pathname === '/'}
            onChange={() => router.push('/')}
          />
          <label className="tab" htmlFor="radio-1">
            Home
          </label>
          <input
            type="radio"
            name="tabs"
            id="radio-2"
            checked={router.pathname === '/about'}
            onChange={() => router.push('/about')}
          />
          <label className="tab" htmlFor="radio-2">
            About
          </label>
          <input
            type="radio"
            name="tabs"
            id="radio-3"
            checked={router.pathname === '/contact'}
            onChange={() => router.push('/contact')}
          />
          <label className="tab" htmlFor="radio-3">
            Contact
          </label>

          <span className="glider"></span>
        </div>
      </div>
    </nav>
  );
}
