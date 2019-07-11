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


let maximo = 0;
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

let resultado1 = 0;



function placar1(pontos1) {
    if (resultado1 < maximo) {
        resultado1 = resultado1 + pontos1;
        resultado1 = resultado1.toString();
        { resultado1 }
    }


// skip these lines if using Create React Native App
// AppRegistry.registerComponent(
//     'AwesomeProject',
//     () => UselessTextInputMultiline
// )
}
