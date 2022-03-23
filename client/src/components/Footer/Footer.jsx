import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer>
      <Box px={{ xs: 3, sm: 6 }} py={{ xs: 5, sm: 6 }} bgcolor="gray">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Navigation</Box>
              <Box>
                <Link to="/found-pets">Found Pets</Link>
              </Box>
              <Box>
                <Link to="/lost-pets">Lost Pets</Link>
              </Box>
              <Box>
                <Link to="/adoption">Adoption</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Follow us</Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Instagram />
                Instagram
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Facebook />
                Facebook
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Twitter />
                Twitter
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Menu</Box>
              <Box>
                <Link to="/found-pets">About Us</Link>
              </Box>
              <Box>
                <Link to="/lost-pets">Contact</Link>
              </Box>
              <Box>
                <Link to="/adoption">Testimonials</Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            ® {new Date().getFullYear()} All rights reserved | Dejando Huella
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
