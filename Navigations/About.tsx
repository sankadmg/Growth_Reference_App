import {View, Text} from 'react-native';
import React from 'react';

export default function About() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(23, 68, 84)',
      }}>
      <Text>About</Text>
    </View>
  );
}
