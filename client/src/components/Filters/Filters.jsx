import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
import { Button } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Filters = (props) => {
  const [specie, setSpecie] = React.useState('');
  const [color, setColor] = React.useState('');
  const [breed, setBreed] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [size, setSize] = React.useState('');
  const [age, setAge] = React.useState('');
  const [fur, setFur] = React.useState('');

  const specieType = () => {
    return specie === 'Dog';
  };

  const handleOnClickFilter = () => {
    let petFilters = new Object({
      specie,
      color,
      breed,
      sex,
      size,
      age,
      fur,
    });

    for (const [key, value] of Object.entries(petFilters)) {
      if (!value) {
        delete petFilters[key];
      }
    }

    const reg = /\:/g;
    const reg2 = /\,/g;
    const reg3 = /(\"|\{|\})/g;
    const reg4 = /\s/g;
    const stringFilters =
      '?' +
      JSON.stringify(petFilters)
        .replace(reg, '=')
        .replace(reg2, '&')
        .replace(reg3, '')
        .replace(reg4, '%20');
    console.log(stringFilters);
  };

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

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Specie</InputLabel>
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
          {specieOption.map((specie) => (
            <MenuItem value={specie}>{specie}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {specie === 'Cat' && (
        <>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Color
            </InputLabel>
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
            <InputLabel id="demo-simple-select-autowidth-label">
              Breed
            </InputLabel>
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
            <InputLabel id="demo-simple-select-autowidth-label">
              Size
            </InputLabel>
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
                <MenuItem value={size.slice(0, size.indexOf('(') - 1)}>
                  {size}
                </MenuItem>
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
          <Button
            variant="contained"
            endIcon={<FilterAltIcon />}
            sx={{ m: 1 }}
            onClick={handleOnClickFilter}
          >
            Filter
          </Button>
        </>
      )}

      {specie === 'Dog' && (
        <>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Color
            </InputLabel>
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
            <InputLabel id="demo-simple-select-autowidth-label">
              Breed
            </InputLabel>
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
            <InputLabel id="demo-simple-select-autowidth-label">
              Size
            </InputLabel>
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
                <MenuItem value={size.slice(0, size.indexOf('(') - 1)}>
                  {size}
                </MenuItem>
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
          <Button
            variant="contained"
            endIcon={<FilterAltIcon />}
            sx={{ m: 1 }}
            onClick={handleOnClickFilter}
          >
            Filter
          </Button>
        </>
      )}
    </Box>
  );
};

export default Filters;
