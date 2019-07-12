import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Entrada from './Entrada';

export default props => (
  <View>
    <View style={estilo.box}>
      <Text style={estilo.texto}>{props.caixaTexto}</Text>
    </View>
    <Entrada nomeBotao={props.nomeBotao} num={props.num} onChangeTextHandler={props.onChangeTextHandler} nome={props.nome} />
  </View>
);

const estilo = StyleSheet.create({
  texto: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  box: {
    height: 50,
    minWidth: 100,
    backgroundColor: 'darkred',
    borderColor: '#999',
    borderWidth: 5,
  },
  // caixa: {
  //   width: (Dimensions.get('screen').width / 2)
  // }
});