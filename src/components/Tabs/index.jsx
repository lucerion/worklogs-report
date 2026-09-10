import React from 'react';
import Paper from '@mui/material/Paper';
import { default as MuiTabs } from '@mui/material/Tabs';
import { default as MuiTab } from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import { Provider } from '../../store';
import Tab from './Tab';
import Worklogs from '../Worklogs';
import Report from '../Report';

const Tabs = () => {
  const [currentTab, selectTab] = React.useState(0);

  return (
    <Provider>
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
