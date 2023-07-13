import React from 'react';
import dayjs from 'dayjs';
import { Consumer } from '../../store';
import { DATE_FORMAT, FIELD_TYPES, TEXT_SEPARATOR } from '../../const';
import WORKLOG_FIELDS from '../../worklogFields';
import './report.css';

const Report = () => {
  const renderWorklogs = (worklogs) =>
    Object.values(worklogs).map((worklog, index) => (
      <div className="report-worklog" key={index}>
        {renderWorklog(worklog)}
      </div>
    ));

  const renderWorklog = (worklog) => (
    WORKLOG_FIELDS.map((field, index) => (
      <div key={index}>
        <b>{field.componentProps.label}: </b>
        {fieldValue(field, worklog)}
      </div>
    ))
  );

  const fieldValue = ({ type, componentProps: { name, items }}, worklog) => {
    const value = worklog[name];

    switch (type) {
    case FIELD_TYPES.select:
      return items[value];
    case FIELD_TYPES.date:
      return dayjs(value).format(DATE_FORMAT);
    case FIELD_TYPES.text:
      return value.split(TEXT_SEPARATOR).map((line, index) => <div key={index}>{line}</div>);
    default:
      return value;
    }
  };

  return (
    <Consumer>
      {({worklogs}) => renderWorklogs(worklogs)}
    </Consumer>
  );
};

export default Report;
