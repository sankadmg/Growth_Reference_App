import {SafeAreaView} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../Redux_Store/store';

import {
  Header,
  SwitchGender,
  FormData,
  RowData,
  Results,
  Footer,
} from '../src/components/index';

export default function Home() {
  const dispatch = useDispatch();
  const {gender, months, bmi, height, weight} = useSelector(
    (state: RootState) => state.user,
  );

  return (
    <SafeAreaView className="flex-1 items-center justify-between bg-custom-tealspecial">
      <SwitchGender />
      <FormData />
      <RowData />
      <Results gender={gender} month={months} bmi={bmi} hight={height} />
    </SafeAreaView>
  );
}
