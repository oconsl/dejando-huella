import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardsPet from '../CardsPet/CardsPet';
import './Container.css';

const Information = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          className="info-cards"
          sx={{ bgcolor: 'rgba(188, 255, 182, 0.61)', height: '300vh' }}
        >
          <div>
            <h1 className='title'>¿Quiene Somos?</h1>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              nemo repellendus sint deserunt totam magnam ex omnis reiciendis,
              consequuntur quibusdam quae numquam officia adipisci excepturi,
              molestiae tenetur, nobis maxime rerum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid voluptatibus perferendis vitae. Doloribus repellendus
              assumenda excepturi dolores omnis quo consequuntur, rem molestias
              beatae quas. Neque nulla commodi ea architecto odio?
            </p>
          </div>

          <div className='cards'>
            <CardsPet
              title={'Mascotas Encontradas'}
              description={
                'Si perdiste una mascota, podes buscarla en nuestro registro de mascotas'
              }
              button={'Ver mascotas encontradas'}
              img_src={'https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg'}
            />
            <CardsPet
              title={'Mascotas Perdidas'}
              description={
                'Si perdiste una mascota, podes publicarla en esta sección'
              }
              button={'Ver mascotas perdidas'}
              img_src={'https://www.fanaticosdelasmascotas.cl/wp-content/uploads/2020/09/Alexas_Fotos-pixabay.jpg'}
            />
            <CardsPet
              title={'Adopta una mascota'}
              description={
                'Aqui puedes encontra tu proximo compañero de la vida'
              }
              button={'Adopta una mascota'}
              img_src={'https://www.gndiario.com/sites/default/files/styles/noticia_detalle_noticia_2_1/public/noticias/alimentos-prohibidos-perros.jpg?itok=cEeYurRC'}
            />
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Information;
