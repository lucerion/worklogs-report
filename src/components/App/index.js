import React from 'react';
import { Provider } from '../../store';
import Tabs from '../Tabs';
import './app.css';

const App = () => (
  <Provider>
    <Tabs />
  </Provider>
);

export default App;
