import React from 'react';
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import './CardsPage.css';

const CardsPet = (props) => {
  return (
    <Card
      className='card'
      sx={{
        margin: '15px',
        width: '100%',
        minWidth: '250px',
        maxWidth: '345px',
        height: '100%',
        maxHeight: '350px',
      }}
    >
      <CardMedia
        component='img'
        height='140'
        image={props.img_src}
        alt='green iguana'
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
          <Button size='small' color='primary'>
            {props.button}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardsPet;
