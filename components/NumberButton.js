// NumberButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NumberButton = ({ number, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(number)}>
      <Text style={styles.buttonText}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'pink'
  },
  buttonText: {
    fontSize: 24,
  },
});

export default NumberButton;
