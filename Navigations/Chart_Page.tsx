import {Text, View} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';
import {RootState} from '../Redux_Store/store';
import Chart from '../src/components/Chart';

export default function Chart_Page() {
  const {gender, months, bmi, height} = useSelector(
    (state: RootState) => state.user,
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Chart />
    </View>
  );
}
