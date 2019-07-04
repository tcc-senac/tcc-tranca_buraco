import React from 'react';
import {TextInput, StyleSheet, Button, View, Text } from 'react-native';

export default props => (

    <View style={styles.container}>
        {/* <Text style={styles.pontuacao}>Digite a pontuação máxima desta partida:</Text> */}
        
    <TextInput 
        style={styles.numero} 
        keyboardType={'numeric'} 
        value={props.num.toString()}
        onChangeText={(text) => {props.onChangeTextHandler(text || 0)}} 
     />
     <Button color="darkred" title="Calcular Total"/>
     </View>
)

const styles = StyleSheet.create({
    numero:{
        width: 80,
        height: 50,
        fontSize: 20,
        borderWidth: 2,
        margin: 10,
    },
    container:{
        alignItems: 'center',
        padding: 20
    }
})