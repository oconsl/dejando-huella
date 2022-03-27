import { useState, useEffect } from 'react';
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
import { fetchUserDataById, loginUser, updateUserData } from '../../services';

const ModifyUser = ({ id, setOpen }) => {
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
  const [newPassword, setNewPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleUserDataChange = (key) => (event) => {
    setUserData({ ...userData, [key]: event.target.value });

    setLoginError(false);
    setError({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    });
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);

    setLoginError(false);
    setError({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    });
  }

  const handleUpdate = async (event) => {
    event.preventDefault();

    const response = await loginUser({ userData, setError: setLoginError });

    if(!loginError){
      if(typeof response === 'string'){
        if(newPassword !== '') userData.password = newPassword;

        const status = await updateUserData({ userData, setError, id });
        
        if(status === 200) {
          setSuccess(true);

          setTimeout(() => {
            setSuccess(false);            
            setOpen(false);
          }, 3000);
        }
      }
    }
  };

  useEffect(() => {
    fetchUserDataById({ setUserData, id });
  }, [id]);

  return (
    <>
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
              Modify
            </Typography>
            <Box
              component='form'
              onSubmit={handleUpdate}
              sx={{ mt: 3 }}
              required
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    value={userData.firstName}
                    error={error.firstName !== ''}
                    name='firstName'
                    label='First Name'
                    id='firstName'
                    autoComplete='given-name'
                    onChange={handleUserDataChange('firstName')}
                    helperText={error.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    value={userData.lastName}
                    error={error.lastName !== ''}
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    autoComplete='family-name'
                    onChange={handleUserDataChange('lastName')}
                    helperText={error.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={userData.username}
                    fullWidth
                    disabled
                    id='username'
                    label='User Name'
                    name='username'
                    onChange={handleUserDataChange('username')}
                    inputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={userData.email}
                    disabled
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    onChange={handleUserDataChange('email')}
                    inputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    error={loginError}
                    label='Current password'
                    type='password'
                    id='password'
                    autoComplete='password'
                    onChange={handleUserDataChange('password')}
                    helperText={loginError ? 'Wrong password.' : null}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    error={error.password !== ''}
                    label='New password'
                    type='newPassword'
                    id='newPassword'
                    autoComplete='new-password'
                    onChange={handleNewPasswordChange}
                    helperText={
                      error.password === ''
                        ? 'Only fill this field if you want a new password.'
                        : error.password
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Modify
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
                User modified successfully!
              </Typography>
              <CheckCircleIcon sx={{ color: 'green', transform: 'scale(3)' }} />
            </Box>
          </Grow>
        )}
      </Container>
    </>
  );
};

export default ModifyUser;
