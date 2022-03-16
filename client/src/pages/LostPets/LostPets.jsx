import React from 'react';
import CardsPet from '../../components/CardsPage/CardsPage';
import { Container, Box } from '@mui/material';
import Filter from '../../components/Filters/Filters';

const LostPets = () => {
  return (
    <>
      <Box><h1>LOST PETS</h1></Box>
      <Filter />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <CardsPet
          title={'Firulais'}
          description={'Perdido el dia 22-02-2022'}
          button={'Más Detalles'}
          img_src={
            'https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg'
          }
        />
        <CardsPet
          title={'Firulais'}
          description={'Perdido el dia 22-02-2022'}
          button={'Más Detalles'}
          img_src={
            'https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg'
          }
        />
        <CardsPet
          title={'Firulais'}
          description={'Perdido el dia 22-02-2022'}
          button={'Más Detalles'}
          img_src={
            'https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg'
          }
        />
        <CardsPet
          title={'Firulais'}
          description={'Perdido el dia 22-02-2022'}
          button={'Más Detalles'}
          img_src={
            'https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg'
          }
        />
        <CardsPet
          title={'Firulais'}
          description={'Perdido el dia 22-02-2022'}
          button={'Más Detalles'}
          img_src={
            'https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg'
          }
        />
        <CardsPet
          title={'Firulais'}
          description={'Perdido el dia 22-02-2022'}
          button={'Más Detalles'}
          img_src={
            'https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg'
          }
        />
      </Container>
    </>
  );
};

export default LostPets;
