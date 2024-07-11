import {SafeAreaView} from 'react-native';
import React from 'react';
import {
  SwitchGender,
  FormData,
  RowData,
  Results,
} from '../src/components/index';

import {useAppSelector} from '../Redux_Store/hooks';
import {
  selectGender,
  selectBMI,
  selectMonths,
  selectHeight,
  selectWeight,
} from '../Redux_Store/selectors';

export default function Home() {
  const gender = useAppSelector(selectGender);
  const bmi = useAppSelector(selectBMI);
  const months = useAppSelector(selectMonths);
  const height = useAppSelector(selectHeight);
  const weight = useAppSelector(selectWeight);

  return (
    <SafeAreaView className="flex-1 items-center justify-between bg-custom-tealspecial">
      <SwitchGender />
      <FormData gender={gender} />
      <RowData
        gender={gender}
        bmi={bmi}
        months={months}
        height={height}
        weight={weight}
      />
      <Results gender={gender} month={months} bmi={bmi} hight={height} />
    </SafeAreaView>
  );
}
