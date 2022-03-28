// ROUTER
import { Link, useNavigate } from 'react-router-dom';
// MATERIAL UI
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
} from '@mui/material';
// STYLES
import styles from './styles';
// PAGE ARRAYS
const pages = ['Found Pets', 'Lost Pets', 'Adoption'];
const settings = ['Profile', 'Logout'];

const HeaderLandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <AppBar position='sticky' sx={styles.appBar}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={styles.typography_toolbar}
          >
            <Link to='/'>
              <img
                width={'45px'}
                height={'45px'}
                src='https://cdn-icons-png.flaticon.com/512/1076/1076826.png'
                style={styles.img}
              />
            </Link>
          </Typography>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={styles.typography}
          >
            <Link to='/'>
              <img
                width={'45px'}
                height={'45px'}
                src='https://cdn-icons-png.flaticon.com/512/1076/1076826.png'
                style={styles.img}
              />
            </Link>
          </Typography>
          <Box sx={styles.box_buttons}>
            <Button
              sx={styles.button_login}
              color='secondary'
              variant='contained'
              onClick={handleLoginClick}
            >
              Login
            </Button>
            <Button
              sx={styles.button_signup}
              color='secondary'
              variant='contained'
              onClick={handleSignUpClick}
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderLandingPage;
