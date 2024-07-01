import React from 'react';
import Layout from '@/app/layout';

const golfrobot: React.FC = () => {
  return (
    <Layout>
        <h1>GolfRobot</h1>
        <article>
            <h2>Article Title</h2>
            <p>Article text goes here...</p>
            <img src="path/to/image.jpg" alt="Image description" />
        </article>
    </Layout>
  );
};

export default golfrobot;
