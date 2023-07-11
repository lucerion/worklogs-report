import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const Textarea = ({ label, name, value, onChange }) => (
  <TextField
    multiline
    label={label}
    variant="outlined"
    fullWidth
    name={name}
    value={value}
    onChange={onChange}
  />
);

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Textarea;
