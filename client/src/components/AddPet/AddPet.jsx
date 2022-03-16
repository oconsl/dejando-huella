import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import PetsIcon from '@mui/icons-material/Pets';
import LocationIcon from '@mui/icons-material/AddLocationAlt';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { CardActionArea, Card, CardMedia } from '@mui/material';
import CropEasy from '../Crop/CropEasy';
import MapView from '../MapView/MapView';
import Dialog from '@mui/material/Dialog';
import default_dog from './assets/default_dog.svg';
import Tags from '../Tags/Tags';

const AddPet = () => {
  //CROP
  const [openCrop, setOpenCrop] = useState(false);
  const [photoURL, setPhotoURL] = useState(default_dog);
  //MAP
  const [openMap, setOpenMap] = useState(false);
  //FORM
  const [petName, setPetName] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState({});
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [tags, setTags] = useState([]);
  const [file, setFile] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      petName: petName,
      description: description,
      location: location,
      address: address,
      number: number,
      phone: phone,
      image: file,
      tags: tags,
    });
  };

  const handleOpenCrop = () => setOpenCrop(true);
  const handleCloseCrop = () => setOpenCrop(false);
  const handleOpenMap = () => setOpenMap(true);
  const handleCloseMap = () => setOpenMap(false);

  const handleChangePetName = (event) => {
    setPetName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  const handlePhotoClick = () => {
    handleOpenCrop();
  };

  const handleChangeFile = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setFile(url);
    setPhotoURL(url);
    handleOpenCrop();
  };

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
            Add New Pet
          </Typography>
        </div>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }} required>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='petName'
                id='petName'
                label='Pet Name'
                onChange={handleChangePetName}
              />
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
                onChange={handleChangeDescription}
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
                onChange={handleChangePhone}
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
              <TextField
                required
                fullWidth
                id='addressNumber'
                label='Address Number'
                name='addressNumber'
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                }}
                onChange={handleChangeNumber}
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
                    saveLocation={setLocation}
                    closeMap={handleCloseMap}
                    saveAddress={setAddress}
                  />
                </Dialog>
              )}
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                required
                fullWidth
                name='filters'
                label='Filters'
                id='filters'
              /> */}
              <Tags setTags={setTags}/>
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
          onChange={handleChangeFile}
          sx={{ mb: 3, mt: 2 }}
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
        <Card sx={{ mb: 3, width: '90%' }}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='New Pet Image'
              image={photoURL}
              title='New Pet Image'
              onClick={handlePhotoClick}
              sx={{ bgcolor: 'grey' }}
            />
          </CardActionArea>
        </Card>
      </Box>
    </Container>
  );
};

export default AddPet;
