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

const AddPet = () => {
  const [petName, setPetName] = useState('');
  const [map, setMap] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState('');
  const [filters, setFilters] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      petName: petName,
      description: description,
      phone: phone,
      image: file,
    });
  };

  const handleChangePetName = (event) => {
    setPetName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  }

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  }

  const handleChangeFile = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setFile(url);
    console.log(url);
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
                  pattern: '[0-9]*' 
                }}
                onChange={handleChangePhone}
              />
            </Grid>
            <Grid item xs={12} sm={11} sx={{display: 'flex', alignItems: 'center'}}>
              <TextField
                required
                fullWidth
                id='map'
                label='Map'
                name='map'
              />
              <LocationIcon sx={{color: 'red'}}/>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='filters'
                label='Filters'
                id='filters'
              />
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
          sx={{mb: 3, mt: 2}}
        />
        {file.length > 0 && (
          <Card sx={{mb: 3}}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='New Pet Image'
                image={file}
                title='New Pet Image'
              />
            </CardActionArea>
          </Card>
        )}
      </Box>
    </Container>
  );
};

export default AddPet;
