import React from 'react';
// MATERIAL UI
import { Box, Container, Grid } from '@mui/material';
// MATERIAL ICONS
import { GitHub } from '@mui/icons-material';
// ASSETS
import dogShadow from '../../assets/dogShadow.png';
import catShadow from '../../assets/catShadow.png';
// STYLES
import styles from './styles';

const Footer = () => {
  const handleClick = (event) => {
    switch (event.target.innerText) {
      case 'Carlos':
        window.open('https://github.com/SpagnoloCarlos', '_blank');
        break;
      case 'Gabriel':
        window.open('https://github.com/gonzalez-gabriel', '_blank');
        break;
      case 'Lourdes':
        window.open('https://github.com/Luudupuy', '_blank');
        break;
      case 'Santiago':
        window.open('https://github.com/oconsl', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={styles.box_container}>
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={2}>
            <Box sx={styles.box_dog}>
              <img src={dogShadow} alt='dog' style={styles.dog} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box borderBottom={1} sx={styles.box_followUs}>
              Follow us
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <Box sx={styles.box_socialNetwork} onClick={handleClick}>
                <GitHub sx={{ mx: 2 }} />
                Carlos
              </Box>
              <Box sx={styles.box_socialNetwork} onClick={handleClick}>
                <GitHub sx={{ mx: 2 }} />
                Gabriel
              </Box>

              <Box sx={styles.box_socialNetwork} onClick={handleClick}>
                <GitHub sx={{ mx: 2 }} />
                Lourdes
              </Box>
              <Box sx={styles.box_socialNetwork} onClick={handleClick}>
                <GitHub sx={{ mx: 2 }} />
                Santiago
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box sx={styles.box_cat}>
              <img src={catShadow} alt='cat' style={styles.cat} />
            </Box>
          </Grid>
        </Grid>
        <Box textAlign='center' sx={styles.box_copyright}>
          ® {new Date().getFullYear()} All rights reserved | Dejando Huella
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
