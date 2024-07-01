'use client';

import { useRouter } from 'next/router';
import './navbar.css';
import { useEffect,useState} from 'react';

export default function Navbar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.pathname);

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
    return () => { window.removeEventListener('scroll', handleScroll); };
  },[]);

  useEffect(() => {
    const handleRouteChange = (url:string) => {
      setActiveTab(url);
    }
   router.events.on('routeChangeComplete', handleRouteChange);
   return () => {
     router.events.off('routeChangeComplete', handleRouteChange);
   }
  }, [router.events]);

  const navigate = (path: string) => {
    const animationDuration = 500; // milliseconds
  
    setActiveTab(path); // This triggers the glider to start moving
  
    setTimeout(() => {
      router.push(path);
    }, animationDuration);
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="tabs">
          <input
            type="radio"
            name="tabs"
            id="radio-1"
            checked={activeTab === '/'}
            onChange={() =>  navigate('/')}
          />
          <label className="tab" htmlFor="radio-1">
            Home
          </label>
          <input
            type="radio"
            name="tabs"
            id="radio-2"
            checked={activeTab === '/about'}
            onChange={() => navigate('/about')}
          />
          <label className="tab" htmlFor="radio-2">
            About
          </label>
          <input
            type="radio"
            name="tabs"
            id="radio-3"
            checked={activeTab === '/contact'}
            onChange={() => navigate('/contact')}
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
