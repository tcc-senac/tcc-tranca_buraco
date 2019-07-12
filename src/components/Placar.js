import React, { Component } from 'react';
import { AppRegistry, View, TextInput } from 'react-native';

const UselessTextInput = props => {
        return (
            <TextInput
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable={true}
                maxLength={40}
                onChangeText={(placar1) => this.setState({ resultado1 })}
            >
                {resultado1.toString()}
            </TextInput>
        );
    }


export default props => {
    return (
        <View style={{
            backgroundColor: this.state.text,
            borderBottomColor: 'darkred',
            borderBottomWidth: 2
        }}
        >
            <UselessTextInput
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
            />
        </View>
    );

}

function placar1(pontos1) {
    if (resultado1 < maximo) {
        resultado1 = resultado1 + pontos1;
        resultado1 = resultado1.toString();
        { resultado1 }
    }
}

function placar2(pontos2) {
    if (resultado2 < maximo) {
        resultado2 = resultado2 + pontos2;
        resultado2 = resultado2.toString();
        { resultado2 }
    }
}