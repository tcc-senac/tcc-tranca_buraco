import React, { Component } from 'react';

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

export default class Pontuacao extends Component {

    constructor(props){
      super(props);
      this.state = {maximo: 0, resultado: 0, pontos: 0}
    }
     
    onPress = (acao) => {
        resultado == valor1 + valor2 ;
      }
    
    render() {
      return (
        <View>
   

        </View>
      )
    };
  }

let maximo = 2000;
let resultado = 0;


function partida(pontos = 0) {
    if (resultado < maximo) {
        resultado = resultado + pontos
    }
}
