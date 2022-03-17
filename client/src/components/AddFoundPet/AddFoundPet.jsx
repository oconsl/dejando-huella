import { useEffect, useState } from 'react';
//MATERIAL UI
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import Avatar from '@mui/material/Avatar';
import { CardActionArea, Card, CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import LocationIcon from '@mui/icons-material/AddLocationAlt';
//DEFAULT IMAGE
import default_dog from '../../assets/default_dog.svg';
import default_cat from '../../assets/default_cat.svg';
//COMPONENTS
import MapView from '../MapView/MapView';
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

const AddLostPet = () => {
  //PET
  const [dogPet, setDogPet] = useState(true);
  //CROP
  const [openCrop, setOpenCrop] = useState(false);
  const [photoURL, setPhotoURL] = useState(default_dog);
  //MAP
  const [openMap, setOpenMap] = useState(false);
  //FORM
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [latLng, setLatLng] = useState({});
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [file, setFile] = useState('');
  //FORM-FILTERS
  const [breed, setBreed] = useState('');
  const [size, setSize] = useState('');
  const [sex, setSex] = useState('');
  const [color, setColor] = useState('');
  const [age, setAge] = useState('');
  const [fur, setFur] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      description: description,
      phone: phone,
      image: file,
      date: date,
      latLng: latLng,
      address: `${address} ${number}`,
      filters: {
        breed: breed,
        size: size,
        sex: sex,
        color: color,
        age: age,
        fur: fur,
      },
    });
  };

  const handleOpenCrop = () => setOpenCrop(true);
  const handleCloseCrop = () => setOpenCrop(false);
  const handleOpenMap = () => setOpenMap(true);
  const handleCloseMap = () => setOpenMap(false);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressNumberChange = (event) => {
    setNumber(event.target.value);
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
            Add Found Pet
          </Typography>
        </div>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }} required>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
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
                value={description}
                name='description'
                id='description'
                label='Description'
                onChange={handleDescriptionChange}
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
                onChange={handlePhoneChange}
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
                onChange={handleAddressNumberChange}
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
                  <MapView
                    saveLocation={setLatLng}
                    closeMap={handleCloseMap}
                    saveAddress={setAddress}
                  />
                </Dialog>
              )}
            </Grid>
            <Grid item xs={12} sm={9}>
              {dogPet && <Breeds saveBreed={setBreed} isADog={dogPet} />}
              {!dogPet && <Breeds saveBreed={setBreed} isADog={dogPet} />}
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomForm saveValue={setSex} options={sexOptions} label='sex'/>
            </Grid>  
            {dogPet && <Grid item xs={12} sm={6}>
              <CustomForm saveValue={setSize} options={sizeOptions} label='size'/>
            </Grid>}
            <Grid item xs={12} sm={6}>
              {dogPet && <CustomForm saveValue={setAge} options={ageDogOptions} label='age'/>}
              {!dogPet && <CustomForm saveValue={setAge} options={ageCatOptions} label='age'/>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomForm saveValue={setColor} options={colorOptions} label='color'/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomForm saveValue={setFur} options={furOptions} label='fur'/>
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Add Pet
          </Button>
        </Box>
      </Box>
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
          sx={{ mt: 2 }}
        />
        {openCrop && (
          <Dialog
            open={true}
            onClose={handleCloseCrop}
            fullWidth={true}
            maxWidth={'md'}
          >
            <CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile }} />
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
              sx={{ bgcolor: 'grey', objectFit: 'contain' }}
            />
          </CardActionArea>
        </Card>
      </Box>
    </Container>
  );
};

export default AddLostPet;
