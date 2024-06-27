import {Dimensions, View} from 'react-native';
import React from 'react';

import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryScatter,
  VictoryTheme,
} from 'victory-native';

const {width} = Dimensions.get('window');

interface DataProps {
  Month: number;
  SD2neg: number;
  SD2: number;
}

interface Porps {
  gender: boolean;
  months: number;
  height: number;
  data: DataProps[];
}
export default function Chart_For_BMI({gender, months, height, data}: Porps) {
  const handleBgColor = () => {
    return gender ? '#E3F2FD' : '#FCE4EC';
  };

  return (
    <View
      style={{
        width: '98%',
        height: 320,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${handleBgColor()}`,
        borderRadius: 18,
        marginTop: 1,
      }}>
      <VictoryChart
        width={width + 10}
        domain={{x: [61, 228], y: [90, 200]}}
        theme={VictoryTheme.material}
        style={{background: {fill: '#EE82EE'}}}>
        <VictoryAxis label="Age in months" style={{axisLabel: {padding: 25}}} />
        <VictoryAxis
          dependentAxis
          label="Height"
          style={{axisLabel: {padding: 26}}}
        />
        <VictoryArea
          name="SD2"
          interpolation="natural"
          animate={{
            duration: 1000,
            onLoad: {duration: 1000},
          }}
          data={data}
          x="Month"
          y="SD2"
          style={{
            data: {stroke: '#c43a31', fill: '#66bb6a'},
            parent: {border: '1px solid #ccc'},
          }}
        />
        <VictoryArea
          name="SDNeg2"
          interpolation="natural"
          animate={{
            duration: 1000,
            onLoad: {duration: 1000},
          }}
          data={data}
          x="Month"
          y="SD2neg"
          style={{
            data: {stroke: '#c43a31', fill: '#ef5350'},
            parent: {border: '1px solid #ccc'},
          }}
          domain={{x: [61, 228], y: [90, 200]}}
        />
        <VictoryLabel
          text="Normal"
          x={305}
          y={100}
          textAnchor="start"
          style={{fill: 'white', fontSize: 12}}
        />
        <VictoryLabel
          text="Stunting"
          x={300}
          y={200}
          textAnchor="start"
          style={{fill: 'white', fontSize: 12}}
        />{' '}
        {/**/}
        {months >= 61 && height >= 10 && (
          <VictoryScatter
            size={3}
            data={[
              {
                x: months,
                y: height,
              },
            ]}
            style={{
              parent: {
                border: '1px solid #ccc',
              },
              data: {
                fill: '#c43a31',
                fillOpacity: 0.6,
                stroke: '#c43a31',
                strokeWidth: 2,
              },
              labels: {
                fontSize: 12,
                fill: 'white',
                padding: 10,
              },
            }}
            labels={({datum}) => `Months: ${datum.x} \nHeight: ${datum.y}`}
          />
        )}
      </VictoryChart>
    </View>
  );
}
