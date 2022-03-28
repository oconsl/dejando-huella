import { useEffect, useState } from 'react';
// MATERIAL UI
import { Autocomplete, TextField } from '@mui/material';
// INPUT DATA
import { catBreeds } from '../../../utils/petBreeds';
import { dogBreeds } from '../../../utils/petBreeds';

const Breeds = ({ onChange, isADog, value }) => {
  const [options, setOptions] = useState(isADog ? dogBreeds : catBreeds);

  useEffect(() => {    
    isADog ? setOptions(dogBreeds) : setOptions(catBreeds);
  }, [isADog]); 

  return (
      <Autocomplete
        id="breeds-standard"
        options={options}
        onChange={onChange}
        disableClearable
        isOptionEqualToValue={(option, value) => option.id === value?.id}
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