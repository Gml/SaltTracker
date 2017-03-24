import React, {Component} from 'react'
import {AppRegistry, View, Text, StyleSheet} from 'react-native'

export default class Chart extends Component {
  constructor (props) {
    super(props);
    this.intakePercentage = Math.round((this.props.currentIntake * 100) / this.props.maxIntake);
    this.barHeight = Math.round((this.intakePercentage * 396) / 100);
    this.barStyle = StyleSheet.create({
      bar: {    
        position: 'absolute',    
        backgroundColor: '#A3C4BC',
        alignItems: 'center',
        borderRadius: 8,    
        right: 2,
        left: 2,
        bottom: 2,
        height: this.barHeight
      }
    })
  }

  render () {

   return (
      <View style={styles.container}>
        <Text>Zout</Text>
        <Text>100% - {this.props.maxIntake}gr</Text>
        
        <View style={styles.containerBar}>
          <View style={this.barStyle.bar}>
            <Text>{this.intakePercentage}%</Text>
            <Text>{this.props.currentIntake}gr</Text>
          </View>
        </View>
      </View>      
   )
  }
}

// https://coolors.co/413c58-a3c4bc-bfd7b5-e7efc5-f2e7c9

const styles = StyleSheet.create({
  container: {    
    position: 'absolute',
    width: 100,
    height: 500
  },  
  containerBar: {
    width: 100,
    height: 400,
    flexDirection: 'column',
    backgroundColor: '#413C58',
    borderRadius: 10
  }  
});

AppRegistry.registerComponent('Chart', () => Chart);
