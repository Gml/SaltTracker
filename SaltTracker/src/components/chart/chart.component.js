import React, {Component} from 'react'
import {AppRegistry, View, Text, StyleSheet} from 'react-native'
import styles from './chart.style'
import ConsumptionDao from "../../dao/consumption.dao";

export default class Chart extends Component {
  
  constructor (props) {
    super(props);
    this.currentIntake = ConsumptionDao.getTotalIntake();
    this.intakePercentage = Math.round((this.currentIntake * 100) / this.props.maxIntake);
    this.barHeight = Math.round((this.intakePercentage * 396) / 100);    
  }

  render () {

   return (
      <View style={styles.container}>
        <Text style={styles.text}>Zout</Text>
        <Text style={styles.text}>100% - {this.props.maxIntake}gr</Text>
        <View style={styles.containerBar}>
          <View style={[styles.bar, {height: this.barHeight}]}>
            <Text>{this.intakePercentage}%</Text>
            <Text>{this.currentIntake}gr</Text>
          </View>
        </View>
      </View>      
   )
  }
}

AppRegistry.registerComponent('Chart', () => Chart);
