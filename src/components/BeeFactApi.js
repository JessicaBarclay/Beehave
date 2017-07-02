import React, { Component } from 'react';
import { Stylesheet,
      TouchableHighlight,
      View,
      Text,
      AlertIOS
} from 'react-native';

export default class BeeFact extends React.Component{

  getBeeFact = () => {
    fetch("https://bee-appy.herokuapp.com/bee_facts")
    .then((response) => response.json())
    .then((responseJson) => {
      AlertIOS.alert(
        "Bee fact:",
        JSON.stringify(responseJson.fact)
      )
    })
    .catch((error) => {
      console.log(error)
    })
    .done();
  }
}
