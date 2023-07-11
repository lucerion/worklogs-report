import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDayjs from '@mui/lab/AdapterDayjs';

const Date = ({ label, name, value, format, onChange }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      label={label}
      variant="outlined"
      fullWidth
      name={name}
      value={value}
      onChange={onChange}
      inputFormat={format}
      renderInput={(params) => <TextField {...params} />}
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
