import { ACTION_TYPES } from '../actions';

const WORKLOG_DEFAULTS = {
  timeSpent: '8h',
  category: 'new-feature',
  dateStarted: new Date().toLocaleDateString(),
};

const reducers = (state, action) => {
  const { worklog } = action;
  const { worklogs } = state;

  switch (action.type) {
  case ACTION_TYPES.addWorklog: {
    const ids = Object.keys(worklogs);
    const lastElementID = ids[ids.length - 1];
    const worklog = {
      id: lastElementID ? parseInt(lastElementID) + 1 : 1,
      timeSpent: WORKLOG_DEFAULTS.timeSpent,
      category: WORKLOG_DEFAULTS.category,
      dateStarted: WORKLOG_DEFAULTS.dateStarted,
    };

    return { ...state, worklogs: { ...worklogs, [worklog.id]: worklog }};
  }
  case ACTION_TYPES.changeWorklog:
    return { ...state, worklogs: { ...worklogs, [worklog.id]: worklog }};
  case ACTION_TYPES.deleteWorklog: {
    const newWorklogs = {...worklogs};
    delete newWorklogs[worklog.id];

    return { ...state, worklogs: newWorklogs };
  }
  default:
    throw new Error(`'${action.type}' not found!`);
  }
};

export default reducers;
