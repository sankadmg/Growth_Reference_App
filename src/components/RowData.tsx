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

  const monthsOfAge = months % 12;
  const yearsOfAge = (months - monthsOfAge) / 12;
  const age = `${yearsOfAge + 'y & ' + monthsOfAge + 'm'}`;

  const colorObject = {
    male: '#1e90ff',
    female: '#ff1493',
  };

  const bmiBackgroundColor = gender ? colorObject.male : colorObject.female;

  return (
    <View className="flex-row top-2">
      <View className="pb-2 border-r mr-2 border-r-white">
        <View className=" flex-row space-x-1">
          <Text className="w-24 text-right text-xl text-slate-50">Age :</Text>
          <Text className="w-24 text-left text-xl text-slate-50">
            {months > 0 && age}
          </Text>
        </View>
        <View className="flex-row space-x-1">
          <Text className="w-24 text-right text-xl text-slate-50">
            Height :
          </Text>
          <Text className="w-24 text-left text-xl text-slate-50">
            {hight > 0 && hight + 'cm'}
          </Text>
        </View>
        <View className="flex-row space-x-1">
          <Text className=" w-24 text-right text-xl text-slate-50">
            Weight :
          </Text>
          <Text className="w-24 text-left text-xl text-slate-50">
            {weight > 0 && weight + 'Kg'}
          </Text>
        </View>
        <View className="flex-row top-2 space-x-1">
          <Text className="w-24 text-right text-xl text-slate-50">BMI :</Text>
          {bmi && (
            <Text
              className="w-16 text-center text-xl rounded-lg font-bold text-slate-50"
              style={{backgroundColor: bmiBackgroundColor}}>
              {hight > 0 && bmi.toFixed(1)}
            </Text>
          )}
        </View>
      </View>
      <Image source={icon} className="w-24 h-24 top-1 mr-2" />
    </View>
  );
}
