import { useEffect, useState } from 'react';
// MATERIAL UI
import { TextField } from '@mui/material';
// MATERIAL LAB
import { AdapterDateFns, LocalizationProvider, DatePicker } from '@mui/lab';
// UTIL
import stringToDate from '../../utils/stringToDate';

const DatePick = ({ saveDate, fetchedDate, setNewDate }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (fetchedDate) setValue(stringToDate(fetchedDate));
  }, [fetchedDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label='Date'
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          saveDate(newValue);
          if (setNewDate) setNewDate(true);
        }}
        renderInput={(params) => <TextField {...params} required />}
      />
    </LocalizationProvider>
  );
};

export default DatePick;
