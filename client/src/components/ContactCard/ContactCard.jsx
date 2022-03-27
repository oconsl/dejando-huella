import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { fetchGithubData } from '../../services';
import styles from './styles';

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
    <Card sx={styles.card}>
      <CardContent>
        <CardMedia
          component="img"
          height="300"
          image={userData.avatar}
          alt={userData.user}          
        />
        <CardContent sx={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="div">
            {userData.name}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {'Username: ' + userData.user}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton sx={styles.iconButton} onClick={handleClick}>
            <GitHubIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ContactCard;