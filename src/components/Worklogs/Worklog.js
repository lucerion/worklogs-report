import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { CATEGORIES, DATE_FORMAT } from '../../const';
import { Input, Date, Select, Textarea } from '../Fields';

const Worklog = ({ id, timeSpent, category, dateStarted, ticket, description, onChange, onRemove }) => {
  const worklog = { id, timeSpent, category, dateStarted, ticket, description };

  const onInputChange = (event) => {
    const data = event.target;
    const newState = data ? {...worklog, [data.name]: data.value } : {...worklog, dateStarted: event.toISOString()};

    onChange(newState);
  };

  return (
    <Grid container item alignItems="center" spacing={2}>
      <Grid item xs={1}>
        <Input
          label="Time spent"
          name="timeSpent"
          value={timeSpent}
          onChange={onInputChange}
        />
      </Grid>
      <Grid item xs={1}>
        <Date
          label="Date Started"
          name="dateStarted"
          value={dateStarted}
          onChange={onInputChange}
          format={DATE_FORMAT}
        />
      </Grid>
      <Grid item xs={2}>
        <Select
          label="Category"
          name="category"
          value={category}
          onChange={onInputChange}
          items={CATEGORIES}
        />
      </Grid>
      <Grid item xs={3}>
        <Input
          label="Ticket"
          name="ticket"
          value={ticket}
          onChange={onInputChange}
        />
      </Grid>
      <Grid item xs={4}>
        <Textarea
          label="Description"
          name="description"
          value={description}
          onChange={onInputChange}
        />
      </Grid>
      <Grid item xs={1}>
        <Button variant="outlined" color="secondary" size="large" onClick={() => onRemove(worklog)}>x</Button>
      </Grid>
    </Grid>
  );
};

Worklog.propTypes = {
  id: PropTypes.number,
  timeSpent: PropTypes.string,
  category: PropTypes.string,
  dateStarted: PropTypes.string,
  ticket: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Worklog;
