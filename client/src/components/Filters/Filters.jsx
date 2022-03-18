import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import {
  specieOption,
  sizeOptions,
  sexOptions,
  colorOptions,
  ageDogOptions,
  ageCatOptions,
  furOptions,
} from '../Utils/petOptions';
import { catBreeds, dogBreeds } from '../Utils/petBreeds';
import { Button, Container } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

// import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Filter = (props) => {
  const [specie, setSpecie] = React.useState('');
  const [color, setColor] = React.useState('');
  const [breed, setBreed] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [size, setSize] = React.useState('');
  const [age, setAge] = React.useState('');
  const [fur, setFur] = React.useState('');

  const handleOnClickFilter = () => {
    let petFilters = {
      specie,
      color,
      breed,
      sex,
      size: size ? size.slice(0, size.indexOf('(') - 1) : '',
      age,
      fur,
    };

    for (const [key, value] of Object.entries(petFilters)) {
      if (!value) {
        delete petFilters[key];
      }
    }
    console.log(petFilters);

    return petFilters

//Esto es para realizar una query

    /*const reg = /:/g;
    const reg2 = /,/g;
    const reg3 = /("|\{|\})/g;
    const reg4 = /\s/g;
    const stringFilters =
      '?' +
      JSON.stringify(petFilters)
        .replace(reg, '=')
        .replace(reg2, '&')
        .replace(reg3, '')
        .replace(reg4, '%20');*/
  };

  return (
    <Container maxWidth="lg" sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      <Autocomplete
        disablePortal
        id="specie"
        options={specieOption}
        onChange={(event, value) => {
          setSpecie(value)
          if (!value){
            props.filterLess()
          }
        }}
        sx={{ m: 1, width: '100px' }}
        renderInput={(params) => <TextField {...params} label="Specie" />}
      />

      {specie === 'Cat' && (
        <>
          <Autocomplete
            disablePortal
            id="cat-breed"
            options={catBreeds}
            onChange={(event, value) => setBreed(value)}
            sx={{ m: 1, width: '150px' }}
            renderInput={(params) => <TextField {...params} label="Breed" />}
          />
          <Autocomplete
            disablePortal
            id="color"
            options={colorOptions}
            onChange={(event, value) => setColor(value)}
            sx={{ m: 1, width: '110px' }}
            renderInput={(params) => <TextField {...params} label="Color" />}
          />
          <Autocomplete
            disablePortal
            id="sex"
            options={sexOptions}
            onChange={(event, value) => setSex(value)}
            sx={{ m: 1, width: '100px'}}
            renderInput={(params) => <TextField {...params} label="Sex" />}
          />
          <Autocomplete
            disablePortal
            id="Size"
            options={sizeOptions}
            onChange={(event, value) => setSize(value)}
            sx={{ m: 1, width: '150px' }}
            renderInput={(params) => <TextField {...params} label="Size" />}
          />
          <Autocomplete
            disablePortal
            id="age"
            options={ageCatOptions}
            onChange={(event, value) => setAge(value)}
            sx={{ m: 1, width: '110px' }}
            renderInput={(params) => <TextField {...params} label="Age" />}
          />
          <Autocomplete
            disablePortal
            id="fur"
            options={furOptions}
            onChange={(event, value) => setFur(value)}
            sx={{ m: 1, width: '100px' }}
            renderInput={(params) => <TextField {...params} label="Fur" />}
          />
          <Button
            variant="contained"
            endIcon={<FilterAltIcon />}
            sx={{ m: 1 }}
            onClick={() => {
              const petFilter = handleOnClickFilter()
              props.buttonFilter(petFilter)
            }}
          >
            Filter
          </Button>
        </>
      )}

      {specie === 'Dog' && (
        <>
          <Autocomplete
            disablePortal
            id="dog-breed"
            options={dogBreeds}
            onChange={(event, value) => setBreed(value)}
            sx={{ m: 1, width: '150px' }}
            renderInput={(params) => <TextField {...params} label="Breed" />}
          />
          <Autocomplete
            disablePortal
            id="color"
            options={colorOptions}
            onChange={(event, value) => setColor(value)}
            sx={{ m: 1, width: '110px' }}
            renderInput={(params) => <TextField {...params} label="Color" />}
          />
          <Autocomplete
            disablePortal
            id="sex"
            options={sexOptions}
            onChange={(event, value) => setSex(value)}
            sx={{ m: 1, width: '100px' }}
            renderInput={(params) => <TextField {...params} label="Sex" />}
          />
          <Autocomplete
            disablePortal
            id="Size"
            options={sizeOptions}
            onChange={(event, value) => setSize(value)}
            sx={{ m: 1, width: '150px' }}
            renderInput={(params) => <TextField {...params} label="Size" />}
          />
          <Autocomplete
            disablePortal
            id="age"
            options={ageDogOptions}
            onChange={(event, value) => setAge(value)}
            sx={{ m: 1, width: '110px' }}
            renderInput={(params) => <TextField {...params} label="Age" />}
          />
          <Autocomplete
            disablePortal
            id="fur"
            options={furOptions}
            onChange={(event, value) => setFur(value)}
            sx={{ m: 1, width: '100px' }}
            renderInput={(params) => <TextField {...params} label="Fur" />}
          />
          <Button
            variant="contained"
            endIcon={<FilterAltIcon />}
            sx={{ m: 1 }}
            onClick={() => {
              const petFilter = handleOnClickFilter()
              props.buttonFilter(petFilter)
            }}
          >
            Filter
          </Button>
        </>
      )}
    </Container>
  );
};

export default Filter;
