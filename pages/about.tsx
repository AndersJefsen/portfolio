import React from 'react';
import Navbar from '../components/Navbar.client';
import Layout from '@/app/layout';
import Image from 'next/image';
import './about.css';


const About: React.FC = () => {
  return (
    <Layout>
      <div className='about-content'>
        <div className='about-container'>
          <header className='about-header'>
            <div className='left-box'>
              <h1>I&apos;m Anders</h1>
                <p className='about-p'>I&apos;m Anders, an independent full-stack web developer from Denmark, building apps and online experiences for companies large and small.</p>
              </div>
            <div className='right-box'>
              <div className='picture'>
                <Image
                src="/b10.png"
                alt="cv pic"
                width={300}
                height={500}
              />
              <ul></ul>
              </div>
            </div>

          </header>
        </div>
      </div>
    </Layout>
  );
};

export default About;
