import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

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
  children: PropTypes.node,
  index: PropTypes.number,
  value: PropTypes.number,
  xs: PropTypes.number,
};

export default Tab;
