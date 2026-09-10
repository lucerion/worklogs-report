import { Date, Input, Select, Textarea } from './components/Fields';
import { DATE_FORMAT, FIELD_TYPES, TEXT_SEPARATOR } from './const';
import FIELDS from '../fields.json';

const COMPONENT_TYPES = {
  [FIELD_TYPES.string]: Input,
  [FIELD_TYPES.select]: Select,
  [FIELD_TYPES.date]: Date,
  [FIELD_TYPES.text]: Textarea,
};

// eslint-disable-next-line prefer-named-capture-group
const camelize = (str) => str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/gu, (_match, chr) => chr.toUpperCase());

const throwError = (errorMessage, field) => {
  const stringifiedField = JSON.stringify(field);

  throw new Error(`${errorMessage}\nField: ${stringifiedField}`);
};

const mapProps = ({ type, name, defaultValue, values }) => {
  const props = { label: name, name: camelize(name) };

  switch(type) {
  case FIELD_TYPES.string:
    return { ...props, value: defaultValue || '' };
  case FIELD_TYPES.select:
    return {
      ...props,
      items: values.reduce((acc, value) => ({ ...acc, [camelize(value)]: value }), {}),
      value: camelize(defaultValue) || '',
    };
  case FIELD_TYPES.date:
    return { ...props, format: DATE_FORMAT };
  case FIELD_TYPES.text:
    return { ...props, value: values ? values.join(TEXT_SEPARATOR) : ''};
  default:
    return props;
  }
};

// eslint-disable-next-line max-statements
const WORKLOG_FIELDS = FIELDS.map((field) => {
  const { type, name, values } = field;
  const component = COMPONENT_TYPES[type];
  const DEFAULT_FIELD_SIZE = 1;
  const size = field.size || DEFAULT_FIELD_SIZE;

  if (!type) { throwError('"type" attribute is required.', field); }
  if (!component) { throwError(`component with type '${type}' doesn't exist.`, field); }
  if (!name) { throwError('"name" attribute is required.', field); }
  if (type === FIELD_TYPES.select && !values) { throwError('"values" attribute is required for select.', field); }

  return { component, componentProps: mapProps(field), size, type};
});

export default WORKLOG_FIELDS;
