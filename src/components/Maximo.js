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
      this.state = { 
        nomeBotao: props.nomeBotao,
        num: props.num,
        onChangeTextHandler: props.onChangeTextHandler 
      }
    }
     

    
    render() {
      return (
        <View>
          <Entrada nomeBotao={this.state.nomeBotao} num={this.state.num} onChangeTextHandler={this.onChangeTextHandler} nome="maximo"/>
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
