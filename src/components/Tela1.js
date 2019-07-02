import React, {Component} from 'react';
import {StatusBar, Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Tela1 extends Component{
    static navigationOptions = {
        title:'REGRAS',
        headerStyle: {
          backgroundColor: 'darkblue'
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
               <TextInput
               multiline={true}
               numberOfLines={4}>
               TextInputtem por padrão uma borda na parte inferior de sua visualização. Essa borda tem seu preenchimento definido pela imagem de segundo plano fornecida pelo sistema e não pode ser alterada. As soluções para evitar isso são ou não definir a altura explicitamente, caso em que o sistema se encarregará de exibir a borda na posição correta ou de não exibir a borda configurando- underlineColorAndroida como transparente.

Observe que, no Android, a seleção de texto na entrada pode alterar o windowSoftInputModeparâmetro de atividade do aplicativo para adjustResize. Isso pode causar problemas com os componentes que têm posição: 'absoluto' enquanto o teclado está ativo. Para evitar esse comportamento, especifique windowSoftInputModeem AndroidManifest.xml ( https://developer.android.com/guide/topics/manifest/activity-element.html ) ou controle esse parâmetro programaticamente com código nativo.


               </TextInput>
              
    
            </View>
        )
    }
}