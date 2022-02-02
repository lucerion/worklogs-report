import React from 'react';
import Grid from '@mui/material/Grid';

const Tab = ({ xs, value, index, children }) => {
  if (value === index) {
    return (
      <Grid
        item
        xs={xs}
        role="tabpanel"
        hidden={value !== index}
        id={index}
        aria-labelledby={index}
      >
        {children}
      </Grid>
    );
  }

  return null;
};

export default Tab;
