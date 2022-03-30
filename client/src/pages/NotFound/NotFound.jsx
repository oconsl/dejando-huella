// MATERIAL UT
import { Box, CssBaseline } from '@mui/material';
// COMPONENTS
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
        <h1 style={styles.title}>PAGE NOT FOUND</h1>
        <img src={dog404} alt='404' style={styles.img}/>
      </Box>
    </>
  );
};

export default NotFound;