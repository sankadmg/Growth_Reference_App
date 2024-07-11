import {Dimensions, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';

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
  SD1: number;
  SD2: number;
}

interface Porps {
  gender: boolean;
  months: number;
  bmi: number;
  data: DataProps[];
}
export default function Chart_For_BMI({gender, months, bmi, data}: Porps) {
  const handleBgColor = useMemo(() => {
    return gender ? '#E3F2FD' : '#FCE4EC';
  }, [gender]);

  const memoizedChartData = useMemo(() => data, [data]);

  return (
    <View
      style={{
        width: '98%',
        height: 325,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: handleBgColor,
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
          data={memoizedChartData}
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
          data={memoizedChartData}
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
          data={memoizedChartData}
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
        />
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
    // <View
    //   style={{
    //     width: '98%',
    //     height: 325,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: handleBgColor,
    //     borderRadius: 18,
    //   }}>
    //   <VictoryChart
    //     width={width + 10}
    //     domain={{x: [61, 228], y: [10, 32]}}
    //     theme={VictoryTheme.material}
    //     style={{background: {fill: '#6a1b9a'}}}>
    //     <VictoryAxis label="Age in months" style={{axisLabel: {padding: 25}}} />
    //     <VictoryAxis
    //       dependentAxis
    //       label="BMI"
    //       style={{axisLabel: {padding: 26}}}
    //     />
    //     <VictoryArea
    //       name="SD2"
    //       interpolation="natural"
    //       animate={{
    //         duration: 1000,
    //         onLoad: {duration: 1000},
    //       }}
    //       data={data}
    //       x="Month"
    //       y="SD2"
    //       style={{
    //         data: {stroke: '#c43a31', fill: '#EE82EE'},
    //         parent: {border: '1px solid #ccc'},
    //       }}
    //     />
    //     <VictoryArea
    //       name="SD1"
    //       interpolation="natural"
    //       animate={{
    //         duration: 1000,
    //         onLoad: {duration: 1000},
    //       }}
    //       data={data}
    //       x="Month"
    //       y="SD1"
    //       style={{
    //         data: {stroke: '#c43a31', fill: '#66bb6a'},
    //         parent: {border: '1px solid #ccc'},
    //       }}
    //     />
    //     <VictoryArea
    //       name="SDNeg2"
    //       interpolation="natural"
    //       animate={{
    //         duration: 1000,
    //         onLoad: {duration: 1000},
    //       }}
    //       data={data}
    //       x="Month"
    //       y="SD2neg"
    //       style={{
    //         data: {stroke: '#c43a31', fill: '#ef5350'},
    //         parent: {border: '1px solid #ccc'},
    //       }}
    //       domain={{x: [61, 228], y: [10, 32]}}
    //     />
    //     <VictoryLabel
    //       text="Obesity"
    //       x={300}
    //       y={70}
    //       textAnchor="start"
    //       style={{fill: 'white', fontSize: 12}}
    //     />
    //     <VictoryLabel
    //       text="Overweight"
    //       x={280}
    //       y={105}
    //       textAnchor="start"
    //       style={{fill: 'white', fontSize: 12}}
    //     />
    //     <VictoryLabel
    //       text="Normal"
    //       x={300}
    //       y={170}
    //       textAnchor="start"
    //       style={{fill: 'white', fontSize: 12}}
    //     />
    //     <VictoryLabel
    //       text="Wasting"
    //       x={296}
    //       y={250}
    //       textAnchor="start"
    //       style={{fill: 'white', fontSize: 12}}
    //     />{' '}
    //     {/**/}
    //     {months >= 61 && bmi >= 10 && (
    //       <VictoryScatter
    //         size={3}
    //         data={[
    //           {
    //             x: months,
    //             y: bmi,
    //           },
    //         ]}
    //         style={{
    //           parent: {
    //             border: '1px solid #ccc',
    //           },
    //           data: {
    //             fill: '#c43a31',
    //             fillOpacity: 0.6,
    //             stroke: '#c43a31',
    //             strokeWidth: 2,
    //           },
    //           labels: {
    //             fontSize: 12,
    //             fill: 'white',
    //             padding: 10,
    //           },
    //         }}
    //         labels={({datum}) => `Months: ${datum.x} \nBMI: ${datum.y}`}
    //       />
    //     )}
    //   </VictoryChart>
    // </View>
  );
}
