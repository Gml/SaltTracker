import React, {Component} from "react";
import {AppRegistry, View, ListView, Text, Image, StyleSheet} from "react-native";

import styles from "./product-list.style"

export default class ProductList extends Component {

  constructor(props) {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.props = props;
    console.log('hey!');
    console.log(props);
    this.state = {
      dataSource: ds.cloneWithRows(props.dao.getProducts()),
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ListView style={{alignSelf: 'stretch'}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={styles.row}>
              <Image style={styles.image} source={{uri: rowData.imageUri}}/>
              <Text style={styles.title}>{rowData.title}</Text>
              <Text style={styles.salt}>{rowData.saltUnitsPer100Grams}</Text>
            </View>
          }
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('ProductList', () => ProductList);
