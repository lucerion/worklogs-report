import CATEGORIES from '../categories.json';

const WORKLOG_DEFAULTS = {
  timeSpent: '8h',
  category: Object.keys(CATEGORIES)[0],
};

const DATE_FORMAT = 'DD/MMM/YYYY';

export { WORKLOG_DEFAULTS, CATEGORIES, DATE_FORMAT };
