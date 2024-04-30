import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Worklog from './Worklog';
import { Consumer } from '../../store';

const Worklogs = () => {
  const renderWorklogs = (worklogs) => (
    Object.values(worklogs).map((worklog) => <Worklog key={worklog.id} {...worklog} />)
  );

  return (
    <Consumer>
      {({ worklogs, addWorklog }) => (
        <Grid container spacing={4}>
          {renderWorklogs(worklogs)}
          <Grid item xs={2}>
            <Button fullWidth variant="outlined" color="primary" size="large" onClick={addWorklog}>Add worklog</Button>
          </Grid>
        </Grid>
      )}
    </Consumer>
  );
};

export default Worklogs;
