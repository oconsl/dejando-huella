import React, { useEffect } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Information from '../../components/Information/Information';

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Carousel />
      <Information />
    </>
  );
};

export default LandingPage;
