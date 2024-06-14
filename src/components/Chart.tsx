import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import {
  VictoryArea,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
} from 'victory-native';

export default function App() {
  const [hovered, setHovered] = useState(false);
  const data = [
    {x: 1, y: 1},
    {x: 2, y: 2},
    {x: 3, y: 5},
    {x: 4, y: 4},
    {x: 5, y: 7},
  ];
  return (
    <View style={styles.container}>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryArea
          interpolation="natural"
          animate={{
            duration: 1000,
            onLoad: {duration: 1000},
          }}
          style={{
            data: {stroke: '#c43a31', fill: 'pink'},
            parent: {border: '1px solid #ccc'},
          }}
          data={data}
        />
        <VictoryScatter
          size={5}
          data={[
            {
              x: 3,
              y: 4,
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
              strokeWidth: 3,
            },
            labels: {
              fontSize: 15,
              fill: '#c43a31',
              padding: 15,
            },
          }}
          labels={({datum}) => datum.x}
        />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#616161',
  },
});
