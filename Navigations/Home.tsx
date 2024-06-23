import {View, Text, Pressable, Button} from 'react-native';
import React, {useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../Redux_Store/store';
import {setAge, setBMI, setGender, setHeight} from '../Redux_Store/userSlice';
//import {DataContext} from './MyTab';

export default function Home() {
  // const context = useContext(DataContext);
  // const {name, setName} = context!;
  const dispatch = useDispatch();
  const {gender, age, bmi, height} = useSelector(
    (state: RootState) => state.user,
  );
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Gender: {gender ? 'Male' : 'Female'}</Text>
      <Text>Age: {age}</Text>
      <Text>BMI: {bmi}</Text>
      <Text>Height: {height}</Text>
      <Button
        title="Set Gender to Male"
        onPress={() => dispatch(setGender(true))}
      />
      <Button title="Set Age to 30" onPress={() => dispatch(setAge(30))} />
      <Button title="Set BMI to 25.0" onPress={() => dispatch(setBMI(25.0))} />
      <Button
        title="Set Height to 180"
        onPress={() => dispatch(setHeight(180))}
      />
    </View>
  );
}
