import React from 'react';
import { CATEGORY_MENU } from '../Entry';
import './report.css';

const Report = ({ worklogs }) => {
  const formatDescription = (description) => (
    description && description.split('\n').map((description, index) => <div key={index}>{description}</div>)
  );

  return Object.values(worklogs).map(({ id, timeSpent, dateStarted, category, description }) => (
    <div className="report-entry" key={id}>
      <div>
        <b>Time spent: </b>
        {timeSpent}
      </div>
      <div>
        <b>Date Started: </b>
        {dateStarted}
      </div>
      <div>
        <b>Category: </b>
        {CATEGORY_MENU[category]}
      </div>
      <div>
        <b>Description: </b>
        {formatDescription(description)}
      </div>
    </div>
  ));
};

export default Report;
