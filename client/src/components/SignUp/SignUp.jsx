import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//MATERIAL UI
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Avatar,
  Grid,
  TextField,
  Button,
} from '@mui/material';
//MATERIAL ICONS
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
//MATERIAL TRANSITIONS
import Grow from '@mui/material/Grow';
//UTILS
import HeaderLandingPage from '../HeaderLandingPage/HeaderLandingPage';
import { sendUserData } from '../../services';
import styles from './styles';

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  });
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleUserDataChange = (key) => (event) => {
    setUserData({ ...userData, [key]: event.target.value });

    setError({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    const status = await sendUserData({ userData, setError });

    if (status === 200) {
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        navigate('/login');
      }, 3000);
    }
  };

  return (
    <>
      <HeaderLandingPage />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {!success && (
          <Box sx={styles.box_container}>
            <Avatar sx={styles.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSignUp}
              sx={styles.box_child}
              required
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    error={error.firstName !== ''}
                    name="firstName"
                    label="First Name"
                    id="firstName"
                    autoComplete="given-name"
                    onChange={handleUserDataChange('firstName')}
                    helperText={error.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    error={error.lastName !== ''}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={handleUserDataChange('lastName')}
                    inputProps={{
                      inputMode: 'text',
                      pattern: '^[a-zA-Z\\s]+$',
                    }}
                    helperText={error.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    error={error.username !== ''}
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="family-name"
                    onChange={handleUserDataChange('username')}
                    inputProps={{
                      inputMode: 'text',
                      pattern: '^[a-zA-Z0-9]+$',
                    }}
                    helperText={error.username}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    error={error.email !== ''}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleUserDataChange('email')}
                    inputProps={{
                      inputMode: 'text',
                      pattern:
                        '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$',
                    }}
                    helperText={
                      error.email === '' ? 'example@test.com' : error.email
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    error={error.password !== ''}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handleUserDataChange('password')}
                    helperText={error.password}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={styles.button}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        )}
        {success && (
          <Grow in={true}>
            <Box sx={styles.box_signed}>
              <Typography sx={styles.typography}>
                Signed Up Successfully
              </Typography>
              <CheckCircleIcon sx={styles.checkCircleIcon} />
            </Box>
          </Grow>
        )}
      </Container>
    </>
  );
};

export default SignUp;
