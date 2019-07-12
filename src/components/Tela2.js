import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import Maximo from './Maximo';
import Caixinha from './Caixinha';
import { ScrollView } from 'react-native-gesture-handler';
import Placar from './Placar';
import Numero from './Numero';
import Entrada from './Entrada';

export default props => {
  const [maximo, setMaximo] = useState(0);
  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [pontos1, setPontos1] = useState(0);
  const [pontos2, setPontos2] = useState(0);

  const onChangeTextHandler = (text, nomeCampo) => {
    if (nomeCampo === 'maximo') {
      setMaximo(parseInt(text));
    } if (nomeCampo === 'pontos1') {
      setPontos1(parseInt(text))
    } if (nomeCampo === 'pontos2') {
      setPontos2(parseInt(text))
    }
  }

  return (
    <View style={estilo.conteudo}>
      <Text style={estilo.inicio}>Digite a pontuação máxima</Text>
      <Text style={estilo.inicio}>desta partida:</Text>
      <Maximo nomeBotao="Iniciar partida!" num={maximo.toString()} onChangeTextHandler={onChangeTextHandler} />
      <View style={estilo.caixaContainer}>
        <View>
          <Caixinha nomeBotao="Calcular o total" num={pontos1.toString()} onChangeTextHandler={onChangeTextHandler} nome='pontos1' caixaTexto="Nós" />
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={estilo.texto}>X</Text>
        </View>
        <View>
          <Caixinha nomeBotao="Calcular o total" num={pontos2.toString()} onChangeTextHandler={onChangeTextHandler} nome='pontos2' caixaTexto="Elas" />
        </View>
      </View>
    </View>

  )
}

const estilo = StyleSheet.create({
  conteudo: {
    flex: 1,   
  },
  box: {
    height: 100,
    width:100
  },
  caixaContainer: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
    
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
  },
  texto: {
    color: 'darkred',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
})