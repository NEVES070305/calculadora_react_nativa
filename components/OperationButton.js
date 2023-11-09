// OperationButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const OperationButton = ({ operation, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(operation)}>
      <Text style={styles.buttonText}>{operation}</Text>
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
    backgroundColor: 'gray'
  },
  buttonText: {
    fontSize: 24,
  },
});

export default OperationButton;
