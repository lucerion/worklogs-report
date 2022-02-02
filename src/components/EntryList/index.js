import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Entry from '../Entry';

const EntryList = ({ worklogs, addWorklog, changeWorklog, deleteWorklog }) => {
  const renderEntries = () => (
    Object.values(worklogs).map((props) => (
      <Entry key={props.id} onChange={changeWorklog} onRemove={deleteWorklog} {...props} />
    ))
  );

  return (
    <Grid container spacing={4}>
      {renderEntries()}
      <Grid item xs={2}>
        <Button fullWidth variant="outlined" color="primary" size="large" onClick={addWorklog}>Add worklog</Button>
      </Grid>
    </Grid>
  );
};

export default EntryList;
