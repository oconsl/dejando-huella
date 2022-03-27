import React from 'react';
// CAROUSEL
import Carousel from 'react-material-ui-carousel';
// MATERIAL UI
import { Paper, Typography } from '@mui/material';
// STYLES
import styles from './styles';

const items = [
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

const MyCarousel = () => {
  return (
    <Carousel
      next={() => {
        /* Do stuff */
      }}
      prev={() => {
        /* Do other stuff */
      }}
      stopAutoPlayOnHover={false}
      sx={styles.carousel}
      indicators={false}
      duration={500}
      interval={5000}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = (props) => {
  return (
    <Paper sx={styles.paper}>
      <div style={styles.div_section}>
        <Typography
          sx={styles.typography_name}
          variant="h2"
        >
          {props.item.name}
        </Typography>
        <Typography
          sx={styles.typography_description}
          variant="h5"
        >
          {props.item.description}
        </Typography>
      </div>
      <img
        style={styles.img}
        src={props.item.img_src}
        alt='carousel-content'
      />
    </Paper>
  );
}

export default MyCarousel;
