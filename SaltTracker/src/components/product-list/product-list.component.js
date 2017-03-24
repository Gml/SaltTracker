import React, {Component} from "react";
import {AppRegistry, View, ListView, Text, StyleSheet} from "react-native";

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
      <View style={{flex: 1, padding: 50, alignItems: 'center'}}>
        <Text style={styles.purple}>{this.props.aap}</Text>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={styles.row}>
              <Text style={styles.image}>{rowData.picture}</Text>
              <Text style={styles.title}>{rowData.title}</Text>
              <Text style={styles.salt}>{rowData.saltUnitsPer100Grams}</Text>
            </View>
          }
        />
      </View>
    )
  }
}

// https://coolors.co/413c58-a3c4bc-bfd7b5-e7efc5-f2e7c9

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#413C58',
    padding: 5,
    margin: 1
  },
  image: {
    flex: 1,
    width: 50
  },
  title: {
    flex: 1,
  },
  salt: {
    flex: 1,
  }
});

AppRegistry.registerComponent('ProductList', () => ProductList);
