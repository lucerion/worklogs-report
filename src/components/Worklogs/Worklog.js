import React, { createElement } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Consumer } from '../../store';
import WORKLOG_FIELDS from '../../worklogFields';

const Worklog = (props) => {
  const onInputChange = (event, name, changeWorklog) => {
    const input = event.target;
    const isDatePicker = input === undefined;
    const newValue = isDatePicker ? event.toISOString() : input.value;
    const newState = { ...props, [name]: newValue };

    changeWorklog(newState);
  };

  const renderWorklogFields = (changeWorklog) => (
    WORKLOG_FIELDS.map(({ component, componentProps, size }, index) => {
      const { name } = componentProps;
      const value = props[name];
      const onChange = (event) => onInputChange(event, name, changeWorklog);

      return (
        <Grid item xs={size} key={index}>
          {createElement(component, { ...componentProps, value, onChange })}
        </Grid>
      );
    })
  );

  return (
    <Consumer>
      {({ changeWorklog, deleteWorklog }) => (
        <Grid container item spacing={2}>
          {renderWorklogFields(changeWorklog)}
          <Grid container item xs={1} justifyContent="center" alignItems="center">
            <Button variant="outlined" color="secondary" size="large" onClick={() => deleteWorklog(props)}>
              x
            </Button>
          </Grid>
        </Grid>
      )}
    </Consumer>
  );
};

export default Worklog;
