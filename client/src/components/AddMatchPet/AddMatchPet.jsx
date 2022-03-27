import { useState } from 'react';
// MATERIAL UI
import {
  CssBaseline,
  Container,
  Box,
  Grid,
  Dialog,
  Avatar,
  CardActionArea,
  Card,
  CardMedia,
  Button,
  TextField,
  Typography,
} from '@mui/material';
// MATERIAL ICONS
import PetsIcon from '@mui/icons-material/Pets';
// DEFAULT IMAGES
import default_dog from '../../assets/default_dog.svg';
// COMPONENTS
import CropEasy from '../Crop/CropEasy';
// UTIL FUNCTIONS
import jsonToFormData from '../../utils/jsonToFormData';
// STYLES
import styles from './styles';
// SERVICES
import { sendMatchPetData } from '../../services';

const AddMatchPet = ({ setOpen }) => {
  // CROP
  const [openCrop, setOpenCrop] = useState(false);
  const [photoURL, setPhotoURL] = useState(default_dog);
  // FORM
  const [textData, setTextData] = useState({
    petName: '',
    testimony: '',
  });
  const [file, setFile] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const matchPetDataBody = new FormData();

    const dataBody = {
      ...textData,
      image: file,
      username: JSON.parse(localStorage.getItem('username')),
    };

    const matchPetData = jsonToFormData(dataBody, matchPetDataBody);

    sendMatchPetData({ matchPetData });
    setOpen(false);
  };

  const handleOpenCrop = () => setOpenCrop(true);
  const handleCloseCrop = () => setOpenCrop(false);

  const handleTextDataChange = (key) => (event) => {
    setTextData({ ...textData, [key]: event.target.value });
  };

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    const url = URL.createObjectURL(event.target.files[0]);
    setFile(event.target.files[0]);
    setPhotoURL(url);
    handleOpenCrop();
  };

  const handlePhotoClick = () => {
    handleOpenCrop();
  };

  return (
    <Container component='main' sx={styles.container}>
      <CssBaseline />
      <Box sx={styles.box_container}>
        <div style={styles.div}>
          <Avatar sx={styles.avatar}>
            <PetsIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            New Testimony
          </Typography>
        </div>
        <Box
          component='form'
          onSubmit={handleSubmit}
          encType='multipart/form-data'
          sx={styles.box_form}
          required
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='petName'
                id='petName'
                label='Pet Name'
                onChange={handleTextDataChange('petName')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                name='testimony'
                id='testimony'
                label='Testimony'
                onChange={handleTextDataChange('testimony')}
              />
            </Grid>
          </Grid>
          <Box sx={styles.box_image}>
            <div>Image to upload</div>
            <TextField
              required
              id='image'
              fullWidth
              label='Pet Image'
              name='image'
              type='file'
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleFileChange}
              sx={styles.textField}
            />
            {openCrop && (
              <Dialog
                open={true}
                onClose={handleCloseCrop}
                fullWidth={true}
                maxWidth={'md'}
              >
                <CropEasy
                  {...{ photoURL, setOpenCrop, setPhotoURL, setFile }}
                />
              </Dialog>
            )}
            <Card sx={styles.card}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='New Pet Image'
                  image={photoURL}
                  title='New Pet Image'
                  height='450'
                  onClick={handlePhotoClick}
                  sx={styles.cardMedia}
                />
              </CardActionArea>
            </Card>
          </Box>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={styles.button}
          >
            Add Testimony
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddMatchPet;
