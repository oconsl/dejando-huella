import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Grid, Box, Button, Typography, Modal } from '@mui/material';
import MapStatic from '../MapView/MapStatic';

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
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
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
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Information
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Specie: {props.filter.specie}
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Breed: {props.filter.breed}
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Color: {props.filter.color}
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Sex: {props.filter.sex}
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Size: {props.filter.size}
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Age: {props.filter.age}
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Fur: {props.filter.fur}
                  </Typography>
                </Box>
                {props.page === 'adoption-pets' && (
                  <>
                    <Box>                  
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Sterilized: {props.filter.sterilized ? 'Yes' : 'No'}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Dewormed: {props.filter.dewormed ? 'Yes' : 'No'}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Vaccinated: {props.filter.vaccinated ? 'Yes' : 'No'}
                      </Typography>
                    </Box>
                  </> 
                )}
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Location
                  </Typography>
                </Box>
                <Box>
                  <MapStatic position={props.position} />
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Address Road: {props.addressRoad}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Address Number : {props.addressNumber}
                  </Typography>
                </Box>
                <Box>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Phone: {props.phone}
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
