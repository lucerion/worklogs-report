import { ACTION_TYPES } from '../actions';
import WORKLOG_FIELDS from '../../worklogFields';

const reducers = (state, action) => {
  const { worklog, type } = action;
  const { worklogs } = state;
  const { addWorklog, changeWorklog, deleteWorklog } = ACTION_TYPES;

  switch (type) {
  case addWorklog: {
    const ids = Object.keys(worklogs);
    const lastID = ids[ids.length - 1];
    const id = lastID ? parseInt(lastID) + 1 : 0;

    const newWorklog = WORKLOG_FIELDS.reduce(
      (acc, { componentProps: { name, value }}) => ({ ...acc, [name]: value }),
      { id },
    );

    return { ...state, worklogs: { ...worklogs, [id]: newWorklog }};
  }
  case changeWorklog:
    return { ...state, worklogs: { ...worklogs, [worklog.id]: worklog }};
  case deleteWorklog: {
    const newWorklogs = {...worklogs};
    delete newWorklogs[worklog.id];

    return { ...state, worklogs: newWorklogs };
  }
  default:
    throw new Error(`'${type}' not found!`);
  }
};

export default reducers;
