import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Select = ({ label, name, value, onChange, items }) => {
  const renderItems = (items) => (
    Object.keys(items).map((value) => <MenuItem value={value} key={value}>{items[value]}</MenuItem>)
  );

  return (
    <TextField
      select
      label={label}
      variant="outlined"
      fullWidth
      name={name}
      value={value}
      onChange={onChange}
    >
      {renderItems(items)}
    </TextField>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  items: PropTypes.object,
};

export default Select;
