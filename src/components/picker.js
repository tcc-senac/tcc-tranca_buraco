import React, { Component } from 'react';
import { Picker } from 'react-native';

const picker = (props) => 
{
const { selectedValue, onValueChange } = props;

return(
    <Picker
    style={{ 
        borderColor: 'grey', 
        borderWidth: 4,
        backgroundColor: 'darkred', 
        color: 'white', 
    }}
    selectedValue={selectedValue}
    onValueChange={onValueChange}>
        <Picker.Item label="▼ definir jogador(es)" value="" />
        <Picker.Item label="Eu" value="Eu" />
        <Picker.Item label="Nós" value="Nos" />
        <Picker.Item label="Ela" value="Ela" />
        <Picker.Item label="Elas" value="Elas" />
        <Picker.Item label="Ele" value="Ele" />
        <Picker.Item label="Eles" value="Eles" />
    </Picker>
)
}

export default picker;