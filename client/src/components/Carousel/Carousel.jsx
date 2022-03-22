import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

function MyCarousel() {
  var items = [
    {
      name: 'Be the person',
      description: 'your dog thinks you are',
      img_src:
        'https://latam.globspot.tech/wp-content/uploads/2019/08/localizador-gps-personas-mascotas-globspot-mexico-banner2.jpg',
    },
    {
      name: 'A purr',
      description: 'is worth a thousand words',
      img_src:
        'http://jorgerisi.com/site/wp-content/uploads/2021/06/hoja-de-vida-header.jpg',
    },
    {
      name: 'Treat animals',
      description: 'as you would like to be treated',
      img_src:
        'https://www.helpguau.com/wp-content/uploads/2019/06/perro-ojos-cerrado-helpguau.jpg',
    },
  ];

  return (
    <Carousel
      next={() => {
        /* Do stuff */
      }}
      prev={() => {
        /* Do other stuff */
      }}
      stopAutoPlayOnHover={false}
      sx={{ height: '36vw' }}
      indicators={false}
      duration={500}
      interval={5000}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  img_responsive: {
    height: 'auto',
    maxHeight: '700px',
    width: '100%',
  },
  sec: {
    position: 'absolute',
    /*  top: "6em",
    left: "2em", */
    marginTop: '6em',
    marginLeft: '2em',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: '6vw',
  },
  description: {
    fontSize: '4vw',
  },
});

function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.sec}>
        <Typography
          className={classes.name}
          sx={{ fontWeight: '900', textShadow: '2px 2px 2px black' }}
          variant="h2"
        >
          {props.item.name}
        </Typography>
        <Typography
          className={classes.description}
          sx={{ textShadow: '2px 2px 2px black' }}
          variant="h5"
        >
          {props.item.description}
        </Typography>
      </div>

      <img
        className={classes.img_responsive}
        src={props.item.img_src}
        alt="image"
      />
    </Paper>
  );
}

export default MyCarousel;
