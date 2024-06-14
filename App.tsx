import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import {
  Header,
  SwitchGender,
  FormData,
  RowData,
  Results,
  Footer,
} from './src/components/index';
import Chart from './src/components/Chart';

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
      {/* <Chart /> */}
      <Footer />
    </SafeAreaView>
  );
}
