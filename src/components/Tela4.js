import React, {Component} from 'react';
import {StatusBar, Text, View} from 'react-native';

export default class Tela4 extends Component{
    static navigationOptions = {
        title:'Tela4',
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
                <Text>Tela4</Text>
            </View>
        )
    }
}