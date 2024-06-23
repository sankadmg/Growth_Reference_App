import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {About, Chart, Home} from './index';

import {Provider} from 'react-redux';
import store from '../Redux_Store/store';
import {AccessibilityInfo} from 'react-native';

const Tab = createBottomTabNavigator();

export default function MyTab() {
  return (
    <Provider store={store}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="BMI & Height Status For Age (5 -19)"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: 'rgb(23, 37, 84)',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            tabBarActiveTintColor: 'rgb(255,255,255)',
            tabBarLabel: 'Home',
            tabBarStyle: {backgroundColor: 'rgb(23, 37, 84)'},
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Chart"
          component={Chart}
          options={{
            headerStyle: {
              backgroundColor: 'rgb(23, 37, 84)',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            tabBarActiveTintColor: 'rgb(255,255,255)',
            tabBarLabel: 'Chart',
            tabBarStyle: {backgroundColor: 'rgb(23, 37, 84)'},
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
            headerStyle: {
              backgroundColor: 'rgb(23, 37, 84)',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            tabBarActiveTintColor: 'rgb(255,255,255)',
            tabBarLabel: 'About',
            tabBarStyle: {backgroundColor: 'rgb(23, 37, 84)'},
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
  );
}
