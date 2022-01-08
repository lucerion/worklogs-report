import React from 'react';
import Context from '../contexts';

const Consumer = ({ children }) => (
  <Context.Consumer>
    {children}
  </Context.Consumer>
);

export default Consumer;
