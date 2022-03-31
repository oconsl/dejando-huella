import React from 'react';
// ROUTER
import { useNavigate } from 'react-router-dom';
// MATERIAL UI
import {
  Button,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
// HOOKS
import useToken from '../../hooks/useToken';
// STYLES
import styles from './styles';

const CardsPet = (props) => {
  const navigate = useNavigate();
  const { token } = useToken();

  return (
    <Card className='card' sx={styles.card}>
      <CardMedia
        component='img'
        image={props.img_src}
        alt='green iguana'
        sx={styles.cardMedia}
      />
      <CardContent>
        <Typography gutterBottom component='div' sx={styles.typography_title}>
          {props.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {props.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size='small'
          color='primary'
          variant='contained'
          sx={styles.button}
          onClick={() =>
            token
              ? navigate(
                  `/${props.title.replace(' ', '-').toLowerCase()}-pets/1`
                )
              : navigate(`/login`)
          }
        >
          {props.button}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardsPet;
