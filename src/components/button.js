import React, { Component } from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';

const button = (props) => 
{
    const { txt, onPress } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                height: 50,
                padding: 10,
                marginVertical: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'darkred',
                borderColor: 'grey',
                borderWidth: 4,
            }}
        >
            <Text style={{
                color: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                fontSize: 16,
            }}>{txt}</Text>
        </TouchableOpacity>
    )
}


export default button;