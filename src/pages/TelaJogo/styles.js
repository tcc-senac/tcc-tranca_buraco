import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        marginVertical: 10,
        borderColor: 'black', 
        borderWidth: 1, 
        height: 45,
        width: 100,
        color: 'black',
        alignSelf: 'center'
    },
    container: {
        paddingHorizontal: 20
    },
    containerPontuacao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    containerJogador1: {
        width: '40%',
    },
    containerJogador2: {
        width: '40%'
    }
})

export default styles;