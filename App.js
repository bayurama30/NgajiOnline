import React from 'react';
import Router from './src/routers';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import BtDonasi from './src/assets/components/BtDonasi';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
