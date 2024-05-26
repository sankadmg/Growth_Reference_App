import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

interface Props {
  submitDate: (date: Date) => void;
}

export default ({submitDate}: Props) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
    submitDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View className="grid flex-row">
      <Text className=" w-48 mx-2 text-right text-xl text-neutral-50">
        Select Birthday
      </Text>
      <View className="flex flex-row items-center">
        <Text
          className="text-xl w-36 h-8 text-center items-center text-custom-tealspecial bg-neutral-50 rounded hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          onPress={showDatepicker}>
          Select Birthday
        </Text>
        {show && (
          <RNDateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};
