import {View, Text, Alert, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Footer() {
  const handleOnPress = () => {
    const mobileNumber = '+94764491652';
    const email = 'sanka.dmg@gmail.com';
    Alert.alert(
      'Growth Reference App | V 1.0.0',
      `Developer: Dileepa Madusanka \nDesignation: Public Health Inspector \nemail: ${email}  \ncontact: ${mobileNumber}`,
      [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };
  return (
    <View className=" flex-row bg-blue-950 h-20 w-full justify-center items-center space-x-2">
      <TouchableOpacity onPress={handleOnPress}>
        <View className=" w-16 bg-neutral-50 text-xl rounded-xl items-center">
          <Text className="-top-0.5 text-blue-950 font-bold text-xl text-center">
            About
          </Text>
        </View>
      </TouchableOpacity>
      <Text className="text-neutral-50 text-xl text-right">
        Growth Reference App © 2024
      </Text>
    </View>
  );
}
