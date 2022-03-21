import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MatchPet = ({ testimonyData, flexVariant }) => {
  return (
    <Card sx={{ maxWidth: 800, margin: '0.5em' }}>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: !flexVariant ? 'row-reverse' : 'row',
        }}
      >
        <CardMedia
          component='img'
          height='350'
          image={testimonyData.image}
          alt={'img'}
          sx={{ width: '350px' }}
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant='h5' component='div'>
            {`"${testimonyData.petName}" & ${testimonyData.username}`}
          </Typography>
          <Typography variant='body2' color='text.primary'>
            {
              testimonyData.testimony
            }
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default MatchPet;
