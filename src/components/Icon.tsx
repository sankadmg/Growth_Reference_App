import {View, Image} from 'react-native';
import React from 'react';
interface Props {
  gender: boolean;
}
export default function Icon({gender}: Props) {
  const icon = gender
    ? require('../icons/boy.png')
    : require('../icons/girl.png');
  return (
    <View>
      <Image source={icon} className="w-28 h-24" />
    </View>
  );
}
