import { useEffect, useState } from 'react';
// MATERIAL UI
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
} from '@mui/material';
// MATERIAL ICONS
import GitHubIcon from '@mui/icons-material/GitHub';
// SERVICES
import { fetchGithubData } from '../../services';
// STYLES
import styles from './styles';

const ContactCard = ({ user }) => {
  const [userData, setUserData] = useState({
    avatar: '',
    name: '',
    user: '',
    url: '',
  });

  const handleClick = () => {
    window.open(userData.url, '_blank');
  };

  useEffect(() => {
    fetchGithubData({ setUserData, user });
  }, [user]);

  return (
    <Card sx={styles.card}>
      <CardContent>
        <CardMedia
          component='img'
          height='300'
          image={userData.avatar}
          alt={userData.user}
          sx={styles.image}
        />
        <CardContent sx={styles.cardContent}>
          <Typography gutterBottom variant='h5' component='div'>
            {userData.name}
          </Typography>
          <Typography variant='body2' color='text.primary'>
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
