import * as React from 'react';
import {StatusBar} from 'react-native';
import './config/ReactotronConfig';

import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#A6B36F" />
      <Routes />
    </>
  );
}

export default App;
