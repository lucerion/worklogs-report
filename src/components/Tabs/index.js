import React from 'react';
import Paper from '@material-ui/core/Paper';
import { default as BaseTabs } from '@material-ui/core/Tabs';
import { default as BaseTab } from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Tab from '../Tab';
import EntryList from '../EntryList';
import Report from '../Report';
import { Consumer } from '../../store';

const Tabs = () => {
  const [state, setState] = React.useState({ currentTab: 0 });

  const selectTab = (_event, value) => setState({ currentTab: value });

  const { currentTab } = state;

  return (
    <Consumer>
      {(context) => (
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
            <EntryList {...context} />
          </Tab>
          <Tab xs={12} value={currentTab} index={1} >
            <Report {...context} />
          </Tab>
        </Grid>
      )}
    </Consumer>
  );
};

export default Tabs;
