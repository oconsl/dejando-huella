import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
// UTIL
import stringToDate from '../../utils/stringToDate';

const DatePick = ({saveDate, fetchedDate, setNewDate }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if(fetchedDate) setValue(stringToDate(fetchedDate))
  }, [fetchedDate])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          saveDate(newValue);
          if(setNewDate) setNewDate(true);
        }}
        renderInput={(params) => <TextField {...params} required />}
      />
    </LocalizationProvider>
  );
};

export default DatePick;