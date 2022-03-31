import { useEffect, useState } from 'react';
// MATERIAL UI
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
// SERVICES
import { fetchUserData } from '../../services';
// STYLES
import styles from './styles';

const MatchPet = ({ testimonyData }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData({ setUserData, username: testimonyData.username });
  }, [testimonyData.username]);

  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        <Box sx={styles.box_img}>
          <CardMedia
            component='img'
            height='350'
            image={testimonyData.imageURL}
            alt='PetAndOwner'
            sx={styles.cardMedia}
          />
        </Box>
        <CardContent sx={styles.cardContent_testimonyData}>
          <Typography gutterBottom variant='h5' component='div'>
            {`"${testimonyData.petName}" & ${userData.firstName}`}
          </Typography>
          <Typography variant='body1' color='text.primary'>
            {testimonyData.testimony}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default MatchPet;
