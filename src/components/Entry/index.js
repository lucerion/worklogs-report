import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const CATEGORY_MENU = {
  feature: 'New Feature/CR implementation',
  bug: 'Defect fixing',
  review: 'Code Review',
  investigations: 'Investigations',
  environment: 'Environment setup',
};

const Entry = ({ id, timeSpent, category, dateStarted, description, onChange, onRemove }) => {
  const [state, setState] = React.useState({ id, timeSpent, category, dateStarted, description });

  const change = (newState) => {
    setState(newState);
    onChange(newState);
  };
  const onInputChange = (event) => change({...state, [event.target.name]: event.target.value });
  const onDatePickerChange = (date) => change({...state, dateStarted: date.toISOString()});

  return (
    <Grid container item alignItems="center" spacing={2}>
      <Grid item xs={1}>
        <TextField
          label="Time spent"
          variant="outlined"
          fullWidth
          name="timeSpent"
          value={state.timeSpent}
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
            value={state.dateStarted}
            onChange={onDatePickerChange}
            inputFormat="DD/MMM/YYYY"
            mask="__/___/____"
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
          value={state.category}
          onChange={onInputChange}
        >
          {Object.keys(CATEGORY_MENU).map((value) => (
            <MenuItem value={value} key={value}>{CATEGORY_MENU[value]}</MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={4}>
        <TextField
          multiline
          label="Description"
          variant="outlined"
          fullWidth
          name="description"
          value={state.description}
          onChange={onInputChange}
        />
      </Grid>
      <Grid item xs={1}>
        <Button variant="outlined" color="secondary" size="large" onClick={() => onRemove(state)}>x</Button>
      </Grid>
    </Grid>
  );
};

export { CATEGORY_MENU };
export default Entry;
