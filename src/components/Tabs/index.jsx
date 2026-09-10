import Grid from '@mui/material/Grid';
import { default as MuiTab } from '@mui/material/Tab';
import { default as MuiTabs } from '@mui/material/Tabs';
import Paper from '@mui/material/Paper';
import { Provider } from '../../store';
import React from 'react';
import Report from '../Report';
import Tab from './Tab';
import Worklogs from '../Worklogs';

const Tabs = () => {
  const DEFAULT_TAB = 0;
  const [currentTab, selectTab] = React.useState(DEFAULT_TAB);

  return (
    <Provider>
      <Grid container spacing={2}>
        <Grid item size={12}>
          <Paper square>
            <MuiTabs value={currentTab} onChange={(_event, value) => selectTab(value)}>
              <MuiTab label="Worklogs" />
              <MuiTab label="Report" />
            </MuiTabs>
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
