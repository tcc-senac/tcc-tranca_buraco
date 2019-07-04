import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import Maximo from './Maximo';
import Numero from './Numero';
import Numero1 from './Numero1';
import Caixinha from './Caixinha';
import Entrada from './Entrada';
import Entrada1 from './Entrada1';

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
                            {/* <TextInput
                                keyboardType={'numeric'}
                                value={props.num.toString()}
                                onChangeText={(text) => { props.onChangeTextHandler(text || 0) }}
                            /> */}
                            <Caixinha />
                        </View>
                        <Text style={estilo.texto}> X </Text>
                        <View style={estilo.box}>
                            <Text style={estilo.texto}> Elas </Text>
                            <Caixinha/>
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
      backgroundColor: 'darkred',
      borderColor: '#999',
      borderWidth: 5,
      margin: 80,
    },
    box1:{
      alignSelf: 'flex-end'
    },
    texto:{
      color: 'white',     
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