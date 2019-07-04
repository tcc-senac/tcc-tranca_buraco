import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import Maximo from './Maximo';
import Numero from './Numero';
import Caixinha from './Caixinha';
import Entrada from './Entrada';
import { ScrollView } from 'react-native-gesture-handler';

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
                <Text style={estilo.inicio}>Digite a pontuação máxima</Text>
                <Text style={estilo.inicio}>desta partida:</Text>
                <Maximo nomeBotao="Iniciar partida!"/>
                <View style={estilo.container}>
                    <View style={estilo.container2}>
                        <View style={estilo.box}>
                            <Text style={estilo.texto}> Nós </Text>
                <Text>{resultado = resultado.toString(resultado + numero)}</Text>
                <Text>{resultado.toString()}</Text>
                <Text>{resultado = resultado + numero}</Text>
                <Text>{resultado.toString()}</Text>
                <Text>{resultado.toString()}</Text>
                <Text>{resultado.toString()}</Text>
                <Text>{resultado.toString()}</Text>
                <Text>{numero}</Text>
                            <Caixinha nomeBotao="Calcular o total" />
                        </View>
                        <Text style={estilo.texto}> X </Text>
                        <View style={estilo.box}>
                            <Text style={estilo.texto}> Elas </Text>
                         <ScrollView 
                         style={{
                                 width: 300,
                                 height: 800,
                             }}>
                <Text>{resultado = resultado.toString(resultado + numero)}</Text>
                <Text>{resultado.toString()}</Text>
                <Text>{resultado = resultado + numero}</Text>
                <Text>{resultado.toString()}</Text>
                <Text>{resultado.toString()}</Text>
                <Text>{resultado.toString()}</Text>
                <Text>{resultado.toString()}</Text>
                <Text>{numero}</Text>
                             </ScrollView>   
                            <Caixinha nomeBotao="Calcular o total" />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

let numero = 10;
let resultado = 0;

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
        margin: 10
      },
      inicio:{
        color: 'darkred',     
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