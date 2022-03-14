import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardsPage from '../CardsPage/CardsPage';
import './Container.css';

const Information = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{marginTop: '20px'}}>
        <Box
          className="info-cards"
          sx={{ bgcolor: 'rgba(188, 255, 182, 0.61)', height: '100%', marginBottom: '20px' }}
        >
          <div>
            <h1 className='title'>About us?</h1>
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
            <CardsPage
              title={'Found Pets'}
              description={
                'Si perdiste una mascota, podes buscarla en nuestro registro de mascotas'
              }
              button={'More information'}
              img_src={'https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg'}
            />
            <CardsPage
              title={'Lost Pets'}
              description={
                'Si perdiste una mascota, podes publicarla en esta sección'
              }
              button={'More information'}
              img_src={'https://www.fanaticosdelasmascotas.cl/wp-content/uploads/2020/09/Alexas_Fotos-pixabay.jpg'}
            />
            <CardsPage
              title={'Adoption'}
              description={
                'Aqui puedes encontra tu proximo compañero de la vida'
              }
              button={'More information'}
              img_src={'https://www.gndiario.com/sites/default/files/styles/noticia_detalle_noticia_2_1/public/noticias/alimentos-prohibidos-perros.jpg?itok=cEeYurRC'}
            />
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Information;
