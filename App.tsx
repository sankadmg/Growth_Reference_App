import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MyTab from './Navigations/MyTab';

export default function App() {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
}
