import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Entry from '../Entry';
import Context from '../../contexts';

const EntryList = () => {
  return (
    <Context.Consumer>
      {({ worklogs, addWorklog, changeWorklog, deleteWorklog }) => (
        <Grid container item spacing={4}>
          {Object.values(worklogs).map((props) => {
            return <Entry key={props.id} onChange={changeWorklog} onRemove={deleteWorklog} {...props} />;
          })}
          <Grid item xs={2}>
            <Button fullWidth variant="outlined" color="primary" size="large" onClick={addWorklog}>Add worklogs</Button>
          </Grid>
        </Grid>
      )}
    </Context.Consumer>
  );
};

export default EntryList;
