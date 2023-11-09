// Display.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = ({ input, result }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.input}>{input}</Text>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    margin: 10,
    borderBlockColor: "black",
    borderWidth: 1,
    borderColor: 'black',
  },
  input: {
    fontSize: 20,
    marginBottom: 5,
  },
  result: {
    fontSize: 24,
  },
});

export default Display;
