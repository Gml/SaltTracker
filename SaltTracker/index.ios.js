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

import Chart from './src/components/chart/chart.component'
import ProductList from './src/components/product-list/product-list.component'
import ProductDao from './src/dao/product.dao'

class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Chart maxIntake="6" currentIntake="6"></Chart>
        </View>
        <Button
          onPress={() => navigate('ProductList', {dao: ProductDao })}
          title="Tomaat"
        />


        {/*<View style={styles.container}>
          <ProductList aap="joehoe" aapjes={aapjes} dao={ProductDao}></ProductList>
        </View>*/}
      </View>
    );
  }
}

const SaltTracker = StackNavigator({
  Home: { screen: HomeScreen },
  ProductList: {screen: ProductList}  
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

AppRegistry.registerComponent('SaltTracker', () => SaltTracker);
