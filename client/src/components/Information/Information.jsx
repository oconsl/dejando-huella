import React from 'react';
import { CssBaseline, Box, Container, Typography } from '@mui/material';
import CardsPage from '../CardsPage/CardsPage';
import './Information.css';
import styles from './styles';

const Information = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={styles.container}>
        <Box
          sx={styles.box}
        >
          <Box>
            <Typography variant="h2" sx={styles.typography_h2}>
              About us?
            </Typography>
            <Typography variant="body1" sx={styles.typography_body1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              nemo repellendus sint deserunt totam magnam ex omnis reiciendis,
              consequuntur quibusdam quae numquam officia adipisci excepturi,
              molestiae tenetur, nobis maxime rerum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquid voluptatibus perferendis
              vitae. Doloribus repellendus assumenda excepturi dolores omnis quo
              consequuntur, rem molestias beatae quas. Neque nulla commodi ea
              architecto odio?
            </Typography>
          </Box>

          <Box className="cards" sx={styles.box_cards}>
            <CardsPage
              title={'Found Pets'}
              description={
                'Si perdiste una mascota, podes buscarla en nuestro registro de mascotas'
              }
              button={'More information'}
              img_src={
                'https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg'
              }
            />
            <CardsPage
              title={'Lost Pets'}
              description={
                'Si perdiste una mascota, podes publicarla en esta sección'
              }
              button={'More information'}
              img_src={
                'https://www.fanaticosdelasmascotas.cl/wp-content/uploads/2020/09/Alexas_Fotos-pixabay.jpg'
              }
            />
            <CardsPage
              title={'Adoption Pets'}
              description={
                'Aqui puedes encontra tu proximo compañero de la vida'
              }
              button={'More information'}
              img_src={
                'https://www.gndiario.com/sites/default/files/styles/noticia_detalle_noticia_2_1/public/noticias/alimentos-prohibidos-perros.jpg?itok=cEeYurRC'
              }
            />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Information;
