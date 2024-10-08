import {Switch, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {setGender} from '../../Redux_Store/userSlice';

import {useAppDispatch} from '../../Redux_Store/hooks';

export default function SwitchGender() {
  const dispatch = useAppDispatch();

  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = useCallback(() => {
    setIsEnabled(previousState => !previousState);
    dispatch(setGender(isEnabled));
  }, [isEnabled]);
  // console.log('Switch Gender');
  return (
    <View className=" top-4 flex-row space-x-1">
      <Text className="border-r border-white w-48 text-center text-xl text-neutral-50">
        Select Gender
      </Text>
      <View className=" items-center w-16">
        <Switch
          className="transform scale-125"
          trackColor={{false: '#1e90ff', true: '#ff1493'}}
          thumbColor={isEnabled ? '#ff1493' : '#1e90ff'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View className="  w-16">
        <Text className="text-xl text-center text-neutral-50">
          {isEnabled ? 'Girl' : 'Boy'}
        </Text>
      </View>
    </View>
  );
}
