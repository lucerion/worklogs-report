import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const CATEGORY_MENU = {
  feature: 'New Feature/CR implementation',
  bug: 'Defect fixing',
  review: 'Code Review',
  investigations: 'Investigations',
  environment: 'Environment setup',
};

const Entry = ({ id, timeSpent, category, dateStarted, description, onChange, onRemove }) => {
  const [state, setState] = React.useState({ id, timeSpent, category, dateStarted, description });

  const onInputChange = (event) => {
    const newState = {...state, [event.target.name]: event.target.value };

    setState(newState);
    onChange(newState);
  };

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
      <Grid item xs={1}>
        <TextField
          label="Date Started"
          variant="outlined"
          fullWidth
          name="dateStarted"
          value={state.dateStarted}
          onChange={onInputChange}
        />
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
