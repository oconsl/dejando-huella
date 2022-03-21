import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import Box from '@mui/material/Box';

const CardsContainer = () => {
  return (
    <Box sx={{display: 'flex',justifyContent: 'space-around', alignItems: 'center'}}>
      <ContactCard user='Luudupuy'/>
      <ContactCard user='gonzalez-gabriel'/>
      <ContactCard user='oconsl'/>
      <ContactCard user='SpagnoloCarlos'/>
    </Box>
  );
};

export default CardsContainer;