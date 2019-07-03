import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import Maximo from './Maximo';
import Numero from './Numero';

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
                <Maximo/>
                <View style={estilo.container}>
                    <View style={estilo.container2}>
                        <View style={estilo.box}>
                            <Text style={estilo.texto}> Nós </Text>
                            <TextInput
                            style={estilo.bordaPontos}
                                multiline={true}
                                numberOfLines={4}>
                                </TextInput>
                        </View>
                        <Text style={estilo.texto}> X </Text>
                        <View style={estilo.box}>
                            <Text style={estilo.texto}> Elas </Text>
                            <TextInput
                            style={estilo.bordaPontos}
                                multiline={true}
                                numberOfLines={4}>
                                </TextInput>
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
      marginTop: 30,
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
      margin: 80,
    },
    box1:{
      alignSelf: 'flex-end'
    },
    texto:{
      color: 'black',     
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    bordaPontos:{
        borderWidth:2,
        marginTop: 30,
        height: 50,
        fontSize: 20
    }
  })