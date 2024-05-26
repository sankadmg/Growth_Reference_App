import {For_Boys} from './boy';
import {For_Girls} from './girl';

type colorMapBMI = {
  Wasting: string;
  Normal: string;
  Overweight: string;
  Obesity: string;
};

type colorMapHight = {
  Normal: string;
  Stunting: string;
  Overheight: string;
};

const colorObject = {
  colorOfBMI: '',
  colorOfHight: '',
};

export function selectColors(
  gender: boolean,
  month: number,
  bmi: number,
  hight: number,
) {
  const bmiStatus: colorMapBMI = {
    Wasting: '#991b1b',
    Normal: '#15803d',
    Overweight: '#e879f9',
    Obesity: '#6b21a8',
  };

  const hightStatus: colorMapHight = {
    Normal: '#15803d',
    Stunting: '#991b1b',
    Overheight: '#e879f9',
  };

  const boy = For_Boys(month, bmi, hight);
  const girl = For_Girls(month, bmi, hight);

  const bmiColor = gender
    ? boy.nutritionalStatusForBoys
    : girl.nutritionalStatusForGirls;

  const hightColor = gender ? boy.hightStatusForBoys : girl.hightStatusForGirls;

  const bmiColor_result = Object.entries(bmiStatus).find(
    ([k, v]) => k === bmiColor,
  );
  const hightColor_result = Object.entries(hightStatus).find(
    ([k, v]) => k === hightColor,
  );

  if (bmiColor_result && hightColor_result) {
    colorObject.colorOfBMI = bmiColor_result[1];
    colorObject.colorOfHight = hightColor_result[1];
  }
  return colorObject;
}
