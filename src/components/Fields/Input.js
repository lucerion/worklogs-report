import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const Input = ({ label, name, value, onChange }) => (
  <TextField
    label={label}
    variant="outlined"
    fullWidth
    name={name}
    value={value}
    onChange={onChange}
  />
);

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
