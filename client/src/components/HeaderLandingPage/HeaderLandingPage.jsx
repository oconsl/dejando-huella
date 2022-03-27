import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles';

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
                color="secondary"
                variant="contained"
                onClick={handleLoginClick}
              >
                Login
              </Button>
              <Button
                sx={styles.button_signup}
                color="secondary"
                variant="contained"
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
