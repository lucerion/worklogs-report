const WORKLOG_DEFAULTS = {
  timeSpent: '8h',
  category: 'feature',
};

const CATEGORIES = {
  feature: 'New Feature/CR implementation',
  bug: 'Defect fixing',
  review: 'Code Review',
  investigations: 'Investigations',
  environment: 'Environment setup',
};

const DATE_FORMAT = 'DD/MMM/YYYY';

export { WORKLOG_DEFAULTS, CATEGORIES, DATE_FORMAT };
