import React from 'react';
import bgImg from '../assets/bg.png';
import Navbar from './components/Navbar';
import Content from './components/Content';
import { useSelector } from 'react-redux';
import { RootState } from '../slices';

const LandingPage = () => {
  const screen = useSelector((state: RootState) => state.Screen);

  return (
    <>
      <div
        className="bgimg"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: screen.isMobile
            ? 'cover'
            : screen.isTablet
            ? 'cover'
            : 'cover',
          backgroundPosition: screen.isMobile
            ? 'center'
            : screen.isTablet
            ? 'center'
            : 'center',
          backgroundRepeat: 'no-repeat',
          opacity: screen.isMobile ? '0.8' : screen.isTablet ? '1' : '1',
        }}
      >
        <Navbar screen={screen} />
        <Content screen={screen} />
      </div>
    </>
  );
};

export default LandingPage;
