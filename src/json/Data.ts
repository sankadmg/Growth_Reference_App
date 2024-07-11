import {useEffect, useState} from 'react';
import {Bbmi, Bhfa, Gbmi, Ghfa} from './index';

import {selectGender} from '../../Redux_Store/selectors';
import {useAppSelector} from '../../Redux_Store/hooks';

interface DataPropBMI {
  Month: number;
  SD2neg: number;
  SD1: number;
  SD2: number;
}

// interface DataPropHeight {
//   Month: number;
//   SD2neg: number;
//   SD2: number;
// }

export function BMI_Data() {
  const gender = useAppSelector(selectGender);
  const [jsonData, setJsonData] = useState<DataPropBMI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (gender) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setJsonData(Bbmi);
      } else {
        await new Promise(resolve => setTimeout(resolve, 500));
        setJsonData(Gbmi);
      }
    };

    fetchData();
  }, [gender]);

  return jsonData;
}

// export function Height_Data() {
//   const gender = useAppSelector(selectGender);
//   const [jsonData, setJsonData] = useState<DataPropHeight[]>([]);
//   useEffect(() => {
//     if (gender) {
//       setJsonData(Bhfa);
//     } else {
//       setJsonData(Ghfa);
//     }
//   }, [[], gender]);

//   return jsonData;
// }
