import React, {Component} from 'react';
import {StatusBar, Text, View} from 'react-native';

export default class Tela2 extends Component{
    static navigationOptions = {
        title:'Tela2',
        headerStyle: {
          backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight:'bold'
        }
    }
    render(){
        return(
            <View>
                <Text>Tela2</Text>
            </View>
        )
    }
}