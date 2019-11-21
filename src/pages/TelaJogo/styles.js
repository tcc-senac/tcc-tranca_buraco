import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { grey } from 'ansi-colors';

const styles = StyleSheet.create({
    input: {
        marginVertical: 10,
        borderColor: 'black', 
        borderWidth: 1, 
        height: 40,
        padding: 0,
        width: 100,
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
    },
    container: {
        paddingHorizontal: 20
    },
    containerPontuacao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    containerJogador1: {
        width: '40%',
    },
    containerJogador2: {
        width: '40%'
    }
})

export default styles;