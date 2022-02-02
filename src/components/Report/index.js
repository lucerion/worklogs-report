import React from 'react';
import dayjs from 'dayjs';
import { CATEGORIES, DATE_FORMAT } from '../../const';
import './report.css';

const Report = ({ worklogs }) => {
  const formatDescription = (description) => (
    description && description.split('\n').map((description, index) => <div key={index}>{description}</div>)
  );

  const formatDate = (date) => dayjs(date).format(DATE_FORMAT);

  return Object.values(worklogs).map(({ id, timeSpent, dateStarted, category, description }) => (
    <div className="report-entry" key={id}>
      <div>
        <b>Time spent: </b>
        {timeSpent}
      </div>
      <div>
        <b>Date Started: </b>
        {formatDate(dateStarted)}
      </div>
      <div>
        <b>Category: </b>
        {CATEGORIES[category]}
      </div>
      <div>
        <b>Description: </b>
        {formatDescription(description)}
      </div>
    </div>
  ));
};

export default Report;
