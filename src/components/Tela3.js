import React, {Component} from 'react';
import {StatusBar, Text, View} from 'react-native';

export default class Tela3 extends Component{
    static navigationOptions = {
        title:'Tela3',
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
                <Text>Tela3</Text>
            </View>
        )
    }
}