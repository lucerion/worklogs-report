import { addWorklog, changeWorklog, deleteWorklog } from '../actions';
import Context from '../contexts';
import PropTypes from 'prop-types';
import reducers from '../reducers';
import { useReducer } from 'react';

const INITIAL_STATE = {
  worklogs: {},
};

const Provider = ({ children }) => {
  const [{ worklogs }, dispatch] = useReducer(reducers, INITIAL_STATE);

  const value = {
    addWorklog: () => dispatch(addWorklog()),
    changeWorklog: (worklog) => dispatch(changeWorklog(worklog)),
    deleteWorklog: (worklog) => dispatch(deleteWorklog(worklog)),
    worklogs,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
};

export default Provider;
