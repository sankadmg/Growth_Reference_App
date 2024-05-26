import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import SwitchGender from './src/components/SwitchGender';
import FormData from './src/components/FormData';

import Results from './src/components/Results';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import RowData from './src/components/RowData';

export default function App() {
  const [student, setStudent] = useState({
    state: false,
    months: 0,
    bmi: 0,
    hight: 0,
    weight: 0,
  });

  const handleSwitchState = (state: boolean) => {
    setStudent({...student, state: state});
  };

  const handleBMIChange = (
    bmi: number,
    hight: number,
    weight: number,
    months: number,
  ) => {
    setStudent({
      ...student,
      months: months,
      bmi: bmi,
      hight: hight,
      weight: weight,
    });
  };

  return (
    <SafeAreaView className=" flex-1 items-center justify-between bg-custom-tealspecial ">
      <Header />
      <SwitchGender onSwitch={handleSwitchState} />
      <FormData submitBMI={handleBMIChange} gender={student.state} />
      <RowData
        gender={student.state}
        months={student.months}
        bmi={student.bmi}
        hight={student.hight}
        weight={student.weight}
      />
      <Results
        gender={student.state}
        month={student.months}
        bmi={student.bmi}
        hight={student.hight}
      />
      <Footer />
    </SafeAreaView>
  );
}
