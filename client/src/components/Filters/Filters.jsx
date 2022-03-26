import React, { useEffect, useState } from 'react';
import {
  specieOption,
  sizeOptions,
  sexOptions,
  colorOptions,
  ageDogOptions,
  ageCatOptions,
  furOptions,
} from '../../utils/petOptions';
import { catBreeds, dogBreeds } from '../../utils/petBreeds';
import { Button, Container, TextField, Autocomplete } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Filter = (props) => {
  const [specie, setSpecie] = useState('');
  const [color, setColor] = useState('');
  const [breed, setBreed] = useState('');
  const [sex, setSex] = useState('');
  const [size, setSize] = useState('');
  const [age, setAge] = useState('');
  const [fur, setFur] = useState('');
  const [sterilized, setSterilized] = useState(null);
  const [dewormed, setDewormed] = useState(null);
  const [vaccinated, setVaccinated] = useState(null);

  useEffect(()=>{
    if (!specie){
      setBreed('');
      setAge('')
    }
  }, [specie])

  const handleOnClickFilter = () => {
    let petFilters = {
      'filter.specie': specie,
      'filter.color': color,
      'filter.breed': breed,
      'filter.sex': sex,
      'filter.size': size ? size.slice(0, size.indexOf('(') - 1) : '',
      'filter.age': age,
      'filter.fur': fur,
      'filter.sterilized': sterilized,
      'filter.dewormed': dewormed,
      'filter.vaccinated': vaccinated,
    };

    for (const [key, value] of Object.entries(petFilters)) {
      if (value === null || value === '') {
        delete petFilters[key];
      }
    }

    //Esto es para realizar una query

    const reg = /:/g;
    const reg2 = /,/g;
    const reg3 = /("|\{|\})/g;
    const reg4 = /\s/g;
    const queryFilter =
      JSON.stringify(petFilters)
        .replace(reg, '=')
        .replace(reg2, '&')
        .replace(reg3, '')
        .replace(reg4, '%20');

    console.log(queryFilter)

    return queryFilter;
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Autocomplete
        disablePortal
        id="specie"
        options={specieOption}
        onChange={(event, value) => setSpecie(value)}
        sx={{ m: 1, width: '100px' }}
        renderInput={(params) => <TextField {...params} label="Specie" />}
      />

      {!specie && (
        <Autocomplete
          disablePortal
          id="breed"
          options={[]}
          onChange={(event, value) => setBreed(value)}
          sx={{ m: 1, width: '150px' }}
          renderInput={(params) => <TextField {...params} label="Breed" />}
        />
      )}

      {specie === 'Cat' && (
        <Autocomplete
          disablePortal
          id="cat-breed"
          options={catBreeds}
          onChange={(event, value) => setBreed(value)}
          sx={{ m: 1, width: '150px' }}
          renderInput={(params) => <TextField {...params} label="Breed" />}
        />
      )}

      {specie === 'Dog' && (
        <Autocomplete
          disablePortal
          id="dog-breed"
          options={dogBreeds}
          onChange={(event, value) => setBreed(value)}
          sx={{ m: 1, width: '150px' }}
          renderInput={(params) => <TextField {...params} label="Breed" />}
        />
      )}

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

      {!specie && (
        <Autocomplete
          disablePortal
          id="age"
          options={[]}
          onChange={(event, value) => setAge(value)}
          sx={{ m: 1, width: '110px' }}
          renderInput={(params) => <TextField {...params} label="Age" />}
        />
      )}

      {specie === 'Cat' && (
        <Autocomplete
          disablePortal
          id="age"
          options={ageCatOptions}
          onChange={(event, value) => setAge(value)}
          sx={{ m: 1, width: '110px' }}
          renderInput={(params) => <TextField {...params} label="Age" />}
        />
      )}

      {specie === 'Dog' && (
        <Autocomplete
          disablePortal
          id="age"
          options={ageDogOptions}
          onChange={(event, value) => setAge(value)}
          sx={{ m: 1, width: '110px' }}
          renderInput={(params) => <TextField {...params} label="Age" />}
        />
      )}

      <Autocomplete
        disablePortal
        id="fur"
        options={furOptions}
        onChange={(event, value) => setFur(value)}
        sx={{ m: 1, width: '100px' }}
        renderInput={(params) => <TextField {...params} label="Fur" />}
      />

      {props.page === 'adoption-pets' && (
        <>
          <Autocomplete
            disablePortal
            id="sterilized"
            options={['Yes', 'No']}
            onChange={(event, value) => {
              if (value === 'Yes'){
                setSterilized(true)
              } else if (value === 'No'){
                setSterilized(false)
              } else {
                setSterilized(null)
              }
              
            }}
            sx={{ m: 1, width: '150px' }}
            renderInput={(params) => <TextField {...params} label="Sterilized" />}
          />
          <Autocomplete
            disablePortal
            id="dewormed"
            options={['Yes', 'No']}
            onChange={(event, value) => {
              if (value === 'Yes'){
                setDewormed(true)
              } else if (value === 'No'){
                setDewormed(false)
              } else {
                setDewormed(null)
              }
              
            }}
            sx={{ m: 1, width: '150px' }}
            renderInput={(params) => <TextField {...params} label="Dewormed" />}
          />
          <Autocomplete
            disablePortal
            id="vaccinated"
            options={['Yes', 'No']}
            onChange={(event, value) => {
              if (value === 'Yes'){
                setVaccinated(true)
              } else if (value === 'No'){
                setVaccinated(false)
              } else {
                setVaccinated(null)
              }
              
            }}
            sx={{ m: 1, width: '150px' }}
            renderInput={(params) => <TextField {...params} label="Vaccinated" />}
          />
        </>
      )}

      <Button
        variant="contained"
        endIcon={<FilterAltIcon />}
        sx={{ m: 1 }}
        onClick={() => {
          const query = handleOnClickFilter();
          props.buttonFilter(query);
        }}
      >
        Filter
      </Button>
    </Container>
  );
};

export default Filter;
