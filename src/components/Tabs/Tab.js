import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

const Tab = ({ xs, value, index, children }) => (
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

Tab.propTypes = {
  xs: PropTypes.number,
  value: PropTypes.number,
  index: PropTypes.number,
  children: PropTypes.node,
};

export default Tab;
