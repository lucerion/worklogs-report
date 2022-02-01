import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CATEGORY_MENU } from '../Entry';

const Report = ({ worklogs }) => (
  Object.values(worklogs).map(({ id, timeSpent, dateStarted, category, description }) => (
    <Grid container key={id}>
      <Grid container>
        <Grid item xs={1}><b>Time spent:</b></Grid>
        <Grid item xs={1}>{timeSpent}</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1}><b>Date Started:</b></Grid>
        <Grid item xs={1}>{dateStarted}</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1}><b>Category:</b></Grid>
        <Grid item xs={1}>{CATEGORY_MENU[category]}</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1}><b>Description:</b></Grid>
        <Grid item xs={10}>{description}</Grid>
      </Grid>
    </Grid>
  ))
);

export default Report;
