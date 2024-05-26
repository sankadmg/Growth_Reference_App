import React from 'react';
import {
  Button,
  GestureResponderEvent,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
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

export default function FormData({submitBMI, gender}: Props) {
  const initialValues = {
    age: '',
    height: '',
    weight: '',
  };

  const validationSchema = Yup.object().shape({
    age: Yup.number()
      .required('Age is required')
      .min(5.1, 'Age must be Grater than 60 months')
      .max(19.1, 'Age must be less than 229 months'),
    height: Yup.number()
      .required('Height is required')
      .min(1, 'Height must be a positive number'),
    weight: Yup.number()
      .required('Weight is required')
      .min(1, 'Weight must be a positive number'),
  });

  function calculateBMI(values: any) {
    const arrayOfAge = values.age.split('.');
    const numberOfMonths =
      parseFloat(arrayOfAge[0]) * 12 + parseFloat(arrayOfAge[1]);
    const valueOfBmi =
      parseFloat(values.weight) /
      parseFloat(values.height) /
      parseFloat(values.height);
    const bmi = valueOfBmi * 10000;
    submitBMI(
      bmi,
      parseFloat(values.height),
      parseFloat(values.weight),
      numberOfMonths,
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, {resetForm}) => {
        calculateBMI(values);
        resetForm();
      }}>
      {({handleChange, handleBlur, handleSubmit, touched, errors, values}) => (
        <>
          <View className=" top-2 flex-row w-full">
            <View className=" border-r border-r-white w-34 items-center justify-center">
              <Icon gender={gender} />
            </View>
            <View className=" w-64 ml-2">
              <View className=" flex-row h-14 items-center">
                <TextInput
                  className=" text-center border-2 w-16 h-12 rounded-xl border-custom-mintcream"
                  placeholder="Age"
                  placeholderTextColor="gray"
                  keyboardType="number-pad"
                  onChangeText={handleChange('age')}
                  onBlur={handleBlur('age')}
                  value={values.age}
                />
                {touched.age && errors.age ? (
                  <Text className=" mr-2 text-red-500 w-40 text-[12px]">
                    {errors.age}
                  </Text>
                ) : (
                  <Text className=" w-40 mr-2 text-[12px] text-white">
                    Enter the age in the range of 5.1 to 19.1(Ex: 5 year & 1
                    month - 5.1)
                  </Text>
                )}
              </View>
              <View className=" flex-row h-14 items-center space-x-1">
                <TextInput
                  className=" text-center border-2 w-16 h-12 rounded-xl border-custom-mintcream"
                  placeholder="Height"
                  placeholderTextColor="gray"
                  keyboardType="number-pad"
                  onChangeText={handleChange('height')}
                  onBlur={handleBlur('height')}
                  value={values.height}
                />
                {touched.height && errors.height ? (
                  <Text className=" mr-2 text-red-500 w-40 text-[12px]">
                    {errors.height}
                  </Text>
                ) : (
                  <Text className="w-40 mr-2 text-[12px] text-white">
                    Enter the height in cm
                  </Text>
                )}
              </View>
              <View className=" flex-row h-14  items-center space-x-1">
                <TextInput
                  className=" text-center border-2 w-16 h-12 rounded-xl border-custom-mintcream"
                  placeholder="Weight"
                  placeholderTextColor="gray"
                  keyboardType="number-pad"
                  onChangeText={handleChange('weight')}
                  onBlur={handleBlur('weight')}
                  value={values.weight}
                />
                {touched.weight && errors.weight ? (
                  <Text className=" mr-2 text-red-500 w-40 text-[12px]">
                    {errors.weight}
                  </Text>
                ) : (
                  <Text className="w-40 mr-2 text-[12px] text-white">
                    Enter the weight in Kg
                  </Text>
                )}
              </View>
            </View>
          </View>
          <View className="h-12 -bottom-4  w-full items-center">
            <Text
              className="text-xl text-center h-8 w-60 items-center text-custom-tealspecial bg-neutral-50 rounded-xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
              onPress={(e: GestureResponderEvent) => handleSubmit()}>
              Calculate
            </Text>
          </View>
        </>
      )}
    </Formik>
  );
}
