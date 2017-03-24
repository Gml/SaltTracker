import React, {Component} from "react";
import {
  AppRegistry, 
  View, 
  ListView, 
  Text, 
  Image, 
  StyleSheet, 
  Button,
  TouchableHighlight
} from "react-native";

import styles from "./product-list.style"

export default class ProductList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const { params } = this.props.navigation.state;
    
    this.state = {
      dataSource: ds.cloneWithRows(params.dao.getProducts()),
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.wrapper}>
        <ListView style={{alignSelf: 'stretch'}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableHighlight onPress={() => navigate('Consumption', {image: rowData.imageUri})}>
              <View style={styles.row} >
                <Image style={styles.image} source={{uri: rowData.imageUri}}/>
                <Text style={styles.title}>{rowData.title}</Text>
                <Text style={styles.salt}>{rowData.saltUnitsPer100Grams}</Text>                  
              </View>
            </TouchableHighlight>
          }
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('ProductList', () => ProductList);
