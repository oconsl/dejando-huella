import { useEffect, useState } from 'react';
//MATERIAL UI
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
//MATERIAL ICONS
import PetsIcon from '@mui/icons-material/Pets';
import LocationIcon from '@mui/icons-material/AddLocationAlt';
//COMPONENTS
import MapStatic from '../MapView/MapStatic';
import CropEasy from '../Crop/CropEasy';
import DatePick from '../DatePick/DatePick';
import Breeds from '../FormComponents/Breeds/Breeds';
import CustomForm from '../FormComponents/CustomForm/CustomForm';
//INPUT DATA
import {
  sizeOptions,
  sexOptions,
  colorOptions,
  ageCatOptions,
  ageDogOptions,
  furOptions,
} from '../../utils/petOptions';
//UTIL FUNCTION
import formatDate from '../../utils/formatDate';
import { fetchLostPetData, updateLostPetData } from '../../services';
import jsonToFormData from '../../utils/jsonToFormData';

const ModifyLostPet = ({ id, setOpen }) => {
  const [newDate, setNewDate] = useState(false);
  const [newPhoto, setNewPhoto] = useState(false);
  //PET
  const [dogPet, setDogPet] = useState(false);
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
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [latLng, setLatLng] = useState({});
  const [file, setFile] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const lostPetDataBody = new FormData();

    const dataBody = {
      username: JSON.parse(localStorage.getItem('username')),
      ...textData,
      filter: {
        ...optionData,
        specie: dogPet ? 'Dog' : 'Cat',
      },
      latLng: latLng,
      addressRoad: address,
      date: date,
    };    
    if (newPhoto) dataBody.image = file;
    if (newDate) dataBody.date = formatDate(date);

    const lostPetData = jsonToFormData(dataBody,lostPetDataBody);
    
    updateLostPetData({ lostPetData, id });    
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
    setFile(event.target.files[0]);
    setPhotoURL(url);
    handleOpenCrop();
    setNewPhoto(true);
  };

  const handlePhotoClick = () => {
    handleOpenCrop();
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
      setAddress(fetchedData.addressRoad);
      setDate(fetchedData.date);
      setLatLng(fetchedData.latLng);
      setDogPet(fetchedData.filter.specie === 'Dog');
      setPhotoURL(fetchedData.imageURL);
    };

    fetchLostPetData({ savedData, id });
  }, [id]);

  return (
    <Container component='main' sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          marginRight: 8,
          flex: 2,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, backgroundColor: 'blue' }}>
            <PetsIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Modify Lost Pet
          </Typography>
        </div>
        <Box
          component='form'
          onSubmit={handleSubmit}
          encType='multipart/form-data'
          sx={{ mt: 3 }}
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
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='phone'
                id='phone'
                label='Phone'
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                }}
                value={textData.phone}
                onChange={handleTextDataChange('phone')}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <DatePick saveDate={setDate} fetchedDate={date} setNewDate={setNewDate}/>
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
                sx={{ width: '50%', ml: 3 }}
              />
              <TextField
                required
                disabled
                fullWidth
                id='addressNum'
                label='Address Num'
                name='addressNum'
                inputProps={{
                  readOnly: true,
                }}
                value={textData.addressNumber}
                onChange={handleTextDataChange('addressNumber')}
                sx={{ width: '50%', ml: 3 }}
              />
              <LocationIcon
                sx={{
                  color: 'green',
                  margin: '0 1em',
                  cursor: 'pointer',
                  transform: 'scale(2)',
                }}
                onClick={handleOpenMap}
              />
              {openMap && (
                <Dialog
                  open={true}
                  onClose={handleCloseMap}
                  fullWidth={true}
                  maxWidth={'md'}
                >
                  <MapStatic
                    position={latLng}
                    closeMap={handleCloseMap}
                  />
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
          </Grid>

          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flex: 3,
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div>Image to upload</div>
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
              sx={{ mt: 2 }}
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
            <Card sx={{ maxHeight: 450, margin: 'auto' }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='New Pet Image'
                  image={photoURL}
                  title='New Pet Image'
                  height='450'
                  onClick={handlePhotoClick}
                  sx={{ backgroundColor: 'grey', objectFit: 'contain' }}
                />
              </CardActionArea>
            </Card>
          </Box>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Modify
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ModifyLostPet;