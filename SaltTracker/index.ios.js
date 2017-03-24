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
import ProductList from './src/components/product-list/product-list.component'
import ProductDao from './src/dao/product.dao'

aapjes = ['henk', 'piet', 'jan'];

export default class SaltTracker extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<View style={styles.container}>*/}
          {/*<Chart maxIntake="6" currentIntake="6"></Chart>*/}
        {/*</View>*/}
        <View style={styles.container}>
          <ProductList aap="joehoe" aapjes={aapjes} dao={ProductDao}></ProductList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303030'    
  }
});

AppRegistry.registerComponent('SaltTracker', () => SaltTracker);
