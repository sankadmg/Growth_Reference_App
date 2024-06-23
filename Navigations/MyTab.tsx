import {View, Text} from 'react-native';
import React, {createContext, Dispatch, SetStateAction, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {About, Chart, Home} from './index';

import Bbmi from '../src/json/Bbmi.json';
import {Provider} from 'react-redux';
import store from '../Redux_Store/store';

// type setName = (value: string) => void;

// interface contextProps {
//   name: string;
//   setName: setName;
// }

//export const DataContext = createContext<contextProps | undefined>(undefined);

const Tab = createBottomTabNavigator();

export default function MyTab() {
  //const [name, setName] = useState<string>('user name');

  return (
    //<DataContext.Provider value={{name, setName}}>
    <Provider store={store}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Chart"
          component={Chart}
          options={{
            tabBarLabel: 'Chart',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="chart-timeline-variant-shimmer"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </Provider>
    //</DataContext.Provider>
  );
}
