import React, {Component} from 'react';
import {StatusBar, Text, View} from 'react-native';

export default class Tela1 extends Component{
    static navigationOptions = {
        title:'Tela1',
        headerStyle: {
          backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight:'bold'
        }
    }
    render(){
        const {nome, idade} = this.props.navigation.getParam('dados');
        return(
            <View>
                <Text>Tela1</Text>
                <Text>Nome: {nome}</Text>
                <Text>Idade: {idade}</Text>
            </View>
        )
    }
}