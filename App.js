import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Display from './components/Display';
import NumberButton from './components/NumberButton';
import OperationButton from './components/OperationButton';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      result: '',
    };
  }

  handleButtonPress = (value) => {
    if (value === '=') {
      try {
        const result = eval(this.state.input);
        this.setState({ input: result.toString(), result: '' });
      } catch (error) {
        this.setState({ result: 'Erro' });
      }
    } else if (value === 'AC') {
      this.setState({ input: '', result: '' });
    } else {
      this.setState((prevState) => ({ input: prevState.input + value }));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Calculadora</Text>
        </View>
        <Display input={this.state.input} result={this.state.result} />
        <View style={styles.row}>
        <OperationButton operation="AC" onPress={this.handleButtonPress} />
        <OperationButton operation="/" onPress={this.handleButtonPress} />
        </View>
        <View style={styles.row}>
          <NumberButton number="7" onPress={this.handleButtonPress} />
          <NumberButton number="8" onPress={this.handleButtonPress} />
          <NumberButton number="9" onPress={this.handleButtonPress} />
          <OperationButton operation="*" onPress={this.handleButtonPress} />
        </View>
        <View style={styles.row}>
          <NumberButton number="4" onPress={this.handleButtonPress} />
          <NumberButton number="5" onPress={this.handleButtonPress} />
          <NumberButton number="6" onPress={this.handleButtonPress} />
          <OperationButton operation="-" onPress={this.handleButtonPress} />
        </View>
        <View style={styles.row}>
          <NumberButton number="1" onPress={this.handleButtonPress} />
          <NumberButton number="2" onPress={this.handleButtonPress} />
          <NumberButton number="3" onPress={this.handleButtonPress} />
          <OperationButton operation="+" onPress={this.handleButtonPress} />
        </View>
        <View style={styles.row}>
          <NumberButton number="0" onPress={this.handleButtonPress} />
          <NumberButton number="." onPress={this.handleButtonPress} />
          <OperationButton operation="=" onPress={this.handleButtonPress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});
