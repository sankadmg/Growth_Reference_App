import {useEffect, useState} from 'react';
import {Bbmi, Bhfa, Gbmi, Ghfa} from './index';
import {RootState} from '../../Redux_Store/store';
import {useSelector} from 'react-redux';

interface DataPropBMI {
  Month: number;
  SD2neg: number;
  SD1: number;
  SD2: number;
}

interface DataPropHeight {
  Month: number;
  SD2neg: number;
  SD2: number;
}
//const {gender} = useSelector((state: RootState) => state.user);

export function BMI_Data() {
  const {gender} = useSelector((state: RootState) => state.user);
  const [jsonData, setJsonData] = useState<DataPropBMI[]>([]);
  useEffect(() => {
    if (gender) {
      setJsonData(Bbmi);
    } else {
      setJsonData(Gbmi);
    }
  }, [[], gender]);

  return jsonData;
}

export function Height_Data() {
  const {gender} = useSelector((state: RootState) => state.user);
  const [jsonData, setJsonData] = useState<DataPropHeight[]>([]);
  useEffect(() => {
    if (gender) {
      setJsonData(Bhfa);
    } else {
      setJsonData(Ghfa);
    }
  }, [[], gender]);

  return jsonData;
}
// export function Height_Data_For_Boys() {
//   const [jsonData, setJsonData] = useState<DataPropHeight[]>([]);
//   useEffect(() => {
//     setJsonData(Bhfa);
//   }, []);

//   return jsonData;
// }

// export function Height_Data_For_Girls() {
//   const [jsonData, setJsonData] = useState<DataPropHeight[]>([]);
//   useEffect(() => {
//     setJsonData(Ghfa);
//   }, []);

//   return jsonData;
// }
