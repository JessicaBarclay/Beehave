import React from 'react';
import BeeButton from '../components/buttons/BeeButton';
import BeeFactButton from '../components/buttons/BeeFactButton';
import GetGeoLocation from '../components/GetGeoLocation';
import Donate from './Donate';
import style from '../styles/style';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'BeeAppy',
  }
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={style.viewStyle}>
        <Image
          style={style.compassButton}
          source={require('../img/compass.png')}
        />
        <BeeButton />
          <TouchableHighlight
            onPress={() => navigate('Donate')}
            underlayColor="#A5DBEB"
            style={style.donateButton}>
            <Image
              style={style.imageButtonStyle}
              source={require('../img/honey.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate('BeeHive')}
            underlayColor="#A5DBEB"
            style={style.beehiveButton}>
            <Image
              style={style.imageButtonStyle}
              source={require('../img/earth-globe.png')}
            />
          </TouchableHighlight>
        <View style={style.beeFactButton}>
          <BeeFactButton/>
        </View>
      </View>
    );
  }
}
