import React from 'react';
// ROUTER
import { Link } from 'react-router-dom';
// MATERIAL UI
import {
  Button,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
// STYLES
import './CardsPage.css';
import styles from './styles';

const CardsPet = (props) => {
  return (
    <Card
      className='card'
      sx={styles.card}
    >
      <CardMedia
        component='img'
        image={props.img_src}
        alt='green iguana'
        sx={styles.cardMedia}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {props.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {props.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Link
          className='link-button'
          to={`/${props.title.replace(' ', '-').toLowerCase()}/1`}
        >
          <Button size='small' color='primary' variant='contained' sx={styles.button}>
            {props.button}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardsPet;
