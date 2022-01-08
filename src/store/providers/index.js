import React, { useReducer } from 'react';
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

export default Provider;
