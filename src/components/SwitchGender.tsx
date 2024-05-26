import {Switch, Text, View} from 'react-native';
import React, {useState} from 'react';

interface Props {
  onSwitch: (state: boolean) => void;
}

export default function SwitchGender({onSwitch}: Props) {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onSwitch(isEnabled);
  };

  return (
    <View className="grid top-1 flex-row space-x-2">
      <Text className=" w-48 text-right text-xl text-neutral-50">
        Select Gender
      </Text>
      <View className="flex flex-row w-16">
        <Switch
          className="transform scale-125"
          trackColor={{false: '#1e90ff', true: '#ff1493'}}
          thumbColor={isEnabled ? '#ff1493' : '#1e90ff'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View className=" w-16">
        <Text className="text-xl text-neutral-50">
          {isEnabled ? 'Girl' : 'Boy'}
        </Text>
      </View>
    </View>
  );
}
