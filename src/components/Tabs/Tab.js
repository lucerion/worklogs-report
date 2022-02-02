import React from 'react';
import Grid from '@mui/material/Grid';

const Tab = ({ xs, value, index, children }) => {
  return (
    <Grid
      item
      xs={xs}
      role="tabpanel"
      hidden={value !== index}
      id={index}
    >
      {children}
    </Grid>
  );
};

export default Tab;
