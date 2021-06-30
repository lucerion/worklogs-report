import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const Entry = ({ id, timeSpent, category, dateStarted, onChange, onRemove }) => {
  const [state, setState] = React.useState({ id, timeSpent, category, dateStarted });

  const onInputChange = (event) => {
    const newState = {...state, [event.target.name]: event.target.value };

    setState(newState);
    onChange(newState);
  };

  return (
    <Grid container alignItems="center" spacing={2}>
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
          <MenuItem value="new-feature">New Feature/CR implementation</MenuItem>
          <MenuItem value="defect-fixing">Defect fixing</MenuItem>
          <MenuItem value="code-review">Code Review</MenuItem>
          <MenuItem value="investigations">Investigations</MenuItem>
          <MenuItem value="environment-setup">Environment setup</MenuItem>
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
        <Button variant="contained" color="secondary" onClick={() => onRemove(state)}>x</Button>
      </Grid>
    </Grid>
  );
};

export default Entry;
