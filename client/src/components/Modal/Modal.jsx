import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Grid, Box, Button, Typography, Modal } from '@mui/material';
import MapStatic from '../MapView/MapStatic';
import styles from './styles';

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
          <Box sx={styles.box_container}>
            <Button
              onClick={props.close}
              sx={styles.button_close}
              variant="contained"
            >
              <CloseIcon />
            </Button>
            <Grid container sx={styles.grid_container} >
              <Grid item md={12} lg={4} sx={styles.grid}>
                <Box>
                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    sx={styles.typography_title}
                  >
                    Photo
                  </Typography>
                </Box>
                <Box sx={styles.box_img}>
                  <img style={styles.img} src={props.img_src} alt="" />
                </Box>
                <Box sx={styles.box_description}>
                  <Typography sx={styles.typography_name}>{props.title}</Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={styles.typography}
                  >
                    {props.date}
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={styles.typography}
                  >
                    {props.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={12} lg={4} sx={styles.grid}>
                <Box>
                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    sx={styles.typography_title}
                  >
                    Information
                  </Typography>
                </Box>
                <Box sx={styles.box_information}>
                  <Box>
                    <Typography
                      id="modal-modal-description"
                      sx={styles.typography_specie}
                    >
                      Specie: {props.filter.specie}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      id="modal-modal-description"
                      sx={styles.typography}
                    >
                      Breed: {props.filter.breed}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      id="modal-modal-description"
                      sx={styles.typography}
                    >
                      Color: {props.filter.color}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      id="modal-modal-description"
                      sx={styles.typography}
                    >
                      Sex: {props.filter.sex}
                    </Typography>
                  </Box>
                  {props.filter.specie === 'Dog' && (
                    <Box>
                      <Typography
                        id="modal-modal-description"
                        sx={styles.typography}
                      >
                        Size: {props.filter.size}
                      </Typography>
                    </Box>
                  )}
                  <Box>
                    <Typography
                      id="modal-modal-description"
                      sx={styles.typography}
                    >
                      Age: {props.filter.age}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      id="modal-modal-description"
                      sx={styles.typography}
                    >
                      Fur: {props.filter.fur}
                    </Typography>
                  </Box>
                  {props.page === 'adoption-pets' && (
                    <>
                      <Box>
                        <Typography
                          id="modal-modal-description"
                          sx={styles.typography}
                        >
                          Sterilized: {props.filter.sterilized ? 'Yes' : 'No'}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          id="modal-modal-description"
                          sx={styles.typography}
                        >
                          Dewormed: {props.filter.dewormed ? 'Yes' : 'No'}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          id="modal-modal-description"
                          sx={styles.typography}
                        >
                          Vaccinated: {props.filter.vaccinated ? 'Yes' : 'No'}
                        </Typography>
                      </Box>
                    </>
                  )}
                </Box>
              </Grid>
              <Grid item md={12} lg={4} sx={styles.grid}>
                <Box>
                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    sx={styles.typography_title}
                  >
                    Location
                  </Typography>
                </Box>
                <Box sx={styles.box_location}>
                  <Box sx={styles.map} >
                    <MapStatic position={props.position} />
                  </Box>
                  <Box sx={styles.location_text}>
                    <Typography
                      id="modal-modal-description"
                      sx={styles.typography}
                    >
                      Address Road: {props.addressRoad}
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={styles.typography}
                    >
                      Address Number : {props.addressNumber}
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={styles.typography}
                    >
                      Phone: {props.phone}
                    </Typography>
                  </Box>
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
