import React, { useState, Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Entrada from './Entrada';
import Quem from './Quem';

export default props => {
  const placar1 = (pontos1) =>{
    if (resultado1 < maximo || resultado2 < maximo) {
      resultado1 = resultado1 + pontos1;
      total1 = resultado1.toString();
    }
  }

  return (
    <View>
      <View style={styles.box}>
        <View>
          <Quem jogador={props.jogador} jogadorHandler={props.jogadorHandler} jogadorValor={props.jogadorValor} />
        </View>
      </View>
      <View style={{ marginTop: 20, alignItems:'center' }}>
        <TextInput 
        value={props.placar} 
        multiline = {true}
        numberOfLines = {1} 
        />

      </ View>
      <View style={{ borderBottomWidth: 2 }} />

      <Entrada nomeBotao={props.nomeBotao} num={props.num} onChangeTextHandler={props.onChangeTextHandler} nome={props.nome} onClickHandler={props.onClickHandler} />
    </View>
  );
};




const styles = StyleSheet.create({
  box: {
    height: 50,
    minWidth: 60,
    width: 80,
    backgroundColor: 'darkred',
    borderColor: '#999',
    borderWidth: 5,
  }
});