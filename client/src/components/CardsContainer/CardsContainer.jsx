// MATERIAL UI
import { Box, CssBaseline, Typography } from '@mui/material';
// COMPONENTS
import ContactCard from '../ContactCard/ContactCard';
// STYLES
import styles from './styles';

const CardsContainer = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={styles.container}>
        <Box sx={styles.box_title}>
          <Box>
            <Typography variant='h2' sx={styles.typography}>
              GitHub
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.container}>
          <Box sx={styles.box_information}>
            <Box sx={styles.box_cards}>
              <ContactCard user='Luudupuy' />
              <ContactCard user='gonzalez-gabriel' />
              <ContactCard user='oconsl' />
              <ContactCard user='SpagnoloCarlos' />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CardsContainer;
