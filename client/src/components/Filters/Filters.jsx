import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  sizeOptions,
  sexOptions,
  colorOptions,
  ageDogOptions,
  ageCatOptions,
  furOptions,
} from '../Utils/petOptions';
import { catBreeds, dogBreeds } from '../Utils/petBreeds';
import { Button } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Filters = () => {
  const [specie, setSpecie] = React.useState('');
  const [color, setColor] = React.useState('');
  const [breed, setBreed] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [size, setSize] = React.useState('');
  const [age, setAge] = React.useState('');
  const [fur, setFur] = React.useState('');
  const [petFilters, setPetFilters] = React.useState({})

  const specieList = ['Cat', 'Dog'];
  /* const colorList = ['White', 'Black', 'Gray', 'Dark Brown', 'Light Brown', 'Orange', 'Bicolor', 'Tricolor'];
  const breedList = ['Dogo', 'Caniche', 'Obejero', 'Chow'];
  const sexList = ['Female', 'Male'];
  const sizeList = ['Small (<30)cm', 'Medium (31-42)cm', 'Large (43-60)cm', 'Extra Large (>60)cm'];
  const ageListCat = ['Kitten', 'Adult', 'Senior'];
  const ageListDog = ['Puppy', 'Adult', 'Senior'];
  const furList = ['Hairless', 'Sort', 'Large']; */

  const handleOnClickFilter = () => {
    setPetFilters({
      specie,
      color,
      breed,
      sex,
      size,
      age,
      fur
    })
    console.log(petFilters)
  }

  const handleChangeSpecie = (event) => {
    setSpecie(event.target.value);
  };
  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };
  const handleChangeBreed = (event) => {
    setBreed(event.target.value);
  };
  const handleChangeSex = (event) => {
    setSex(event.target.value);
  };
  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangeFur = (event) => {
    setFur(event.target.value);
  };

  if (specie === '') {
    return (
      <Box>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Specie
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={specie}
            onChange={handleChangeSpecie}
            autoWidth
            label="Specie"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {specieList.map((specie) => (
              <MenuItem value={specie}>{specie}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  } else if (specie === 'Dog') {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Specie
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={specie}
            onChange={handleChangeSpecie}
            autoWidth
            label="Specie"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {specieList.map((specie) => (
              <MenuItem value={specie}>{specie}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Color</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={color}
            onChange={handleChangeColor}
            autoWidth
            label="Color"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {colorOptions.map((color) => (
              <MenuItem value={color}>{color}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Breed</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={breed}
            onChange={handleChangeBreed}
            autoWidth
            label="Breed"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dogBreeds.map((breed) => (
              <MenuItem value={breed}>{breed}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Sex</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={sex}
            onChange={handleChangeSex}
            autoWidth
            label="Sex"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {sexOptions.map((sex) => (
              <MenuItem value={sex}>{sex}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={size}
            onChange={handleChangeSize}
            autoWidth
            label="Size"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {sizeOptions.map((size) => (
              <MenuItem value={size}>{size}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChangeAge}
            autoWidth
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {ageDogOptions.map((age) => (
              <MenuItem value={age}>{age}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Fur</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={fur}
            onChange={handleChangeFur}
            autoWidth
            label="Fur"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {furOptions.map((fur) => (
              <MenuItem value={fur}>{fur}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" endIcon={<FilterAltIcon />} sx={{ m: 1 }} onClick={handleOnClickFilter}>
          Filter
        </Button>
      </Box>
    );
  } else if (specie === 'Cat') {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Specie
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={specie}
            onChange={handleChangeSpecie}
            autoWidth
            label="Specie"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {specieList.map((specie) => (
              <MenuItem value={specie}>{specie}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Color</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={color}
            onChange={handleChangeColor}
            autoWidth
            label="Color"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {colorOptions.map((color) => (
              <MenuItem value={color}>{color}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Breed</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={breed}
            onChange={handleChangeBreed}
            autoWidth
            label="Breed"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {catBreeds.map((breed) => (
              <MenuItem value={breed}>{breed}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Sex</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={sex}
            onChange={handleChangeSex}
            autoWidth
            label="Sex"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {sexOptions.map((sex) => (
              <MenuItem value={sex}>{sex}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={size}
            onChange={handleChangeSize}
            autoWidth
            label="Size"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {sizeOptions.map((size) => (
              <MenuItem value={size}>{size}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChangeAge}
            autoWidth
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {ageCatOptions.map((age) => (
              <MenuItem value={age}>{age}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Fur</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={fur}
            onChange={handleChangeFur}
            autoWidth
            label="Fur"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {furOptions.map((fur) => (
              <MenuItem value={fur}>{fur}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" endIcon={<FilterAltIcon />} sx={{ m: 1 }}>
          Filter
        </Button>
      </Box>
    );
  }
};

export default Filters;
