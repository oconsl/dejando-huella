import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const CustomForm = ({saveValue, options, label}) => {
  const handleValueChange = (event,newValue) => {
    saveValue(newValue);
  };

  return (
      <Autocomplete
        id="tags-standard"
        options={options}
        onChange={handleValueChange}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            required
            label={label}
            placeholder={`Select pet ${label}`}
          />
        )}
      />
  );
};

export default CustomForm;