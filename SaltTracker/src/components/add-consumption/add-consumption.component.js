import React, {Component} from "react";
import {AppRegistry, View, Text, TextInput, Button, Image, StyleSheet} from "react-native";
import styles from './add-consumption.style'
import {BlurView, VibrancyView} from "react-native-blur"
import ConsumptionDao from '../../dao/consumption.dao';
import Consumption from "../../models/consumption.model";


export default class AddConsumption extends Component {
  constructor(props) {
    super(props);
    const {params} = this.props.navigation.state;
    this.imageUri = params.imageUri;
    this.title = params.title;
    this.productId = params.id;
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Image style={styles.image} source={{uri: this.imageUri}}>
        <BlurView blurType="light" blurAmount={50} style={styles.container}>
          <Text style={styles.titleLabel}>{this.title}</Text>

          <Text style={styles.titleLabel}>Gram gegeten</Text>
          <TextInput
            placeholder='1.3'
            style={styles.title}
            onChangeText={(quantity) => this.setState({quantity})}
            value={this.state ? this.state.quantity : ''}
          />
          <Button title="Voeg toe"
                  onPress={() => {
                    ConsumptionDao.addConsumption(new Consumption(-1, this.productId, this.state.quantity, '01-01-2017'));
                    navigate('Home')
                  }}
          />

        </BlurView>
      </Image>
    )
  }
}

AppRegistry.registerComponent('AddConsumption', () => AddConsumption);