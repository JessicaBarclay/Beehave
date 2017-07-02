import React, { Component } from 'react';
import { StyleSheet,
        TouchableHighlight,
        View,
        Text,
        AlertIOS
} from 'react-native';
import GetGeoLocation from './GetGeoLocation'

var location = new GetGeoLocation();

export default class BeeAPI extends React.Component {

  GETbee = () => {
    fetch("https://bee-appy.herokuapp.com/bees", {
      method: "GET",
      headers: {'Content-Type': 'application/json'},
    })
    .then((response) => response.json())
  }

  POSTbee = (geoData) => {
    var longitude = geoData.longitude
    var latitude = geoData.latitude
    fetch("https://bee-appy.herokuapp.com/bees", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({latitude: latitude, longitude: longitude})
    })
    .then((response) => response.json())
    .then((responseData) => {
      AlertIOS.alert(
        "You spotted a bee!",
        "latitude: " + JSON.stringify(responseData.latitude) + "\nlongitude: " + JSON.stringify(responseData.longitude)
      )
    })
    .catch((error) => {
      console.log(error);
    })
    .done();
  }
  render() {
    return null
  }
}
