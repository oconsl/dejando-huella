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
  CssBaseline,
} from '@mui/material';
//MATERIAL ICONS
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
//UTILS
import PropTypes from 'prop-types';
import { loginUser } from '../../services';
import HeaderLandingPage from '../HeaderLandingPage/HeaderLandingPage';
import styles from './styles';

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

    const response = await loginUser({ userData, setError });

    if(!error){
      if(typeof response === 'string') setToken(response, userData.username);
      navigate('/');
    }
  };

  return (
    <>
      <HeaderLandingPage />
      <Container component='main' maxWidth='xs' sx={styles.container}>
        <CssBaseline/>
        <Box
          component='form'
          sx={styles.box}
          autoComplete='off'
          onSubmit={handleLogIn}
        >
          <Avatar sx={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Log in
          </Typography>
          <FormControl sx={styles.formControl_username} fullWidth variant='outlined' required>
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
          <FormControl sx={styles.formControl_password} fullWidth variant='outlined' required>
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
                Username or email invalid.
              </FormHelperText>
            )}
          </FormControl>
          <Button
            type='submit'
            variant='contained'
            fullWidth
            sx={styles.button}
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
