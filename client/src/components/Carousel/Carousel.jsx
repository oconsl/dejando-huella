import React from 'react';
// CAROUSEL
import Carousel from 'react-material-ui-carousel';
// MATERIAL UI
import { Paper, Typography } from '@mui/material';
// STYLES
import styles from './styles';
// IMAGES
import carousel1 from '../../assets/carousel1-2.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.jpg';


const items = [
  {
    name: 'Be the person',
    description: 'your dog thinks you are',
    img_src: carousel1,
  },
  {
    name: 'A purr',
    description: 'is worth a thousand words',
    img_src: carousel2,
  },
  {
    name: 'Treat animals',
    description: 'as you would like to be treated',
    img_src: carousel3,
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
