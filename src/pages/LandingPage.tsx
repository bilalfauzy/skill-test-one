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
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: screen.isMobile
            ? 'cover' // mobile: gambar menutupi area penuh, tapi dipotong 60%
            : screen.isTablet
            ? 'cover' // tablet: gambar menutupi 80% dari tinggi
            : 'cover', // desktop: gambar menutupi penuh
          backgroundPosition: 'center', // pastikan posisi gambar tetap terfokus di tengah
          backgroundRepeat: 'no-repeat', // memastikan gambar tidak terulang
        }}
      >
        <Navbar screen={screen} />
        <Content screen={screen} />
      </div>
    </>
  );
};

export default LandingPage;
