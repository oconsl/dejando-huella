import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
// BREEDS
import { catBreeds } from '../../../utils/petBreeds';
import { dogBreeds } from '../../../utils/petBreeds';

const Breeds = ({ onChange, isADog, value }) => {
  const [options, setOptions] = useState(isADog ? dogBreeds : catBreeds);

  useEffect(() => {    
    isADog ? setOptions(dogBreeds) : setOptions(catBreeds);
  }, [isADog]); 

  return (
      <Autocomplete
        // multiple
        id="breeds-standard"
        options={options}
        // value={value}
        onChange={onChange}
        getOptionLabel={(option) => option}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        value={value}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            required
            label={isADog ? 'Dog Breed' : 'Cat Breed'}
            placeholder="Select pet breed"
          />
        )}
      />
  );
};

export default Breeds;