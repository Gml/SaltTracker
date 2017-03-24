import React, {Component} from "react";
import {AppRegistry, View, Text, Image, StyleSheet} from "react-native";

export default class Product extends Component {
  
  render() {    
    return (
      <Text>Product</Text>
    )
  }
}

AppRegistry.registerComponent('Product', () => Product);