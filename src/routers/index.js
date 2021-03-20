import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, JadwalSholat, Kalender} from '../pages';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator initialRouteName={Home}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarVisible: false}}
      />
      <Tab.Screen
        name="Jadwal Shallat"
        component={JadwalSholat}
        options={{tabBarVisible: false}}
      />
      <Tab.Screen
        name="Kalender"
        component={Kalender}
        options={{tabBarVisible: false}}
      />
    </Tab.Navigator>
  );
};

export default Router;
