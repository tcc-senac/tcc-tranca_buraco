import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class Placar extends Component {

    constructor(props) {
        super(props);
        this.state = {valor1:0, valor2:0}
    }

    render() {
        return (
            <View>
                <Text style={estilo.cont}>
                    {valor1 = this.onChange.valor1},
        {valor2 = this.onChange.valor2},
        {this.onChange.valor1 = valor1},
          {this.onChange.valor2 = valor2},
        </Text>
                <TouchableOpacity style={estilo.botao} onPress={() => { this.onPress(acao) }}>
                </TouchableOpacity>
            </View>
        )
    };
}

let valor1 = 0;
let valor2 = 0;

const estilo = StyleSheet.create({
    botao: {
        padding: 20,
        backgroundColor: '#C0C0C0',
    },
    descricao: {
        textAlign: 'center',
        fontSize: 30,
        backgroundColor: '#DDD',
    },
    cont: {
        backgroundColor: '#DDD',
        textAlign: 'center',
        fontSize: 60,
        color: 'red',
    }
})
