/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Chart from './src/components/chart/chart.component';
import ProductList from './src/components/product-list/product-list.component';
import AddConsumption from './src/components/add-consumption/add-consumption.component';
import AddProduct from './src/components/add-product/add-product.component';
import ProductDao from './src/dao/product.dao';
import ConsumptionDao from "./src/dao/consumption.dao";

class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Chart maxIntake="6" currentIntake="2" dao={ConsumptionDao}></Chart>
        </View>
        <Button
          onPress={() => navigate('ProductList', { dao: ProductDao })}
          title="Voeg toe"          
        />        
      </View>
    );
  }
}

const SaltTracker = StackNavigator({
  Home: { screen: HomeScreen },
  ProductList: {screen: ProductList},
  AddConsumption: {screen: AddConsumption},
  AddProduct: {screen: AddProduct}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303030',
    alignSelf: 'stretch'
  }  
});

// AppRegistry.registerComponent('SaltTracker', () => SaltTracker);
AppRegistry.registerComponent('SaltTracker', () => SaltTracker);
