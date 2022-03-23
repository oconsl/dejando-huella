import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { fetchUserData } from '../../services';

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    id: 0,
  });
  const [letter, setLetter] = useState('');

  const handleEditClick = () => {
    // MODIFY USER 
  };

  const handleDeleteClick = () => {
    // ASK FOR DELETE
  };

  useEffect(() => {
    fetchUserData({ setUserData });
    setLetter(JSON.parse(localStorage.getItem('username'))[0].toUpperCase());
  }, []);

  return (
    <Box
      sx={{ minWidth: 500, display: 'flex', justifyContent: 'center', my: 3 }}
    >
      <Card sx={{ width: '25%', border: 'solid 2px grey' }}>
        <CardContent>
          <Typography
            variant='h5'
            component='div'
            sx={{ textAlign: 'center', mb: 3 }}
          >
            PROFILE
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                flex: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{ bgcolor: 'orange', transform: 'scale(2.5)' }}
                aria-label='recipe'
              >
                {letter}
              </Avatar>
            </Box>
            <Box
              sx={{
                ml: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                flex: 4,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography color='text.secondary'>Username:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    {userData.username ? userData.username : '-'}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography color='text.secondary'>Email:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    {userData.email ? userData.email : '-'}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography color='text.secondary'>First Name:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    {userData.firstName ? userData.firstName : '-'}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography color='text.secondary'>Last Name:</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    {userData.lastName ? userData.lastName : '-'}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button
            size='large'
            variant='contained'
            color='success'
            onClick={handleEditClick}
          >
            Edit
          </Button>
          <Button
            size='large'
            variant='contained'
            color='error'
            onClick={handleDeleteClick}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Profile;
