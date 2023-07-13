import FIELDS from '../fields.json';
import { Input, Select, Date, Textarea } from './components/Fields';
import { DATE_FORMAT } from './const';

const FIELD_TYPES = {
  string: 'string',
  select: 'select',
  date: 'date',
  text: 'text',
};

const COMPONENT_TYPES = {
  [FIELD_TYPES.string]: Input,
  [FIELD_TYPES.select]: Select,
  [FIELD_TYPES.date]: Date,
  [FIELD_TYPES.text]: Textarea,
};

const camelize = (str) => str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

const validateRequired = (value, errorMessage) => {
  if (value) {
    return;
  }

  throw new Error(errorMessage);
};

const setNameAndLabel = (name, props) => ({ ...props, name: camelize(name), label: name });
const setDefaultValue = (defaultValue, props) => ({ ...props, value: defaultValue || '' });
const setSelectValues = (values, props) => {
  const items = values.reduce((acc, value) => ({ ...acc, [camelize(value)]: value }), {});
  return { ...props, items };
};
const setDateFormat = (props) => ({ ...props, format: DATE_FORMAT });

const mapProps = ({ type, name, defaultValue, values }) => {
  let props = {};

  validateRequired(name, '"name" attribute is required.');
  props = setNameAndLabel(name, props);

  if (type !== FIELD_TYPES.date) {
    props = setDefaultValue(defaultValue, props);
  }

  if (type === FIELD_TYPES.select) {
    validateRequired(values, '"values" attribute is required for select type.');
    props = setSelectValues(values, props);
    props = setDefaultValue(camelize(defaultValue), props);
  }

  if (type === FIELD_TYPES.date) {
    props = setDateFormat(props);
  }

  return props;
};

const WORKLOG_FIELDS = FIELDS.map((field) => {
  const { type, size } = field;
  const component = COMPONENT_TYPES[type];

  if (!component) {
    throw new Error(`Component with type '${type}' doesn't exist.`);
  }

  return { type, component, componentProps: mapProps(field), size: size || 1 };
});

export { FIELD_TYPES };
export default WORKLOG_FIELDS;
