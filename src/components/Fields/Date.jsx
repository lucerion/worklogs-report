import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Date = ({ label, name, value, format, onChange }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      label={label}
      variant="outlined"
      name={name}
      value={value}
      onChange={onChange}
      inputFormat={format}
      renderInput={(params) => <TextField fullWidth {...params} />}
    />
  </LocalizationProvider>
);

Date.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  format: PropTypes.string,
  onChange: PropTypes.func,
};

export default Date;
