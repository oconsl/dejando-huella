import { useEffect } from 'react';
// COMPONENTS
import Carousel from '../../components/Carousel/Carousel';
import HeaderLandingPage from '../../components/HeaderLandingPage/HeaderLandingPage';
import Information from '../../components/Information/Information';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { Box } from '@mui/material';
// HOOKS
import useToken from '../../hooks/useToken';
// STYLES
import './style.css';

const LandingPage = () => {
  const { token } = useToken();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ backgroundColor: '#a177e9' }}>
      {!token && <HeaderLandingPage />}
      <Carousel />
      <Information />
      <CardsContainer />
    </Box>
  );
};

export default LandingPage;
