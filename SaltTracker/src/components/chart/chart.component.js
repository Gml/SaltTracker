import React, {Component} from 'react'
import {AppRegistry, View, Text, StyleSheet} from 'react-native'
import styles from './chart.style'

export default class Chart extends Component {
  
  constructor (props) {
    super(props);
    this.intakePercentage = Math.round((this.props.currentIntake * 100) / this.props.maxIntake);
    this.barHeight = Math.round((this.intakePercentage * 396) / 100);    
    styles.bar.height = this.barHeight;
  }

  render () {

   return (
      <View style={styles.container}>
        <Text style={styles.text}>Zout</Text>
        <Text style={styles.text}>100% - {this.props.maxIntake}gr</Text>        
        <View style={styles.containerBar}>
          <View style={styles.bar}>
            <Text>{this.intakePercentage}%</Text>
            <Text>{this.props.currentIntake}gr</Text>
          </View>
        </View>
      </View>      
   )
  }
}

AppRegistry.registerComponent('Chart', () => Chart);
