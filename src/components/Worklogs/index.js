import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Worklog from './Worklog';
import { Consumer } from '../../store';

const Worklogs = () => {
  const renderWorklogs = (worklogs, onChange, onRemove) => (
    Object.values(worklogs).map((props) =>
      <Worklog key={props.id} onChange={onChange} onRemove={onRemove} {...props} />)
  );

  return (
    <Consumer>
      {({ worklogs, addWorklog, changeWorklog, deleteWorklog }) => (
        <Grid container spacing={4}>
          {renderWorklogs(worklogs, changeWorklog, deleteWorklog)}
          <Grid item xs={2}>
            <Button fullWidth variant="outlined" color="primary" size="large" onClick={addWorklog}>Add worklog</Button>
          </Grid>
        </Grid>
      )}
    </Consumer>
  );
};

Worklogs.propTypes = {
  id: PropTypes.string,
};

export default Worklogs;
