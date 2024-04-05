import * as React from 'react';

import { View, Text, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native-size-scaling';
const { width, height } = Dimensions.get("window");

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello word</Text>
      <View style={styles.box}>
        <Text style={styles.text}>Device: IPhone 13</Text>
        <Text style={styles.text}>Before: 300x300</Text>
        <Text>width:{width} hieght:{height}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
  },
  box: {
    width: 300,
    height: 300,
    marginVertical: 20,
    backgroundColor: 'gray',
    justifyContent: "space-between",
    alignItems: "center",
  },
});