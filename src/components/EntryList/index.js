import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Entry from '../Entry';

const EntryList = () => {
  const [entries, changeEntries] = React.useState({});

  const addEntry = () => {
    const ids = Object.keys(entries);
    const lastElementID = ids[ids.length - 1];

    changeEntry({
      id: lastElementID ? parseInt(lastElementID) + 1 : 1,
      timeSpent: '8h',
      category: 'new-feature',
      dateStarted: new Date().toLocaleDateString(),
    });
  };

  const changeEntry = (props) => {
    const { id } = props;
    changeEntries({ ...entries, [id]: props });
  };

  const removeEntry = ({ id }) => {
    const newEntries = {...entries};
    delete newEntries[id];
    changeEntries(newEntries);
  };

  const renderEntries = () => (
    Object.values(entries).map((props) => {
      const { id } = props;

      return <Entry key={id} onChange={changeEntry} onRemove={removeEntry} {...props} />;
    })
  );

  return (
    <Grid container item spacing={4}>
      {renderEntries()}
      <Grid item xs={2}>
        <Button fullWidth variant="contained" color="primary" onClick={addEntry}>Add worklog</Button>
      </Grid>
    </Grid>
  );
};

export default EntryList;
