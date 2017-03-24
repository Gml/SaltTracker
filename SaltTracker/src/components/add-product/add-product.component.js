import React, {Component} from "react";
import {AppRegistry, View, Text, TextInput, Image, StyleSheet, Button} from "react-native";
import {BlurView, VibrancyView} from "react-native-blur"
import ProductDao from "../../dao/product.dao";
import Product from "../../models/product.model";

export default class AddProduct extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Image style={styles.image}
             source={{uri: 'https://www.ah.nl.kpnis.nl/static/product/AHI_434d50313935363437_1_LowRes_JPG.JPG'}}>
        <BlurView blurType="light" blurAmount={50} style={styles.container}>
          <Text style={styles.titleLabel}>Productnaam</Text>
          <TextInput
            placeholder='Productnaam'
            style={styles.title}
            onChangeText={(title) => this.setState({title})}
            value={this.state ? this.state.title : ''}
          />

          <Text style={styles.titleLabel}>Zout</Text>
          <TextInput
            placeholder='1.3'
            style={styles.title}
            onChangeText={(salt) => this.setState({salt})}
            value={this.state ? this.state.salt : ''}
          />
          <Button title="Voeg toe"
                  onPress={() => {
                    ProductDao.addProduct(new Product(-1, this.state.title, 'imageurlshould be here', this.state.salt));
                    navigate('ProductList', {dao: ProductDao})
                  }}
          />
        </BlurView>
      </Image>
    )
  }
}

AppRegistry.registerComponent('AddProduct', () => AddProduct);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    padding: 10
  },
  container: {
    padding: 10,
    borderRadius: 8
  },
  title: {
    height: 40,
    // borderColor: '#007aff',
    borderColor: '#303030',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10
  },
  titleLabel: {
    fontSize: 16,
    backgroundColor: 'transparent'
  }
});