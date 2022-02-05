import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducers from '../reducers';
import { addWorklog, changeWorklog, deleteWorklog } from '../actions';
import Context from '../contexts';

const INITIAL_STATE = {
  worklogs: {},
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, INITIAL_STATE);

  const { worklogs } = state;

  const value = {
    worklogs: worklogs,
    addWorklog: () => dispatch(addWorklog()),
    changeWorklog: (worklog) => dispatch(changeWorklog(worklog)),
    deleteWorklog: (worklog) => dispatch(deleteWorklog(worklog)),
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.PropTypes.elementType,
};

export default Provider;
