import {BMI_Range_For_Girls, Hight_Range_For_Girls} from '../json/jsonData';

let girl_object = {
  nutritionalStatusForGirls: '',
  hightStatusForGirls: '',
};

export function For_Girls(month: number, bmi: number, hight: number) {
  const nutritionalStatusForGirls = BMI_Range_For_Girls(month, bmi);
  const hightStatusForGirls = Hight_Range_For_Girls(month, hight);
  girl_object.nutritionalStatusForGirls = nutritionalStatusForGirls;
  girl_object.hightStatusForGirls = hightStatusForGirls;
  return girl_object;
}
