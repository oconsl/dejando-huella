import React, { useEffect } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import HeaderLandingPage from '../../components/HeaderLandingPage/HeaderLandingPage';
import Information from '../../components/Information/Information';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import useToken from '../../hooks/useToken';
import HeaderPet from '../../components/HeaderPet/HeaderPet';

const LandingPage = () => {
  const { token } = useToken();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!token && <HeaderLandingPage />}
      {/* {token && <HeaderPet />} */}
      <Carousel />
      <Information />
      <CardsContainer />
    </>
  );
};

export default LandingPage;
