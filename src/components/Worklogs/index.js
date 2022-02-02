import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Worklog from './Worklog';
import { Consumer } from '../../store';

const Worklogs = () => {
  const renderEntries = (worklogs, changeWorklog, deleteWorklog) => (
    Object.values(worklogs).map((props) => (
      <Worklog key={props.id} onChange={changeWorklog} onRemove={deleteWorklog} {...props} />
    ))
  );

  return (
    <Consumer>
      {({ worklogs, addWorklog, changeWorklog, deleteWorklog }) => (
        <Grid container spacing={4}>
          {renderEntries(worklogs, changeWorklog, deleteWorklog)}
          <Grid item xs={2}>
            <Button fullWidth variant="outlined" color="primary" size="large" onClick={addWorklog}>Add worklog</Button>
          </Grid>
        </Grid>
      )}
    </Consumer>
  );
};

export default Worklogs;
