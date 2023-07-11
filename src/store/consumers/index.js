import React from 'react';
import PropTypes from 'prop-types';
import Context from '../contexts';

const Consumer = ({ children }) => (
  <Context.Consumer>
    {children}
  </Context.Consumer>
);

Consumer.propTypes = {
  children: PropTypes.node,
};

export default Consumer;
