import {BMI_Range_For_Boys, Hight_Range_For_Boys} from '../json/jsonData';

let boy_object = {
  nutritionalStatusForBoys: '',
  hightStatusForBoys: '',
};

export function For_Boys(month: number, bmi: number, hight: number) {
  const nutritionalStatusForBoys = BMI_Range_For_Boys(month, bmi);
  const hightStatusForBoys = Hight_Range_For_Boys(month, hight);
  boy_object.nutritionalStatusForBoys = nutritionalStatusForBoys;
  boy_object.hightStatusForBoys = hightStatusForBoys;
  return boy_object;
}
