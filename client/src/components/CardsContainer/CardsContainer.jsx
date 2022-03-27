// MATERIAL UI
import { Box } from '@mui/material';
// COMPONENTS
import ContactCard from '../ContactCard/ContactCard';
// STYLES
import styles from './styles';

const CardsContainer = () => {
  return (
    <Box sx={styles.box}>
      <ContactCard user='Luudupuy'/>
      <ContactCard user='gonzalez-gabriel'/>
      <ContactCard user='oconsl'/>
      <ContactCard user='SpagnoloCarlos'/>
    </Box>
  );
};

export default CardsContainer;