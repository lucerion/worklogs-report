import React from 'react';
import Paper from '@mui/material/Paper';
import { default as BaseTabs } from '@mui/material/Tabs';
import { default as BaseTab } from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import { Provider } from '../../store';
import Tab from './Tab';
import Worklogs from '../Worklogs';
import Report from '../Report';

const Tabs = () => {
  const [state, setState] = React.useState({ currentTab: 0 });

  const selectTab = (_event, value) => setState({ currentTab: value });

  const { currentTab } = state;

  return (
    <Provider>
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
          <Worklogs />
        </Tab>
        <Tab xs={12} value={currentTab} index={1} >
          <Report />
        </Tab>
      </Grid>
    </Provider>
  );
};

export default Tabs;
