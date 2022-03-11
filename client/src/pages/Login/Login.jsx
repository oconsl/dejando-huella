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

// TEST DATA
import { users } from '../../TestData/user';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // MODIFY WHEN USER DB IS UP
  const handleLogIn = () => {
    const logUsername = users.filter((user) => user.username === username);

    if (!logUsername.length > 0) {
      alert('Wrong credentials');
      return;
    }

    if (password !== logUsername[0].password) {
      alert('Wrong credentials');
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
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
        onSubmit={handleSubmit}
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
    </Container>
  );
};

export default Login;
