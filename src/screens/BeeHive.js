import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import style from '../styles/style.js';
import StackNavigator from 'react-navigation';
import MapView from 'react-native-maps';
import GetGeoLocation from '../components/GetGeoLocation';

export default class BeeHive extends React.Component {

  static navigationOptions = {
    title: 'BeeHive',
  };

  constructor(props) {
    super(props)

    this.state = {
      markers: [],
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
  }

  getLocation(lat, lon) {
    this.setState({
      region: {
        latitude: lat,
        longitude: lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    })
  }

  componentWillMount() {
    fetch("https://bee-appy.herokuapp.com/bees").then((res) => res.json()).then((res) => {
      this.setState({
        markers: res
      })
    });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        this.getLocation(lat,lon)
      },
    );
  }

  render() {
    return (
      <View style={style.viewStyle}>
        <MapView style={style.map}
          initialRegion={this.state.region}
          >
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={{latitude: marker.latitude,longitude: marker.longitude}}
              image={require('../img/bee_pin.png')}
            />
          ))}
        </MapView>
      </View>
    );
  }
}
