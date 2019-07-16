import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import Maximo from './Maximo';
import Caixinha from './Caixinha';
import { ScrollView } from 'react-native-gesture-handler';
import Numero from './Numero';
import Entrada from './Entrada';
import Quem from './Quem';


export default props => {
  const [maximo, setMaximo] = useState(0);
  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [pontos1, setPontos1] = useState(0);
  const [pontos2, setPontos2] = useState(0);

  const [jogador, setJogador] = useState([0,0]);

  const [placar1, setPlacar1] = useState('0');
  const [placar2, setPlacar2] = useState('0');

  const onChangeTextHandler = (text, nomeCampo) => {
    if (nomeCampo === 'maximo') {
      setMaximo(parseInt(text));
    } if (nomeCampo === 'pontos1') {
      setPontos1(parseInt(text));
    } if (nomeCampo === 'pontos2') {
      setPontos2(parseInt(text))
    }
  }

  const jogadores = (nomeCampo, value) => {
    let escolha = jogador;
    if(nomeCampo === 'jogador1') {
      setJogador(escolha[0]= value);
    } else if(nomeCampo === 'jogador2') {
      setJogador(escolha[1]= value);
    }


  }
  const onClickHandler = (nome) => {
      if(nome=== 'pontos1') {
      const conta = resultado1 + pontos1;
      const concatenar = `${placar1} \n ${pontos1} \n ---- \n ${conta}`;
      setResultado1(conta);
      setPlacar1(concatenar);
    } else if(nome === 'pontos2') {
      const conta = resultado2 + pontos2;
      const concatenar = `${placar2} \n ${pontos2} \n ---- \n ${conta}`;
      setResultado2(conta);
      setPlacar2(concatenar);
    // } else if (resultado1 > resultado2){
    //   // alert{`'Parabéns!'  'ganhou!'` }
    // } else {
    //   // {`'Parabéns!'  'ganhou!'` }
    // }
    }
  }

  return (
    <ScrollView>
    <View style={estilo.conteudo}>
      <Text style={estilo.inicio}>Digite a pontuação máxima</Text>
      <Text style={estilo.inicio}>desta partida:</Text>
      <Maximo nomeBotao="Iniciar partida!" num={maximo.toString()} onChangeTextHandler={onChangeTextHandler} onClickHandler={onClickHandler} />
      <View style={estilo.caixaContainer}>
        <View>
          <Caixinha jogador='jogador1' jogadorHandler={jogadores} jogadorValor={jogador[0]} nomeBotao="Calcular o total" num={pontos1.toString()} onChangeTextHandler={onChangeTextHandler} nome='pontos1' placar={placar1} onClickHandler={onClickHandler} />

        </View>
        <View style={{ alignSelf: 'center' }}>
          <Text style={estilo.texto}>X</Text>
        </View>

        <View>
          <Caixinha jogador='jogador2' jogadorHandler={jogadores} jogadorValor={jogador[1]} nomeBotao="Calcular o total" num={pontos2.toString()} onChangeTextHandler={onChangeTextHandler} nome='pontos2' placar={placar2} onClickHandler={onClickHandler} />

        </View> 
      </View>
      <View style={estilo.botaoContainer}>
      <Button color="darkred" title='Nova Partida' onChangeTextHandler={onChangeTextHandler} />
      </View>
      
    </View>
    </ScrollView>
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
  botaoContainer: {
    margin: 20,
    marginLeft: 120,
    marginRight: 120,
    
  }
})