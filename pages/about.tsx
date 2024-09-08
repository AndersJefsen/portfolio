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
              <h1 id='about-h1'>I&apos;m Anders</h1>
                <p className='subtext-p'>I&apos;m a software engineer from Copenhagen, Denmark, building apps and online experiences, with an enthusiasm for keeping users satisfied.</p>
                <p className='breadtext'>property on the container, along with setting its height to half of the image's original height. However, since CSS alone doesn't know the original height of the image, you'll need to decide on a fixed height for the container that represents half of what you want visible.property on the container, along with setting its height to half of the image's original height. However, since CSS alone doesn't know the original height of the image, you'll need to decide on a fixed height for the container that represents half of what you want visible.

</p>
              </div>
            <div className='right-box'>
              <div id='about-picture'>
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
