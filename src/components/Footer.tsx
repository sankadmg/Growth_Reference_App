import {View, Text, Alert} from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    <View className=" bg-blue-950 h-20 w-full justify-center items-center">
      <Text className=" text-neutral-50 text-xl">Version: "0.0.1" | 2024</Text>
    </View>
  );
}
