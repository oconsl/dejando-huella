import { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PropTypes from 'prop-types';
import axios from 'axios';

async function loginUser(credentials) {
  return axios
    .post('http://localhost:5001/api/users/login', {
      username: credentials.username,
      password: credentials.password,
    })
    .then(response => response.json());
}

const Login = ({setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogIn = async (event) => {
    event.preventDefault();

    const token = await loginUser({
      username: username,
      password: password,
    });
    setToken(token);
  };

  return (
    <Container component='main' maxWidth='xs'>
      {!success && (
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
            <InputLabel htmlFor='outlined-adornment-username'>
              Username
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-username'
              name='username'
              value={username}
              onChange={handleChangeUsername}
              label='Username'
            />
          </FormControl>
          <FormControl sx={{ m: 1 }} fullWidth variant='outlined' required>
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              name='password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handleChangePassword}
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
      )}
      {success && (
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
            Logged In Successfully
          </Typography>
          <CheckCircleIcon sx={{ color: 'green', transform: 'scale(3)' }} />
        </Box>
      )}
    </Container>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;
