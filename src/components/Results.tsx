import {Text, View} from 'react-native';
import React from 'react';
import {For_Boys} from '../ts/boy';
import {For_Girls} from '../ts/girl';
import {selectColors} from '../ts/colors';

interface Props {
  gender: boolean;
  month: number;
  bmi: number;
  hight: number;
}

export default function Results({gender, month, bmi, hight}: Props) {
  const boy = For_Boys(month, bmi, hight);
  const girl = For_Girls(month, bmi, hight);

  const color = selectColors(gender, month, bmi, hight);

  return (
    <View className=" flex-row w-full h-16 items-center justify-center space-x-2">
      <View className="flex-row">
        <Text className="text-xl text-slate-50">BMI :</Text>
        {bmi > 0 ? (
          <Text
            className="w-28 text-xl rounded text-center text-slate-50"
            style={{backgroundColor: color.colorOfBMI}}>
            {gender
              ? boy.nutritionalStatusForBoys
              : girl.nutritionalStatusForGirls}
          </Text>
        ) : (
          <Text className="w-28 text-xl text-slate-50"></Text>
        )}
      </View>
      <View className="flex-row">
        <Text className="text-xl text-slate-50">Height :</Text>
        {bmi > 0 ? (
          <Text
            className="w-28 text-xl rounded text-center text-slate-50"
            style={{backgroundColor: color.colorOfHight}}>
            {gender ? boy.hightStatusForBoys : girl.hightStatusForGirls}
          </Text>
        ) : (
          <Text className="w-28 text-xl text-slate-50"></Text>
        )}
      </View>
    </View>
  );
}
