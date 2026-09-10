import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

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
  format: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Date;
