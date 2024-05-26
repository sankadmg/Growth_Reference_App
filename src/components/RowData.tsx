import {View, Text, Image} from 'react-native';
import React from 'react';

interface Props {
  gender: boolean;
  months: number;
  bmi: number;
  hight: number;
  weight: number;
}

export default function RowData({gender, months, bmi, hight, weight}: Props) {
  const icon = gender
    ? require('../icons/chart_boy.png')
    : require('../icons/chart_girl.png');

  return (
    <View className="flex-row top-2">
      <View className=" border-r mr-2 border-r-white">
        <View className="flex-row gap-2">
          <Text className="w-20 text-right text-xl text-slate-50">
            Months :
          </Text>
          <Text className="w-20 text-left text-xl text-slate-50">
            {months > 0 && months}
          </Text>
        </View>
        <View className="flex-row gap-2">
          <Text className="w-20 text-right text-xl text-slate-50">
            Height :
          </Text>
          <Text className="w-20 text-left text-xl text-slate-50">
            {hight > 0 && hight + 'm'}
          </Text>
        </View>
        <View className="flex-row gap-2">
          <Text className="w-20 text-right text-xl text-slate-50">
            Weight :
          </Text>
          <Text className="w-20 text-left text-xl text-slate-50">
            {weight > 0 && weight + 'Kg'}
          </Text>
        </View>
        <View className="flex-row gap-2">
          <Text className="w-20 text-right text-xl text-slate-50">BMI :</Text>
          <Text className="w-20 text-left text-xl text-slate-50">
            {hight > 0 && bmi.toFixed(2)}
          </Text>
        </View>
      </View>
      <Image source={icon} className=" w-24 h-24" />
    </View>
  );
}
