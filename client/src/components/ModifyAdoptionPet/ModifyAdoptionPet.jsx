import { useEffect, useState } from 'react';
// MATERIAL UI
import {
  CssBaseline,
  Box,
  Grid,
  Dialog,
  CardActionArea,
  Card,
  CardMedia,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
// MATERIAL ICONS
import LocationIcon from '@mui/icons-material/AddLocationAlt';
// COMPONENTS
import MapStatic from '../MapView/MapStatic';
import CropEasy from '../Crop/CropEasy';
import Breeds from '../FormComponents/Breeds/Breeds';
import CustomForm from '../FormComponents/CustomForm/CustomForm';
// ASSETS
import logo from '../../assets/logo.png';
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
// SERVICES
import { fetchAdoptionPetData, updateAdoptionPetData } from '../../services';
// STYLES
import styles from '../AddAdoptionPet/styles';
import styles_found from '../ModifyFoundPet/styles_found';

const ModifyAdoptionPet = ({ id, setOpen }) => {
  const [newPhoto, setNewPhoto] = useState(false);
  //PET
  const [dogPet, setDogPet] = useState(true);
  //CROP
  const [openCrop, setOpenCrop] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);
  //MAP
  const [openMap, setOpenMap] = useState(false);
  //FORM
  const [textData, setTextData] = useState({
    petName: '',
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
  const [boolData, setBoolData] = useState({
    vaccinated: false,
    sterilized: false,
    dewormed: false,
  });
  const [address, setAddress] = useState('');
  const [latLng, setLatLng] = useState({});
  const [file, setFile] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const adoptionPetDataBody = new FormData();

    const dataBody = {
      ...textData,
      filter: {
        ...optionData,
        size: dogPet ? optionData.size : 'Common',
        ...boolData,
        specie: dogPet ? 'Dog' : 'Cat',
      },
      latLng: latLng,
      date: formatDate(new Date()),
      addressRoad: address,
    };
    if (newPhoto) dataBody.image = file;

    const adoptionPetData = jsonToFormData(dataBody, adoptionPetDataBody);

    updateAdoptionPetData({ adoptionPetData });
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
    setNewPhoto(true);
  };

  const handlePhotoClick = () => {
    handleOpenCrop();
  };

  const handleBoolDataChange = (key) => () => {
    setBoolData({ ...boolData, [key]: !boolData[key] });
  };

  const handleOptionDataChange = (key) => (event) => {
    key !== 'size'
      ? setOptionData({ ...optionData, [key]: event.target.innerText })
      : setOptionData({
          ...optionData,
          [key]: event.target.innerText.split('(')[0].trim(),
        });
  };

  useEffect(() => {
    const savedData = (fetchedData) => {
      setTextData({
        petName: fetchedData.petName,
        description: fetchedData.description,
        phone: fetchedData.phone,
        addressNumber: fetchedData.addressNumber,
      });
      setOptionData({
        breed: fetchedData.filter.breed,
        sex: fetchedData.filter.sex,
        size: fetchedData.filter.size,
        age: fetchedData.filter.age,
        color: fetchedData.filter.color,
        fur: fetchedData.filter.fur,
      });
      setBoolData({
        vaccinated: fetchedData.filter.vaccinated,
        sterilized: fetchedData.filter.sterilized,
        dewormed: fetchedData.filter.dewormed,
      });
      setAddress(fetchedData.addressRoad);
      setLatLng(fetchedData.latLng);
      setDogPet(fetchedData.filter.specie === 'Dog');
      setPhotoURL(fetchedData.imageURL);
    };

    fetchAdoptionPetData({ savedData, id });
  }, [id]);

  return (
    <Box component='main' sx={styles.container}>
      <CssBaseline />
      <Box sx={styles.box_container}>
        <div style={styles.div}>
          <Box sx={styles.avatar}>
            <img src={logo} alt='paw' style={styles.img} />
          </Box>
          <Typography component='h1' variant='h5'>
            Modify Adoption Pet
          </Typography>
        </div>
        <Box
          component='form'
          onSubmit={handleSubmit}
          encType='multipart/form-data'
          sx={styles.box_form}
          required
        >
          <Box sx={styles_found.box_formLeft}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='petName'
                  id='petName'
                  label='Pet Name'
                  value={textData.petName}
                  onChange={handleTextDataChange('petName')}
                />
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
                  value={textData.description}
                  onChange={handleTextDataChange('description')}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
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
                  value={textData.phone}
                  onChange={handleTextDataChange('phone')}
                  helperText='Format: 10 to 11 digits'
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  disabled
                  required
                  fullWidth
                  id='addressNum'
                  label='Address Num'
                  name='addressNum'
                  inputProps={{
                    readOnly: true,
                  }}
                  value={textData.addressNumber}
                  onChange={handleTextDataChange('addressNumber')}
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  disabled
                  required
                  fullWidth
                  id='addressRoad'
                  label='Address Road'
                  name='addressRoad'
                  inputProps={{
                    readOnly: true,
                  }}
                  value={address}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <LocationIcon
                  sx={styles.locationIcon}
                  onClick={handleOpenMap}
                />
                {openMap && (
                  <Dialog
                    open={true}
                    onClose={handleCloseMap}
                    fullWidth={true}
                    maxWidth={'md'}
                  >
                    <MapStatic position={latLng} closeMap={handleCloseMap} />
                  </Dialog>
                )}
              </Grid>
            <Grid item xs={12} sm={9}>
              {dogPet && (
                <Breeds
                  onChange={handleOptionDataChange('breed')}
                  isADog={dogPet}
                  value={optionData.breed}
                  />
                  )}
              {!dogPet && (
                <Breeds
                  onChange={handleOptionDataChange('breed')}
                  isADog={dogPet}
                  value={optionData.breed}
                  />
                  )}
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomForm
                onChange={handleOptionDataChange('sex')}
                options={sexOptions}
                label='Sex'
                value={optionData.sex}
                />
            </Grid>
            {dogPet && (
              <Grid item xs={12} sm={6}>
                <CustomForm
                  onChange={handleOptionDataChange('size')}
                  options={sizeOptions}
                  label='Size'
                  value={optionData.size}
                />
              </Grid>
            )}
            <Grid item xs={12} sm={6}>
              {dogPet && (
                <CustomForm
                  onChange={handleOptionDataChange('age')}
                  options={ageDogOptions}
                  label='Age'
                  value={optionData.age}
                  />
                  )}
              {!dogPet && (
                <CustomForm
                onChange={handleOptionDataChange('age')}
                options={ageCatOptions}
                label='Age'
                value={optionData.age}
                />
                )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomForm
                onChange={handleOptionDataChange('color')}
                options={colorOptions}
                label='Color'
                value={optionData.color}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomForm
                onChange={handleOptionDataChange('fur')}
                options={furOptions}
                label='Fur'
                value={optionData.fur}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControlLabel
                control={
                  <Checkbox
                  checked={boolData.vaccinated}
                  onChange={handleBoolDataChange('vaccinated')}
                  value={boolData.vaccinated}
                  />
                }
                label='Vaccinated'
                />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControlLabel
                control={
                  <Checkbox
                  checked={boolData.sterilized}
                  onChange={handleBoolDataChange('sterilized')}
                  value={boolData.sterilized}
                  />
                }
                label='Sterilized'
                />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControlLabel
                control={
                  <Checkbox
                  checked={boolData.dewormed}
                  onChange={handleBoolDataChange('dewormed')}
                  value={boolData.dewormed}
                  />
                }
                label='Dewormed'
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={styles.box_formRight}>
            <Box sx={styles.box_image}>
              <TextField
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
              Modify
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ModifyAdoptionPet;
