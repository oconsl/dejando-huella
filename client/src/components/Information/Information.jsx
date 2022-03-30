import { Fragment } from 'react';
// MATERIAL UI
import { CssBaseline, Box, Typography } from '@mui/material';
// COMPONENTS
import CardsPage from '../CardsPage/CardsPage';
// STYLES
import './Information.css';
import styles from './styles';

const Information = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Box sx={styles.container}>
        <Box sx={styles.box_title}>
          <Box>
            <Typography variant='h2' sx={styles.typography_h2}>
              Read about our idea
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.container}>
          <Box sx={styles.box_information}>
            <Typography variant='body1' sx={styles.typography_body1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              nemo repellendus sint deserunt totam magnam ex omnis reiciendis,
              consequuntur quibusdam quae numquam officia adipisci excepturi,
              molestiae tenetur, nobis maxime rerum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquid voluptatibus perferendis
              vitae. Doloribus repellendus assumenda excepturi dolores omnis quo
              consequuntur, rem molestias beatae quas. Neque nulla commodi ea
              architecto odio?
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
