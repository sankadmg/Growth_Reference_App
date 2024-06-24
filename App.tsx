import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MyTab from './Navigations/MyTab';
import {Provider} from 'react-redux';
import store from './Redux_Store/store';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTab />
      </NavigationContainer>
    </Provider>
  );
}
