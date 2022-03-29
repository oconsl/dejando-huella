// MATERIAL UT
import { Box, CssBaseline, Typography } from '@mui/material';
// COMPONENTS
import Progress from '../../components/Progress/Progress';
import HeaderLandingPage from '../../components/HeaderLandingPage/HeaderLandingPage';
import HeaderPet from '../../components/HeaderPet/HeaderPet';
// HOOKS
import useToken from '../../hooks/useToken';
// ASSETS
import dog404 from '../../assets/404dog.png';
// STYLES
import styles from './styles';


const NotFound = () => {
  const { token } = useToken();

  return (
    <>
      <CssBaseline/>
      {!token && <HeaderLandingPage />}
      {token && <HeaderPet />}
      <Box sx={styles.container}>
        <Typography component='h1' variant='h2' sx={styles.title}>PAGE NOT FOUND</Typography>
        <img src={dog404} alt='404' style={styles.img}/>
      </Box>
    </>
  );
};

export default NotFound;