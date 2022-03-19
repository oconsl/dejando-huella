import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Grid } from '@mui/material';

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
              <Grid item xs={12} md={4} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
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
              <Grid item xs={12} md={4} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
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
              </Grid>
              <Grid item xs={12} md={4} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
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
                  <img
                    src="https://i.blogs.es/09af6a/google_maps/200_200.jpg"
                    alt=""
                  />
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
