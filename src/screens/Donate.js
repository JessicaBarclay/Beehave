import React from 'react';
import {
  View,
  Linking,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import BeeButton from '../components/buttons/BeeButton';
import BeeFactButton from '../components/buttons/BeeFactButton';
import style from '../styles/style.js';
import StackNavigator from 'react-navigation';

export default class Donate extends React.Component {
  static navigationOptions = {
    title: 'Bee Informed',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={style.viewStyle}>
        <View>
          <TouchableHighlight
            onPress={() => Linking.openURL('https://bumblebeeconservation.org/')}
>
            <Image
              style={style.donateImageButtonStyle1}
              source={require('../img/fruit/avocado.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.planetbee.org/?gclid=Cj0KEQjwp83KBRC2kev0tZzExLkBEiQAYxYXOgqauFbe6WgszbJRAfi-jP1atAuoRLGGTaaBjxlPMSUaAncB8P8HAQ')}>
            <Image
              style={style.donateImageButtonStyle2}
              source={require('../img/fruit/blueberries.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.buglife.org.uk/adopt-shrill-carder-bee?gclid=Cj0KEQjwp83KBRC2kev0tZzExLkBEiQAYxYXOlQPJExuKhmXzG2o1_K-Jf4FYYnU2GQc0xTnpAfPlwkaAsa58P8HAQ')}>
            <Image
              style={style.donateImageButtonStyle3}
              source={require('../img/fruit/pear.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.oxfam.org.uk/shop/oxfam-unwrapped/gardeners/honey-bees-ou1004ml')}>
            <Image
              style={style.donateImageButtonStyle4}
              source={require('../img/fruit/pineapple.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.bbka.org.uk/')}>
            <Image
              style={style.donateImageButtonStyle5}
              source={require('../img/fruit/watermelon.png')}
            />
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          onPress={() => navigate('Home')}
          underlayColor="#A5DBEB"
          style={style.donateButton}>
          <Image
            style={style.imageButtonStyle}
            source={require('../img/beehive.png')}
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
