import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

// HARDCODED TAGS
const tags = [ 
  'Cocker', 
  'Dogo', 
  'Doberman', 
  'Chihuahua', 
  'Caniche',
  'Pequinés',
  'Mastín'
];

const Tags = ({setTags}) => {
  const [values, setValues] = useState([]);

  const handleTagsChange = (event,newValues) => {
    setValues(newValues);
    setTags(newValues);
  }
  return (
    <Stack spacing={3} sx={{ width: 350 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={tags}
        value={values}
        onChange={handleTagsChange}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Tags"
            placeholder="Add"
          />
        )}
      />
    </Stack>
  );
};

export default Tags;