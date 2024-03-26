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
        <h1>
          <span>
            <span>Hello. I'm Anders.</span>
            <span>A Software Engineer.</span>
          </span>
        </h1>
        <div className="p-div">
          <p>
            I'm enthusiastic about building apps and websites that prioritize
            user satisfaction, focusing on creating engaging experiences that
            are easy to use and accessible to all.
          </p>
        </div>
        <div className="cards">
          <Link href={'/about'} className="box1">
            <div className="box1-text">
              <h3>Android Application</h3>
              <h2>StockVest</h2>
            </div>
            <Image src="/pic.jpeg" alt="stonks pic" width={400} height={500} />
          </Link>

          <Link href={'/about'} className="box2">
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
          </Link>
        </div>
        <div className="cards">
          <div className="box2"></div>
          <div className="box1"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
