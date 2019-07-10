import React, { Component, useState } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';
import Entrada from './Entrada';

export default class Maximo extends Component {

    constructor(props){
      super(props);
      this.state = {maximo: 0, resultado1: 0, resultado2: 0, pontos1: 0, pontos2:0, nomeBotao: props.nomeBotao }
    }
     
      onChangeTextHandler = (text) => {
        this.setState({
          maximo: parseInt(text)
        })
      }

    
    render() {
      return (
        <View>
          <Entrada nomeBotao={this.state.nomeBotao} maximo={this.state.maximo} onChangeTextHandler={this.onChangeTextHandler}/>
        </View>
      )
    };
   

  }

// let resultado1 = 0;
// // const [maximo, setMaximo] = useState(0);

// function partida(pontos1 = 0) {
//     if (resultado1 < maximo) {
//         resultado1 = resultado1 + pontos1
//     }
// }

const styles = StyleSheet.create({
  numero:{
      width: 140,
      height: 80,
      fontSize: 20,
      borderWidth: 1,
  }
})
