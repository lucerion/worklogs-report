import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { CATEGORIES, DATE_FORMAT } from '../../const';

const Worklog = ({ id, timeSpent, category, dateStarted, description, onChange, onRemove }) => {
  const worklog = {id, timeSpent, category, dateStarted, description};

  const onInputChange = (event) => {
    const data = event.target;
    const newState = data ? {...worklog, [data.name]: data.value } : {...worklog, dateStarted: event.toISOString()};

    onChange(newState);
  };

  const renderCategoriesDropdown = () => (
    Object.keys(CATEGORIES).map((value) => <MenuItem value={value} key={value}>{CATEGORIES[value]}</MenuItem>)
  );

  return (
    <Grid container item alignItems="center" spacing={2}>
      <Grid item xs={1}>
        <TextField
          label="Time spent"
          variant="outlined"
          fullWidth
          name="timeSpent"
          value={timeSpent}
          onChange={onInputChange}
        />
      </Grid>
      <Grid item xs={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date Started"
            variant="outlined"
            fullWidth
            name="dateStarted"
            value={dateStarted}
            onChange={onInputChange}
            inputFormat={DATE_FORMAT}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={3}>
        <TextField
          select
          label="Category"
          variant="outlined"
          fullWidth
          name="category"
          value={category}
          onChange={onInputChange}
        >
          {renderCategoriesDropdown()}
        </TextField>
      </Grid>
      <Grid item xs={4}>
        <TextField
          multiline
          label="Description"
          variant="outlined"
          fullWidth
          name="description"
          value={description}
          onChange={onInputChange}
        />
      </Grid>
      <Grid item xs={1}>
        <Button variant="outlined" color="secondary" size="large" onClick={() => onRemove(worklog)}>x</Button>
      </Grid>
    </Grid>
  );
};

Worklog.propTypes = {
  id: PropTypes.number,
  timeSpent: PropTypes.string,
  category: PropTypes.string,
  dateStarted: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Worklog;
