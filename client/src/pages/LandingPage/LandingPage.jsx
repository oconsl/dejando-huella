import React, { useEffect } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import HeaderLandingPage from '../../components/HeaderLandingPage/HeaderLandingPage';
import Information from '../../components/Information/Information';
import CardsContainer from '../../components/CardsContainer/CardsContainer';

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderLandingPage />
      <Carousel />
      <Information />
      <CardsContainer />
    </>
  );
};

export default LandingPage;
