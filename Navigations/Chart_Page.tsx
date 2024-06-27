import {Text, View} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';
import {RootState} from '../Redux_Store/store';
import Chart_For_BMI from '../src/components/Chart_For_BMI';
import {BMI_Data, Height_Data} from '../src/json/Data';
import Chart_For_Height from '../src/components/Chart_For_Height';

export default function Chart_Page() {
  const {gender, months, bmi, height} = useSelector(
    (state: RootState) => state.user,
  );
  const dataFromBMI = BMI_Data();
  const dataFromHeight = Height_Data();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Chart_For_BMI
        gender={gender}
        months={months}
        bmi={bmi}
        data={dataFromBMI}
      />
      <Chart_For_Height
        gender={gender}
        months={months}
        height={height}
        data={dataFromHeight}
      />
    </View>
  );
}
