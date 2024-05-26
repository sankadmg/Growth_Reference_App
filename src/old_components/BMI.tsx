import {Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon from './Icon';

interface Props {
  gender: boolean;
  submitBMI: (
    bmi: number,
    hight: number,
    weight: number,
    months: number,
  ) => void;
}

export default function BMI({submitBMI, gender}: Props) {
  const [hight, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');

  const calculateBMI = () => {
    const arrayOfAge = age.split('.');
    const numberOfMonths =
      parseFloat(arrayOfAge[0]) * 12 + parseFloat(arrayOfAge[1]);
    const valueOfBmi =
      parseFloat(weight) / parseFloat(hight) / parseFloat(hight);
    submitBMI(
      valueOfBmi,
      parseFloat(hight),
      parseFloat(weight),
      numberOfMonths,
    );
    setAge('');
    setHeight('');
    setWeight('');
  };

  return (
    <>
      <View className="grid flex-row items-center">
        <Text className=" w-28 mx-2 text-right text-xl text-neutral-50">
          Enter Age
        </Text>
        <View>
          <TextInput
            className="text-center border-2 w-16 h-10 rounded-xl border-custom-mintcream"
            placeholder="Age"
            placeholderTextColor="gray"
            keyboardType="number-pad"
            value={age}
            onChangeText={setAge}></TextInput>
        </View>
      </View>
      <View className="grid flex-row gap-2 items-center space-x-2">
        <Text className="w-50 text-xl text-neutral-50">
          Enter Weight & Height
        </Text>
        <View className="grid flex-row space-x-2 items-center">
          <TextInput
            className="text-center border-2 w-16 h-10 rounded-xl border-custom-mintcream"
            placeholder="Height"
            placeholderTextColor="gray"
            keyboardType="number-pad"
            value={hight}
            onChangeText={setHeight}></TextInput>
          <TextInput
            className="text-center border-2 w-16 h-10 rounded-xl border-custom-mintcream"
            placeholder="Weight"
            placeholderTextColor="gray"
            keyboardType="number-pad"
            value={weight}
            onChangeText={setWeight}></TextInput>
        </View>
      </View>
      <Icon gender={gender} />
      <Text
        className="text-xl text-center h-8 w-4/5 justify-center items-center text-custom-tealspecial bg-neutral-50 rounded hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        onPress={calculateBMI}>
        Calculate
      </Text>
    </>
  );
}
