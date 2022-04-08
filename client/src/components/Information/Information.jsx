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
            <Typography variant='h2' sx={styles.typography_h2}>
              READ ABOUT OUR IDEA
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.container}>
          <Box sx={styles.box_information}>
            <Typography variant='body1' sx={styles.typography_body1}>
              The idea of making this web page came to be because of the need to
              have a centralized place in which everyone can upload information
              about pets they found, or that are looking for a new owner to
              adopt them. With our page anyone can easily search for their lost
              pets, or adopt a new one. If you want to take part on this
              community just sign up and start helping others find their pets ~
              Enjoy!
            </Typography>
            <Box className='cards' sx={styles.box_cards}>
              <CardsPage
                title={'Found'}
                description={
                  "If you lost your pet (or found one), try searching for it in our found pet's entries.If there's no information about them yet, you can post in this section and the community will help you find it."
                }
                button={'More information'}
                img_src={foundImg}
              />
              <CardsPage
                title={'Lost'}
                description={
                  'If you lost your pet, you can publish it in this section and the community will help to find it.'
                }
                button={'More information'}
                img_src={lostImg}
              />
              <CardsPage
                title={'Adoption'}
                description={
                  'Here you can find your next pet and add them to your family! ♥.'
                }
                button={'More information'}
                img_src={adoptionImg}
              />
              <CardsPage
                title={'Testimony'}
                description={
                  'Want to read about our lovely stories?  Check out some user testimonies.'
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
