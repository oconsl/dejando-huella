import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const MatchPetSkeleton = ({ flexVariant }) => {
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
        <Skeleton sx={{ height: 350, width:350 }} animation="wave" variant="rectangular" />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant='h5' component='div'>
            {
              <>
                <Skeleton
                  animation='wave'
                  height={50}
                  width={250}
                  style={{ marginBottom: 6}}
                />
              </>
            }
          </Typography>
          <Typography variant='body2' color='text.primary'>
            {
              <>
                <Skeleton
                  animation='wave'
                  height={10}
                  width={380}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton
                  animation='wave'
                  height={10}
                  width={270}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton
                  animation='wave'
                  height={10}
                  width={290}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation='wave' height={10} width='70%' />
              </>
            }
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default MatchPetSkeleton;
