// MATERIAL UI
import { Autocomplete, TextField } from '@mui/material';

const CustomForm = ({ onChange, options, label, value}) => {
  return (
      <Autocomplete
        id="tags-standard"
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
            label={label}
            placeholder={`Select pet ${label}`}
          />
        )}
      />
  );
};

export default CustomForm;