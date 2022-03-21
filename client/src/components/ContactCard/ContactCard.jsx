import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { fetchGithubData } from '../../services';

const ContactCard = ({user}) => {
  const [userData, setUserData] = useState({
    avatar: '',
    name: '',
    user: '',
    url: '',
  });

  const handleClick = () => {
    window.open(userData.url, '_blank');
  }

  useEffect(() => {
    fetchGithubData({setUserData, user});
  }, [user]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={userData.avatar}
          alt={userData.user}          
        />
        <CardContent sx={{ textAlign: 'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            {userData.name}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {'Username: ' + userData.user}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton sx={{margin: 'auto', width: '100%', borderRadius: 0}} onClick={handleClick}>
            <GitHubIcon />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ContactCard;