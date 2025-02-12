import React from 'react';
import bgImg from '../assets/bg.png';
import Navbar from './components/Navbar';
import Content from './components/Content';

const LandingPage = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bgImg})` }}>
        <Navbar />
        <Content />
      </div>
    </>
  );
};

export default LandingPage;
