import FIELDS from '../fields.json';
import { Input, Select, Date, Textarea } from './components/Fields';
import { DATE_FORMAT, FIELD_TYPES, TEXT_SEPARATOR } from './const';

const COMPONENT_TYPES = {
  [FIELD_TYPES.string]: Input,
  [FIELD_TYPES.select]: Select,
  [FIELD_TYPES.date]: Date,
  [FIELD_TYPES.text]: Textarea,
};

const camelize = (str) => str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());

const throwError = (errorMessage, field) => {
  const stringifiedField = JSON.stringify(field);

  throw new Error(`${errorMessage}\nField: ${stringifiedField}`);
};

const mapProps = ({ type, name, defaultValue, values }) => {
  let props = { name: camelize(name), label: name };

  switch(type) {
  case FIELD_TYPES.string:
    return { ...props, value: defaultValue || '' };
  case FIELD_TYPES.select:
    return {
      ...props,
      value: camelize(defaultValue) || '',
      items: values.reduce((acc, value) => ({ ...acc, [camelize(value)]: value }), {}),
    };
  case FIELD_TYPES.date:
    return { ...props, format: DATE_FORMAT };
  case FIELD_TYPES.text:
    return { ...props, value: values.join(TEXT_SEPARATOR)};
  }
};

const WORKLOG_FIELDS = FIELDS.map((field) => {
  const { type, name, values } = field;
  const component = COMPONENT_TYPES[type];
  const size = field.size || 1;

  if (!type) throwError('"type" attribute is required.', field);
  if (!component) throwError(`component with type '${type}' doesn't exist.`, field);
  if (!name) throwError('"name" attribute is required.', field);
  if (type === FIELD_TYPES.select && !values) throwError('"values" attribute is required for select.', field);

  return { type, component, componentProps: mapProps(field), size};
});

export default WORKLOG_FIELDS;
