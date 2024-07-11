import {View} from 'react-native';
import React, {useEffect, useState} from 'react';

import D3Chart from '../src/components/D3Chart';
import {useAppSelector} from '../Redux_Store/hooks';
import {selectGender, selectBMI, selectMonths} from '../Redux_Store/selectors';
import {Bbmi} from '../src/json';
import Chart_For_BMI from '../src/components/Chart_For_BMI';

interface DataPropBMI {
  Month: number;
  SD2neg: number;
  SD1: number;
  SD2: number;
}

export default function Chart_Page() {
  const [bmi_data, setBmi_data] = useState<DataPropBMI[]>([]);
  const gender = useAppSelector(selectGender);
  const bmi = useAppSelector(selectBMI);
  const months = useAppSelector(selectMonths);

  useEffect(() => {
    const data_from_json = async () => {
      try {
        setBmi_data(Bbmi);
      } catch {
        console.error(Error);
      }
    };
    data_from_json();
  }, [gender]);

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
        data={bmi_data}
      />
      {/*
      <Chart_For_Height
        gender={gender}
        months={months}
        height={height}
        data={dataFromHeight}
      /> */}
    </View>
  );
}
