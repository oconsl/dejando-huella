import { useState } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

// TEST DATA
import { users } from '../../TestData/user';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      fistName: data.get('firstName'),
      lastName: data.get('lastName'),
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSignUp();
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // MODIFY WHEN USER DB IS UP
  const handleSignUp = () => {
    localStorage.setItem(
      'testUser',
      JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
      })
    );
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        component='form'
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <Avatar sx={{ m: 1, backgroundColor: 'lightcoral' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <FormControl sx={{ m: 1 }} fullWidth variant='outlined' required>
          <InputLabel htmlFor='outlined-adornment-fistName'>
            First Name
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-fistName'
            value={firstName}
            onChange={handleChangeFirstName}
            onKeyPress={handleKeyPress}
            label='FirstName'
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} fullWidth variant='outlined' required>
          <InputLabel htmlFor='outlined-adornment-LastName'>
            Last Name
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-LastName'
            value={lastName}
            onChange={handleChangeLastName}
            onKeyPress={handleKeyPress}
            label='LastName'
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} fullWidth variant='outlined' required>
          <InputLabel htmlFor='outlined-adornment-email'>Email</InputLabel>
          <OutlinedInput
            id='outlined-adornment-email'
            value={email}
            onChange={handleChangeEmail}
            onKeyPress={handleKeyPress}
            label='Email'
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} fullWidth variant='outlined' required>
          <InputLabel htmlFor='outlined-adornment-username'>
            Username
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-username'
            value={username}
            onChange={handleChangeUsername}
            onKeyPress={handleKeyPress}
            label='Username'
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} fullWidth variant='outlined' required>
          <InputLabel htmlFor='outlined-adornment-password'>
            Password
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handleChangePassword}
            onKeyPress={handleKeyPress}
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
        <Button type='submit' variant='contained' fullWidth sx={{ mt: 3}}>
          Sign Up
        </Button>
        {success && <Alert severity='success'>Signed Up Successfully</Alert>}
      </Box>
    </Container>
  );
};

export default SignUp;
