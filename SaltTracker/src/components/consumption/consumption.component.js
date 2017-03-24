import React, {Component} from "react";
import {AppRegistry, View, Text, Image, StyleSheet} from "react-native";
import styles from './consumption.style'
import { BlurView, VibrancyView } from "react-native-blur"

export default class Consumption extends Component {
  constructor(props) {
    super(props)
    const { params } = this.props.navigation.state;
    this.image = params.image;    
  }

  render() {    
    return (
      <Image style={styles.image} source={{uri: this.image}}>
        <BlurView blurType="light" blurAmount={50} style={styles.blur}>
          <Text>TOMAAT</Text>
        </BlurView>
      </Image>
    )
  }
}

AppRegistry.registerComponent('Consumption', () => Consumption);