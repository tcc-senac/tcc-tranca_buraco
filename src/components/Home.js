import React, {Component} from 'react';
import {Text, Button, View, StyleSheet } from 'react-native';

export default class Home extends Component{

    // Utilizado para criar os parâmetros de rotas.
    // É possível estilizar a barra de Menu.
    static navigationOptions = {
        title:'Buraco',
        headerStyle: {
          backgroundColor: 'darkblue',
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
        return (
          <View style={styles.container}>
            <View  style={styles.box}>
            <Button style={styles.bordaBotao} onPress={()=> {navigate('Tela1')}} title="Regras"/>
            </View>
           <View  style={styles.box}>
           <Button style={styles.bordaBotao} onPress={()=> {navigate('Tela2')}} title="Pontuação"/>
           </View>
           
          </View>
        );
      }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    padding: 20,
  },
  box:{
    marginTop: 20,
  },
  bordaBotao:{
    borderRadius: 40
  }
})