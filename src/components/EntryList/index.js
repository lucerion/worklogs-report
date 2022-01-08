import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Entry from '../Entry';

const EntryList = ({ worklogs, addWorklog, changeWorklog, deleteWorklog }) => {
  const renderEntries = () => (
    Object.values(worklogs).map((props) => {
      return <Entry key={props.id} onChange={changeWorklog} onRemove={deleteWorklog} {...props} />;
    })
  );

  return (
    <Grid container item spacing={4}>
      {renderEntries()}
      <Grid item xs={2}>
        <Button fullWidth variant="outlined" color="primary" size="large" onClick={addWorklog}>Add worklog</Button>
      </Grid>
    </Grid>
  );
};

export default EntryList;
