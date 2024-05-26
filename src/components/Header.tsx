import {View, Text} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View className=" top-0 bg-blue-950 h-20 w-full justify-center items-center">
      <Text className=" text-xl text-neutral-50">
        BMI & Height Status For Age (5 -19)
      </Text>
    </View>
  );
}
