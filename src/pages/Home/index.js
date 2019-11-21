import React, { Component } from 'react';
import { Text, Button, View, ScrollView, StyleSheet, Image } from 'react-native';

const IconeApp = require('../../img/IconeApp.png')

export default class Home extends Component {

  // Utilizado para criar os parâmetros de rotas.
  // É possível estilizar a barra de Menu.
  static navigationOptions = {
    title: ' ',
    headerStyle: {
      backgroundColor: 'darkred',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',    
      fontSize: 10,
    }
  }
  render() {

    // Utiliza o "NAVIGATE" da propriedade "NAVIGATION".
    // É utilizada para navegação entre telas.
    // Basta informar o nome da rota e os dados a serem enviados.
    // EXEMPLO: "{navigate('Tela1', {dados: pessoa}".
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
       <Image source={IconeApp} style={styles.imagem} />
       <View style={styles.box}>
          <Button style={styles.botao} color="darkred" onPress={() => { navigate('TelaJogo') }} title="MARCAR PONTOS" />
        </View>
        <View style={styles.box}>
          <Button style={styles.botao} color="darkred" onPress={() => { navigate('RegrasJogo') }} title="REGRAS TRANCA" />
        </View>
        
      </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 30,
  },
  box: {
    marginTop: 40,
    height: 30,
  },
  botao: {
    fontSize: 36,
    height: 60
  },
  imagem: {
    alignSelf: 'center',
}
})