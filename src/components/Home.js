import React, {Component} from 'react';
import {Text, Button, View, StyleSheet } from 'react-native';

export default class Home extends Component{

    // Utilizado para criar os parâmetros de rotas.
    // É possível estilizar a barra de Menu.
    static navigationOptions = {
        title:'                               Buraco',
        headerStyle: {
          backgroundColor: 'darkblue',
          borderRadius: 40,
          margin: 5
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight:'bold',
        }
    }
    render() {

        // Utiliza o "NAVIGATE" da propriedade "NAVIGATION".
        // É utilizada para navegação entre telas.
        // Basta informar o nome da rota e os dados a serem enviados.
        // EXEMPLO: "{navigate('Tela1', {dados: pessoa}".
        const {navigate} = this.props.navigation;
        const pessoa = {
            nome:'Gabriel Moura',
            idade: 18
        };
        return (
          <View style={styles.botaoTela1}>
            <Button style={styles.botaoEstilo} onPress={()=> {navigate('Tela1', {dados: pessoa})}} title="Regras"/>
            <Text/>
            <Text/>
            <Button onPress={()=> {navigate('Tela2')}} title="Pontuação"/>
          </View>
        );
      }
}

const styles = StyleSheet.create({
  botaoTela1:{
    paddingTop: 20
  },
  botaoEstilo:{
    margin:20
  }
})