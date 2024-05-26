import bmi_Range_For_Boys from './Bbmi.json';
import bmi_Range_For_Girls from './Gbmi.json';
import hight_Range_For_Boys from './Bhfa.json';
import hight_Range_For_Girls from './Ghfa.json';

function BMI_Range_Finder(row: any, bmi: number) {
  let status: string = '';

  const SD2neg = row?.SD2neg;
  const SD1 = row?.SD1;
  const SD2 = row?.SD2;

  if (bmi <= SD2neg) {
    return (status = 'Wasting');
  } else if (bmi <= SD1) {
    return (status = 'Normal');
  } else if (bmi <= SD2) {
    return (status = 'Overweight');
  } else {
    return (status = 'Obesity');
  }
}

function Hight_Range_Finder(row: any, hight: number) {
  let status: string = '';

  const SD2neg = row?.SD2neg;
  const SD2 = row?.SD2;

  if (hight <= SD2neg) {
    return (status = 'Stunting');
  } else if (hight <= SD2) {
    return (status = 'Normal');
  } else {
    return (status = 'Overheight');
  }
}

export function BMI_Range_For_Boys(month: number, bmi: number) {
  const row: any = bmi_Range_For_Boys.find(item => item.Month === month);
  return BMI_Range_Finder(row, bmi);
}

export function BMI_Range_For_Girls(month: number, bmi: number) {
  const row: any = bmi_Range_For_Girls.find(item => item.Month === month);
  return BMI_Range_Finder(row, bmi);
}

export function Hight_Range_For_Boys(month: number, hight: number) {
  const row: any = hight_Range_For_Boys.find(item => item.Month === month);
  return Hight_Range_Finder(row, hight);
}

export function Hight_Range_For_Girls(month: number, hight: number) {
  const row: any = hight_Range_For_Girls.find(item => item.Month === month);
  return Hight_Range_Finder(row, hight);
}
