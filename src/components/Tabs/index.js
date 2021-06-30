import React from 'react';
import Paper from '@material-ui/core/Paper';
import { default as BaseTabs } from '@material-ui/core/Tabs';
import { default as BaseTab } from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EntryList from '../EntryList';
import Tab from '../Tab';

const Tabs = () => {
  const [state, setState] = React.useState({ currentTab: 0 });

  const selectTab = (_event, value) => setState({ currentTab: value });

  const { currentTab } = state;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper square>
          <BaseTabs value={currentTab} onChange={selectTab}>
            <BaseTab label="Worklogs" />
            <BaseTab label="Report" />
          </BaseTabs>
        </Paper>
      </Grid>
      <Tab xs={12} value={currentTab} index={0} >
        <EntryList />
      </Tab>
      <Tab xs={2} value={currentTab} index={1} >
        <Button fullWidth variant="contained" color="primary">Generate report</Button>
      </Tab>
    </Grid>
  );
};

export default Tabs;
