import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './CardsPage.css';
import { Link } from 'react-router-dom';

import Dialog from '../../TestData/pruebaModal'

const CardsPet = (props) => {
  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img_src}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link className='link-button' to={`/${props.title.replace(' ', '-').toLowerCase()}`}>
          <Button size="small" color="primary" >
            {props.button}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardsPet;