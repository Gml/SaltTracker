/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Chart from './src/components/chart/chart.component'

export default class SaltTracker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Chart maxIntake="6" currentIntake="6"></Chart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('SaltTracker', () => SaltTracker);
