import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//MATERIAL UI
import {
  Box,
  Avatar,
  Typography,
  Container,
  OutlinedInput,
  FormControl,
  FormHelperText,
  InputLabel,
  InputAdornment,
  Button,
  IconButton,
  Dialog,
} from '@mui/material';
//MATERIAL ICONS
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
//UTILS
import PropTypes from 'prop-types';
import { loginUser } from '../../services';
import HeaderLandingPage from '../HeaderLandingPage/HeaderLandingPage';


const Login = ({ setToken }) => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleUserDataChange = (key) => (event) => {
    setError(false);
    setUserData({ ...userData, [key]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogIn = async (event) => {
    event.preventDefault();

    const response = loginUser(userData);

    if (response === 'Invalid credentials') setError(true);
    else {
      setToken(response, userData.username);
      navigate('/lost-pets');
    }
  };

  return (
    <>
      <HeaderLandingPage />
      <Container component='main' maxWidth='xs'>
        <Box
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 8,
          }}
          autoComplete='off'
          onSubmit={handleLogIn}
        >
          <Avatar sx={{ m: 1, backgroundColor: 'lightcoral' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Log in
          </Typography>
          <FormControl sx={{ m: 1 }} fullWidth variant='outlined' required>
            <InputLabel htmlFor='username-component' error={error}>
              Username
            </InputLabel>
            <OutlinedInput
              error={error}
              id='username-component'
              name='username'
              value={userData.username}
              onChange={handleUserDataChange('username')}
              label='Username'
              inputProps={{
                inputMode: 'text',
                pattern: '^[A-Za-z0-9]*$',
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1 }} fullWidth variant='outlined' required>
            <InputLabel htmlFor='password-component-password' error={error}>
              Password
            </InputLabel>
            <OutlinedInput
              error={error}
              id='password-component'
              name='password'
              type={showPassword ? 'text' : 'password'}
              value={userData.password}
              onChange={handleUserDataChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
            {error && (
              <FormHelperText id='password-component-error-text' error>
                Invalid credentials.
              </FormHelperText>
            )}
          </FormControl>
          <Button
            type='submit'
            variant='contained'
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </Box>
      </Container>
    </>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
