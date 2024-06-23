import {Dimensions, Text, View} from 'react-native';
import React, {useContext} from 'react';

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
// import {DataContext} from './MyTab';

//const {height, width} = Dimensions.get('window');

// interface Props {
//   gender: boolean;
// }

export default function Chart() {
  const {gender, age, bmi, height} = useSelector(
    (state: RootState) => state.user,
  );
  // const context = useContext(DataContext);
  // const {name, setName} = context!;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Gender: {gender ? 'Male' : 'Female'}</Text>
      <Text>Age: {age}</Text>
      <Text>BMI: {bmi}</Text>
      <Text>Height: {height}</Text>
    </View>
  );
}
