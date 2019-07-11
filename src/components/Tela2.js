import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import Maximo from './Maximo';
import Caixinha from './Caixinha';
import { ScrollView } from 'react-native-gesture-handler';
import Placar from './Placar';
import Entrada from './Entrada';

export default props => {
  const [maximo, setMaximo] = useState(0);
  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [pontos1, setPontos1] = useState(0);
  const [pontos2, setPontos2] = useState(0);

  const onChangeTextHandler = (text, nomeCampo) => {
    if (nomeCampo === 'maximo') {
      console.log(text, nomeCampo)
      setMaximo(parseInt(text));
    } if (nomeCampo === 'pontos1') {
      console.log(text, nomeCampo)
      setPontos1(parseInt(text))
    } if (nomeCampo === 'pontos2') {
      console.log(text, nomeCampo)
      setPontos2(parseInt(text))
    }
  }

  return (

    <View>
      <Text style={estilo.inicio}>Digite a pontuação máxima</Text>
      <Text style={estilo.inicio}>desta partida:</Text>
      <Maximo nomeBotao="Iniciar partida!" num={maximo.toString()} onChangeTextHandler={onChangeTextHandler} />
      <View style={estilo.container}>
        <View style={estilo.container2}>
          <View style={estilo.box}>
            <Text style={estilo.texto}> Nós </Text>
            <View>
              {/* <Placar /> */}
            </View>
            <Caixinha nomeBotao="Calcular o total" num={pontos1.toString()} onChangeTextHandler={onChangeTextHandler} nome='pontos1'/>
          </View>
          <Text style={estilo.texto}> X </Text>
          <View style={estilo.box}>
            <Text style={estilo.texto}> Elas </Text>
            <View>
              {/* <Placar /> */}
            </View>
            <Caixinha nomeBotao="Calcular o total" num={pontos2.toString()} onChangeTextHandler={onChangeTextHandler} nome='pontos2' />
          </View>
        </View>
      </View>
    </View>
  )
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'black',
    alignContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
  },
  container2: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    height: 50,
    minWidth: 100,
    backgroundColor: 'darkred',
    borderColor: '#999',
    borderWidth: 5,
    margin: 80,
  },
  box1: {
    alignSelf: 'flex-end'
  },
  texto: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  inicio: {
    color: 'darkred',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bordaPontos: {
    borderWidth: 2,
    marginTop: 30,
    height: 50,
    fontSize: 20
  }
})