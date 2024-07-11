import {View, Text} from 'react-native';
import React from 'react';

export default function About() {
  const mobileNumber = '+94764491652';
  const email = 'sanka.dmg@gmail.com';
  console.log('About Page');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(23, 68, 84)',
      }}>
      <Text style={{color: 'white', fontSize: 18}}>
        Growth Reference App | V 2.0.0 @ 2024 July {'\n\n'}Developer {'\t\t\t'}:
        Dileepa Madusanka {'\n'}
        Designation{'\t'}: Public Health Inspector {'\n'}email {'\t\t\t'}:{' '}
        {email}
        {'\n'}Contact{'\t'}: {mobileNumber}
      </Text>
    </View>
  );
}
