import { Fragment } from 'react';
// MATERIAL UI
import { CssBaseline, Box, Typography } from '@mui/material';
// COMPONENTS
import CardsPage from '../CardsPage/CardsPage';
// STYLES
import styles from './styles';

const Information = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Box sx={styles.container}>
        <Box sx={styles.box_title}>
          <Box>
            <Typography variant='h2' sx={styles.typography_h2}>
              READ ABOUT OUR IDEA
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.container}>
          <Box sx={styles.box_information}>
            <Typography variant='body1' sx={styles.typography_body1}>
              The idea of building this page comes alive because the need of
              have a centralized place in which we can upload our pet's
              information. With our page all the people could search and find
              different entries, so they could try to search, find or adopt any
              pet published here. If you want to take part on this community,
              just sign up and start helping others to find their pets, and they
              will help you too! ~ Enjoy !
            </Typography>
            <Box className='cards' sx={styles.box_cards}>
              <CardsPage
                title={'Found'}
                description={
                  'Si perdiste una mascota, podes buscarla en nuestro registro de mascotas'
                }
                button={'More information'}
                img_src={
                  'https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg'
                }
              />
              <CardsPage
                title={'Lost'}
                description={
                  'Si perdiste una mascota, podes publicarla en esta sección'
                }
                button={'More information'}
                img_src={
                  'https://www.fanaticosdelasmascotas.cl/wp-content/uploads/2020/09/Alexas_Fotos-pixabay.jpg'
                }
              />
              <CardsPage
                title={'Adoption'}
                description={
                  'Aqui puedes encontra tu proximo compañero de la vida'
                }
                button={'More information'}
                img_src={
                  'https://www.gndiario.com/sites/default/files/styles/noticia_detalle_noticia_2_1/public/noticias/alimentos-prohibidos-perros.jpg?itok=cEeYurRC'
                }
              />
              <CardsPage
                title={'Testimony'}
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
        </Box>
      </Box>
    </Fragment>
  );
};

export default Information;
