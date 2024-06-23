import {Dimensions, Text, View} from 'react-native';
import React from 'react';

import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryScatter,
  VictoryTheme,
} from 'victory-native';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux_Store/store';

export default function Chart() {
  const {gender, months, bmi, height} = useSelector(
    (state: RootState) => state.user,
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(23, 68, 84)',
      }}>
      <Text>Gender: {gender ? 'Male' : 'Female'}</Text>
      <Text>Months: {months}</Text>
      <Text>BMI: {bmi.toFixed(2)}</Text>
      <Text>Height: {height}</Text>
    </View>
  );
}
