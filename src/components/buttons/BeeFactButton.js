import React, { Component } from 'react';
import {
  Image,
  Stylesheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import BeeFact from '../../components/BeeFactApi';
import style from '../../styles/style.js';

const beeFact = new BeeFact();

export default class BeeFactButton extends React.Component {
  render() {
    return(
      <View>
        <TouchableHighlight
          underlayColor="#A5DBEB"
          onPress = {beeFact.getBeeFact}>
          <Image
            style={style.imageButtonStyle}
            source={require('../../img/flower.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
