import React, { Component } from 'react';
import { Picker } from 'react-native';

const picker = (props) => 
{
const { selectedValue, onValueChange } = props;

return(
    <Picker
    style={{ 
        // borderColor: 'grey', 
        borderWidth: 4,
        backgroundColor: 'darkred', 
        color: 'white', 
    }}
    selectedValue={selectedValue}
    onValueChange={onValueChange}>
        <Picker.Item label="▼ definir jogador(es)" value="1" />
        <Picker.Item label="Nós" value="Nós" />
        <Picker.Item label="Elas" value="Elas" />
        <Picker.Item label="Eles" value="Eles" />
        <Picker.Item label="Eu" value="Eu" />
        <Picker.Item label="Ela" value="Ela" />
        <Picker.Item label="Ele" value="Ele" />
    </Picker>
)
}

export default picker;