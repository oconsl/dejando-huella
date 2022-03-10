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

// TEST DATA 
import { users } from '../../TestData/user';

const Login = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogIn = () => {
    const logUsername = users.filter(user => user.username === values.username);
    
    if(!logUsername.length > 0){
      alert('Wrong credentials 1');
      return;
    }

    if(values.password !== logUsername[0].password){
      alert('Wrong credentials 2');
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  return (
    <Box
      component='form'
      sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
      noValidate
      autoComplete='off'
    >
      <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
        <InputLabel htmlFor='outlined-adornment-username'>username</InputLabel>
        <OutlinedInput
          id='outlined-adornment-username'
          value={values.username}
          onChange={handleChange('username')}
          label='Username'
        />        
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
        <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label='Password'
        />
      </FormControl>
      <Button onClick={handleLogIn} variant="contained" sx={{width: '5%'}}>Log In</Button>
      {success && <Alert severity="success">Log In successful</Alert>}
    </Box>
  );
};

export default Login;
