import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {About_Page, Chart_Page, Home_Page} from './index';

const Tab = createBottomTabNavigator();

export default function MyTab() {
  return (
    
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="BMI & Height Status For Age (5 -19)"
          component={Home_Page}
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
          component={Chart_Page}
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
          component={About_Page}
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
    
  );
}
