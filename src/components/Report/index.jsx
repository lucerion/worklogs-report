import './report.css';

import { DATE_FORMAT, FIELD_TYPES, TEXT_SEPARATOR } from '../../const';
import { Consumer } from '../../store';
import dayjs from 'dayjs';
import reportTemplate from '../../../report-template.html?raw';
import WORKLOG_FIELDS from '../../worklogFields';

const Report = () => {
  // eslint-disable-next-line no-new-func
  const renderTemplate = new Function('field', `return \`${reportTemplate}\`;`);

  const fieldValue = ({ type, componentProps: { name, items }}, worklog) => {
    const value = worklog[name];

    switch (type) {
    case FIELD_TYPES.select:
      return items[value];
    case FIELD_TYPES.date:
      return dayjs(value).format(DATE_FORMAT);
    case FIELD_TYPES.text:
      return value.split(TEXT_SEPARATOR).map((textValue) => `<div>${textValue}</div>`).join('');
    default:
      return value;
    }
  };

  const renderWorklog = (worklog) => (
    WORKLOG_FIELDS.map((field, index) => {
      const templateString = renderTemplate({ name: field.componentProps.label, value: fieldValue(field, worklog) });

      return (
        <div key={index} dangerouslySetInnerHTML={{ __html: templateString }} />
      );
    })
  );

  const renderWorklogs = (worklogs) =>
    Object.values(worklogs).map((worklog, index) => (
      <div className="report-worklog" key={index}>
        {renderWorklog(worklog)}
      </div>
    ));

  return (
    <Consumer>
      {({worklogs}) => renderWorklogs(worklogs)}
    </Consumer>
  );
};

export default Report;
