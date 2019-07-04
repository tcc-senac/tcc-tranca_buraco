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
      this.state = {maximo: 0, resultado: 0, pontos: 0, nomeBotao: props.nomeBotao }
    }
     
    onPress = (nomeBotao) => {
        resultado == resultado + pontos ;
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

let resultado = 0;
// const [maximo, setMaximo] = useState(0);

function partida(pontos = 0) {
    if (resultado < maximo) {
        resultado = resultado + pontos
    }
}

const styles = StyleSheet.create({
  numero:{
      width: 140,
      height: 80,
      fontSize: 20,
      borderWidth: 1,
  }
})
