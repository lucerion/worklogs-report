import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const Select = ({ label, name, value, onChange, items }) => {
  const renderItems = (selectItems) => (
    Object.keys(selectItems).map((key) => <MenuItem value={key} key={key}>{items[key]}</MenuItem>)
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
  items: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Select;
