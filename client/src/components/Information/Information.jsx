import { Fragment } from 'react';
// MATERIAL UI
import { CssBaseline, Box, Typography } from '@mui/material';
// COMPONENTS
import CardsPage from '../CardsPage/CardsPage';
// STYLES
import styles from './styles';
// IMAGES
import foundImg from '../../assets/foundImg.jpg';
import lostImg from '../../assets/lostImg.jpg';
import adoptionImg from '../../assets/adoptionImg.jpg';
import testimonyImg from '../../assets/testimonyImg.png';

const Information = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Box sx={styles.container}>
        <Box sx={styles.box_title}>
          <Box>
            <Typography variant="h2" sx={styles.typography_h2}>
              Read about our idea
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.container}>
          <Box sx={styles.box_information}>
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
            <Box className="cards" sx={styles.box_cards}>
              <CardsPage
                title={'Found'}
                description={
                  'Si perdiste una mascota, podes buscarla en nuestro registro de mascotas'
                }
                button={'More information'}
                img_src={foundImg}
              />
              <CardsPage
                title={'Lost'}
                description={
                  'Si perdiste una mascota, podes publicarla en esta sección'
                }
                button={'More information'}
                img_src={lostImg}
              />
              <CardsPage
                title={'Adoption'}
                description={
                  'Aqui puedes encontra tu proximo compañero de la vida'
                }
                button={'More information'}
                img_src={adoptionImg}
              />
              <CardsPage
                title={'Testimony'}
                description={
                  'Aqui puedes encontra tu proximo compañero de la vida'
                }
                button={'More information'}
                img_src={testimonyImg}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Information;
