import React from 'react';
import HeaderPet from '../../components/HeaderPet/HeaderPet';
import Carousel from '../../components/Carousel/Carousel';
import Information from '../../components/Container/Container';

const LandingPage = () => {
  return (
    <>
      <HeaderPet />
      <Carousel
        next={(next, active) =>
          console.log(`we left ${active}, and are now at ${next}`)
        }
        prev={(prev, active) =>
          console.log(`we left ${active}, and are now at ${prev}`)
        }
      />
      <Information />
    </>
  );
};

export default LandingPage;
