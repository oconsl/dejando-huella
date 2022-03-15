import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Grid } from '@mui/material';
import './Modal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 'auto',
  maxHeight: '80%',
  width: '60vw',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalFoundPets = (props) => {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container maxWidth="lg">
          <Box sx={style}>
            <Button onClick={props.close}>
              <CloseIcon />
            </Button>
            <Grid container spacing={5}>
              <Grid className='grid-item' item xs={12} md={4} direction='column'>
                <Box>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {props.title}
                  </Typography>
                </Box>
                <Box>
                  <img width={200} height={200} src={props.img_src} alt="" />
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {props.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid className='grid-item' item xs={12} md={4} direction='column'>
                <Box>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Informacion
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Especie: Perro
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Color: Negro
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Raza: Salchicha
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Sexo: Macho
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Tamaño: Chico
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Edad: 3 años
                  </Typography>
                </Box>
              </Grid>
              <Grid className='grid-item' item xs={12} md={4} direction='column'>
                <Box>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Ubicacion
                  </Typography>
                </Box>
                <Box>
                  <img
                    src="https://i.blogs.es/09af6a/google_maps/200_200.jpg"
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Calle Falsa 123 - Tucuman
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Cel: 3815521987
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Modal>
    </div>
  );
};

export default ModalFoundPets;
