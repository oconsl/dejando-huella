import { useState } from 'react';
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
import axios from 'axios';

const SignUp = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  });
  const [success, setSuccess] = useState(false);

  const handleUserDataChange = (key) => (event) => {
    setUserData({ ...userData, [key]: event.target.value });
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    console.log(userData);
    axios
      .post('http://localhost:5001/api/users/signup', userData)
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);

          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        }
      });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      {!success && (
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, backgroundColor: 'lightcoral' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box component='form' onSubmit={handleSignUp} sx={{ mt: 3 }} required>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name='firstName'
                  label='First Name'
                  id='firstName'
                  autoComplete='given-name'
                  onChange={handleUserDataChange('firstName')}
                  inputProps={{
                    inputMode: 'text',
                    pattern: '^[a-zA-Z\\s]+$',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                  onChange={handleUserDataChange('lastName')}
                  inputProps={{
                    inputMode: 'text',
                    pattern: '^[a-zA-Z\\s]+$',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='username'
                  label='User Name'
                  name='username'
                  autoComplete='family-name'
                  onChange={handleUserDataChange('username')}
                  inputProps={{
                    inputMode: 'text',
                    pattern: '^[a-zA-Z0-9]+$',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  onChange={handleUserDataChange('email')}
                  inputProps={{
                    inputMode: 'text',
                    pattern: '^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  onChange={handleUserDataChange('password')}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      )}
      {success && (
        <Grow in={true}>
          <Box
            sx={{
              mt: 8,
              mb: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.5em', mb: 4 }}>
              Signed Up Successfully
            </Typography>
            <CheckCircleIcon sx={{ color: 'green', transform: 'scale(3)' }} />
          </Box>
        </Grow>
      )}
    </Container>
  );
};

export default SignUp;
