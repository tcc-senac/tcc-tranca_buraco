import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import Pontuacao from './Pontuacao';

export default class Tela2 extends Component {
    static navigationOptions = {
        title: 'Pontuação',
        headerStyle: {
            backgroundColor: 'darkred',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
    render() {
        return (
            <View>
                <View style={estilo.container}>
                    <View style={estilo.container2}>
                        <View style={estilo.box}>
                            <Text style={estilo.texto}> Nós </Text>
                        </View>
                        <Text style={estilo.texto}> X </Text>
                        <View style={estilo.box}>
                            <Text style={estilo.texto}> Elas </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    container:{
      flex: 1,
      flexWrap:'wrap',
      backgroundColor: 'black',
      alignContent: 'flex-start',
      alignItems: 'center',
      marginTop:150,
    },  container1:{
  
    }, 
    container2:{
      flexDirection: 'row', 
      alignContent: 'flex-start',
      alignItems: 'center',
    }, 
    box:{
      flex: 1,
      height: 50,
      minWidth: 100,
      backgroundColor: '#666',
      borderColor: '#999',
      borderWidth: 5,
      margin: 10,
    },
    box1:{
      alignSelf: 'flex-end'
    },
    texto:{
      color: 'black',     
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    }
  })