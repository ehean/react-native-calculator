import React from 'react';
import Expo, { LinearGradient } from 'expo';
import { StyleSheet, StatusBar } from 'react-native';
import CalculatorResponse from './components/CalculatorResponse';
import CalculatorButtonsContainer from './components/CalculatorButtonsContainer';
import math from './node_modules/mathjs'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      result: 0,
      expression: "",
    };

    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  getResult() {
    // This function should get the first input, the operator and
    // the second input and calculate the result.
  }

  refresh() {
    // This function should get all the state to its initial values.
    var clearExpression = "";
    var clearResult = 0;

    console.log("hello!");

    this.setState({
      expression: clearExpression,
      result: clearResult,
    })
  }


  handleButtonPress(button) {
    // This function should check which 'button' was pressed
    // and update state values
    // TIP: before performing any changes check the state
    // before clicking that button

    if (button != "=") {

      var updatedExpression = this.state.expression;

      updatedExpression += button;

      this.setState({
        expression: updatedExpression,
      })

    }
    else {

      var updatedResult = this.state.result;
      var clearExpression = this.state.expression;

      updatedResult = math.eval(this.state.expression);
      clearExpression = "";

      this.setState({
        result: updatedResult,
        expression: clearExpression,
      })
    }

   
  }


  render() {

    return (
      <LinearGradient
        colors={['#3498db', '#8e44ad']}
        style={styles.container}
      >

        <CalculatorResponse
          result={this.state.result}
          expression={this.state.expression}
          refresh={this.refresh}
        />

        <CalculatorButtonsContainer
          handleButtonPress={this.handleButtonPress}
        />

        <StatusBar barStyle="light-content" />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Expo.registerRootComponent(App);
