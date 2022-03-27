import { useEffect, useState } from 'react';
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
  Switch,
  TextField,
  Typography,
} from '@mui/material';
// MATERIAL ICONS
import PetsIcon from '@mui/icons-material/Pets';
import LocationIcon from '@mui/icons-material/AddLocationAlt';
// DEFAULT IMAGES
import default_dog from '../../assets/default_dog.svg';
import default_cat from '../../assets/default_cat.svg';
// COMPONENTS
import MapView from '../MapView/MapView';
import CropEasy from '../Crop/CropEasy';
import DatePick from '../DatePick/DatePick';
import Breeds from '../FormComponents/Breeds/Breeds';
import CustomForm from '../FormComponents/CustomForm/CustomForm';
// INPUT DATA
import {
  sizeOptions,
  sexOptions,
  colorOptions,
  ageCatOptions,
  ageDogOptions,
  furOptions,
} from '../../utils/petOptions';
// UTIL FUNCTIONS
import formatDate from '../../utils/formatDate';
import jsonToFormData from '../../utils/jsonToFormData';
// STYLES
import styles from './styles';
// SERVICES
import { sendFoundPetData } from '../../services';

const AddFoundPet = ({ setOpen }) => {
  // PET
  const [dogPet, setDogPet] = useState(true);
  // CROP
  const [openCrop, setOpenCrop] = useState(false);
  const [photoURL, setPhotoURL] = useState(default_dog);
  // MAP
  const [openMap, setOpenMap] = useState(false);
  // FORM
  const [textData, setTextData] = useState({
    description: '',
    phone: '',
    addressNumber: '',
  });
  const [optionData, setOptionData] = useState({
    breed: '',
    sex: '',
    size: '',
    age: '',
    color: '',
    fur: '',
  });
  const [date, setDate] = useState({});
  const [address, setAddress] = useState('');
  const [latLng, setLatLng] = useState({});
  const [file, setFile] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const foundPetDataBody = new FormData();

    const dataBody = {
      username: JSON.parse(localStorage.getItem('username')),
      ...textData,
      filter: {
        ...optionData,
        specie: dogPet ? 'Dog' : 'Cat',
      },
      latLng: latLng,
      image: file,
      addressRoad: address,
      date: formatDate(date),
    };
    const foundPetData = jsonToFormData(dataBody, foundPetDataBody);

    sendFoundPetData({ foundPetData });
    setOpen(false);
  };

  const handleOpenCrop = () => setOpenCrop(true);
  const handleCloseCrop = () => setOpenCrop(false);
  const handleOpenMap = () => setOpenMap(true);
  const handleCloseMap = () => setOpenMap(false);

  const handleTextDataChange = (key) => (event) => {
    setTextData({ ...textData, [key]: event.target.value });
  };

  const handleFileChange = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setFile(url);
    setPhotoURL(url);
    handleOpenCrop();
  };

  const handlePetSwitchChange = () => {
    setDogPet(!dogPet);
  };

  const handlePhotoClick = () => {
    handleOpenCrop();
  };

  const handleOptionDataChange = (key) => (event) => {
    setOptionData({ ...optionData, [key]: event.target.innerText });
  };

  useEffect(() => {
    switch (dogPet) {
      case true:
        setPhotoURL(default_dog);
        return;
      case false:
        setPhotoURL(default_cat);
        return;
      default:
        return;
    }
  }, [dogPet]);

  return (
    <Container component='main' sx={styles.container}>
      <CssBaseline />
      <Box sx={styles.box_container}>
        <div style={styles.div}>
          <Avatar sx={styles.avatar}>
            <PetsIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            New Found Pet
          </Typography>
        </div>
        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={styles.box_form}
          required
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sx={styles.grid_switch}>
              <Typography>Cat</Typography>
              <Switch onChange={handlePetSwitchChange} defaultChecked />
              <Typography>Dog</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                name='description'
                id='description'
                label='Description'
                onChange={handleTextDataChange('description')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='phone'
                id='phone'
                label='Phone'
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '^[0-9]{10,11}$',
                }}
                onChange={handleTextDataChange('phone')}
                helperText='Format: 10 to 11 digits'
              />
            </Grid>
            <Grid item xs={12} sx={styles.grid_address}>
              <DatePick saveDate={setDate} />
              <TextField
                required
                fullWidth
                id='addressNum'
                label='Address Num'
                name='addressNum'
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                }}
                onChange={handleTextDataChange('addressNumber')}
                sx={styles.textField_address}
              />
              <LocationIcon sx={styles.locationIcon} onClick={handleOpenMap} />
              {openMap && (
                <Dialog
                  open={true}
                  onClose={handleCloseMap}
                  fullWidth={true}
                  maxWidth={'md'}
                >
                  <MapView
                    saveLocation={setLatLng}
                    closeMap={handleCloseMap}
                    saveAddress={setAddress}
                  />
                </Dialog>
              )}
            </Grid>
            <Grid item xs={12} sm={9}>
              {dogPet && (
                <Breeds
                  onChange={handleOptionDataChange('breed')}
                  isADog={dogPet}
                />
              )}
              {!dogPet && (
                <Breeds
                  onChange={handleOptionDataChange('breed')}
                  isADog={dogPet}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomForm
                onChange={handleOptionDataChange('sex')}
                options={sexOptions}
                label='Sex'
              />
            </Grid>
            {dogPet && (
              <Grid item xs={12} sm={6}>
                <CustomForm
                  onChange={handleOptionDataChange('size')}
                  options={sizeOptions}
                  label='Size'
                />
              </Grid>
            )}
            <Grid item xs={12} sm={6}>
              {dogPet && (
                <CustomForm
                  onChange={handleOptionDataChange('age')}
                  options={ageDogOptions}
                  label='Age'
                />
              )}
              {!dogPet && (
                <CustomForm
                  onChange={handleOptionDataChange('age')}
                  options={ageCatOptions}
                  label='Age'
                />
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomForm
                onChange={handleOptionDataChange('color')}
                options={colorOptions}
                label='Color'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomForm
                onChange={handleOptionDataChange('fur')}
                options={furOptions}
                label='Fur'
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
              sx={styles.textField_image}
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
            Add Found Pet
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddFoundPet;
