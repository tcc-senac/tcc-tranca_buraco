import React, {useState} from 'react';
import { Picker, StyleSheet } from 'react-native';

export default props => {
   
    return (
        <Picker 
            style={styles.texto}
            selectedValue={props.jogadorValor}
            onValueChange={(jogador) => {props.jogadorHandler(props.jogador, jogador)}}>
        <Picker.Item label='Nós' value={0} />
        <Picker.Item label='Eu' value={1} />
        <Picker.Item label='Ela' value={2} />
        <Picker.Item label='Elas' value={3} />
        <Picker.Item label='Ele' value={4} />
        <Picker.Item label='Eles' value={5} />
       </Picker>
)
}

const styles = StyleSheet.create({
    texto: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    }
});