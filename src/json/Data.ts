import {useEffect, useState} from 'react';
import {Bbmi, Bhfa, Gbmi, Ghfa} from './index';

interface DataProp {
  Month: number;
  SD2neg: number;
  SD1: number;
  SD2: number;
}

export default function Data() {
  const [jsonData, setJsonData] = useState<DataProp[]>([]);
  useEffect(() => {
    setJsonData(Bbmi);
  }, []);

  return jsonData;
}
