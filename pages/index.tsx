import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import './index.css';
import Layout from '../app/layout';
import Image from 'next/image';

const Index = () => {
  return (
    <Layout>
      {}

      <div className="content">
        <h1 className='index-h1'>
          <span className='index-span'>
            <span>Hello. I&apos;m Anders.</span>
            <span>A Software Engineer.</span>
          </span>
        </h1>
        <div className="p-div">
          <p className='index-p'>
            I&apos;m enthusiastic about building apps and websites that prioritize
            user satisfaction, focusing on creating engaging experiences that
            are easy to use and accessible to all.
          </p>
        </div>
        <div className="cards">
          <Link href={'/stockvest'} className="box1">
          <div className='index-small-card-content'>
            <div className="box1-text">
              <h3>Android Application</h3>
              <h2>StockVest</h2>
            </div>
            <Image src="/pic.png" alt="stonks pic" width={400} height={500} />
         </div>
          </Link>
          <Link href={'/porcelain'} className="box3">
          <div className='index-big-card-content'>
            <div className="box2-text">
              <h3>TypeScript-based web application</h3>
              <h2>Porcelainshop</h2>
            </div>
            <Image
              src="/porcelain3.png"
              alt="porcelain pic"
              width={600}
              height={500}
            />
            </div>
          </Link>
         
          
        </div>
        <div className="cards">
        <Link href={'/matador'} className="box2">
          <div className='index-big-card-content'>
            <div className="box2-text">
              <h3>JavaFX Application</h3>
              <h2>Matador</h2>
            </div>
            <Image
              src="/image1.png"
              alt="matador pic"
              width={600}
              height={500}
            />
            </div>
          </Link>

          <Link href={'/golfrobot'} className="box1">
          <div className='index-small-card-content'>
            <div className="box1-text">
            <h3>Computer Vision & Robotics Control System</h3>
            <h2>GolfRobot</h2>
            </div>
            <Image
              src="/GolfRobot.png"
              alt="golfbot pic"
              width={400}
              height={500}
            />            </div>
          </Link>

        </div>
      </div>
    </Layout>
  );
};

export default Index;