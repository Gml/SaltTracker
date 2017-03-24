import React, {Component} from 'react'
import {AppRegistry, View, Text, StyleSheet} from 'react-native'

export default class Chart extends Component {
  constructor () {
    super()

  }

  render () {

   return (
     <View style={{flex: 1, padding: 50, alignItems: 'center'}}>
       <Text style={styles.purple}>Zout</Text>
       <Text style={styles.purple}>100% - 6gr</Text>
         <View style={styles.bar1}><View style={styles.bar2}>
           <Text style={styles.purple}>20%</Text>
           <Text style={styles.purple}>1.5gr</Text>
         </View>
       </View>
     </View>
      // <View style={{flex: 1, padding: 50, alignItems: 'center'}}>
      //   <Text style={styles.purple}>Zout</Text>
      //   <Text style={styles.purple}>100% - 6gr</Text>
      //   <View style={{flex: 1, padding: 10, width: 100}}>
      //     <View style={styles.bar1}></View>
      //     <View style={styles.bar2}>
      //       <Text style={styles.purple}>20%</Text>
      //       <Text style={styles.purple}>1.5gr</Text>
      //     </View>
      //   </View>
      // </View>
   )
  }
}

// https://coolors.co/413c58-a3c4bc-bfd7b5-e7efc5-f2e7c9

const styles = StyleSheet.create({
  purple: {
    color: '#413C58',
  },
  bar1: {
    flex: 1,
    width: 100,
    flexDirection: 'column',
    backgroundColor: '#413C58',
    borderRadius: 10
  },
  bar2: {
    flex: 1,
    position: 'absolute',
    height: 100,
    backgroundColor: '#A3C4BC',
    alignItems: 'center',
    borderRadius: 10,
    right: 2,
    left: 2,
    bottom: 2
  }
});

AppRegistry.registerComponent('Chart', () => Chart);
