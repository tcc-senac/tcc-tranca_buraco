import React, {Component} from 'react';
import { Button, View } from 'react-native';

export default class Home extends Component{

    // Utilizado para criar os parâmetros de rotas.
    // É possível estilizar a barra de Menu.
    static navigationOptions = {
        title:'Home',
        headerStyle: {
          backgroundColor: 'darkblue'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight:'bold'
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
          <View>
            <Button onPress={()=> {navigate('Tela1', {dados: pessoa})}} title="Tela 1"/>
            <Button onPress={()=> {navigate('Tela2')}} title="Tela 2"/>
            <Button onPress={()=> {navigate('Tela3')}} title="Tela 3"/>
            <Button onPress={()=> {navigate('Tela4')}} title="Tela 4"/>
          </View>
        );
      }
}