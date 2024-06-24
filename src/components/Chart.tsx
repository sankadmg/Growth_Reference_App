import {Dimensions, View} from 'react-native';
import React, {useState} from 'react';

import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryScatter,
  VictoryTheme,
} from 'victory-native';

import Data from '../json/Data';
import {RootState} from '../../Redux_Store/store';
import {useSelector} from 'react-redux';
const {height, width} = Dimensions.get('window');

export default function TestChart() {
  const {gender, months, bmi, height, weight} = useSelector(
    (state: RootState) => state.user,
  );

  const handleBgColor = () => {
    return gender ? '#FCE4EC' : '#E3F2FD';
  };
  const data = Data();
  return (
    <View
      style={{
        width: '98%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${handleBgColor()}`,
        borderRadius: 18,
      }}>
      <VictoryChart
        width={width + 10}
        domain={{x: [61, 228], y: [10, 32]}}
        theme={VictoryTheme.material}
        style={{background: {fill: '#6a1b9a'}}}>
        <VictoryAxis label="Age in months" style={{axisLabel: {padding: 25}}} />
        <VictoryAxis
          dependentAxis
          label="BMI"
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
            data: {stroke: '#c43a31', fill: '#EE82EE'},
            parent: {border: '1px solid #ccc'},
          }}
        />
        <VictoryArea
          name="SD1"
          interpolation="natural"
          animate={{
            duration: 1000,
            onLoad: {duration: 1000},
          }}
          data={data}
          x="Month"
          y="SD1"
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
          domain={{x: [61, 228], y: [10, 32]}}
        />
        <VictoryLabel
          text="Obesity"
          x={300}
          y={70}
          textAnchor="start"
          style={{fill: 'white', fontSize: 12}}
        />
        <VictoryLabel
          text="Overweight"
          x={280}
          y={105}
          textAnchor="start"
          style={{fill: 'white', fontSize: 12}}
        />
        <VictoryLabel
          text="Normal"
          x={300}
          y={170}
          textAnchor="start"
          style={{fill: 'white', fontSize: 12}}
        />
        <VictoryLabel
          text="Wasting"
          x={296}
          y={250}
          textAnchor="start"
          style={{fill: 'white', fontSize: 12}}
        />{' '}
        {/**/}
        {months >= 61 && bmi >= 10 && (
          <VictoryScatter
            size={3}
            data={[
              {
                x: months,
                y: bmi,
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
            labels={({datum}) => `Months: ${datum.x} \nBMI: ${datum.y}`}
          />
        )}
      </VictoryChart>
    </View>
  );
}
