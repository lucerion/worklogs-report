const ACTION_TYPES = {
  addWorklog: 'ADD_WORKLOG',
  changeWorklog: 'CHANGE_WORKLOG',
  deleteWorklog: 'DELETE_WORKLOG',
};

const addWorklog = () => ({ type: ACTION_TYPES.addWorklog });
const changeWorklog = (worklog) => ({ type: ACTION_TYPES.changeWorklog, worklog });
const deleteWorklog = (worklog) => ({ type: ACTION_TYPES.deleteWorklog, worklog });

export {
  ACTION_TYPES,
  addWorklog,
  changeWorklog,
  deleteWorklog,
};
