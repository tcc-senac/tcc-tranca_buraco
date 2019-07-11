import React, { useState } from 'react';
import { TextInput, StyleSheet, Button, View, Text } from 'react-native';

export default props => {

    const [disabled, setDisabled] = useState(true);

    const desabilitarCampo = () =>{
        if(props.nome === 'maximo') {
            setDisabled(false);
        }
    }

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.numero}
                keyboardType={'numeric'}
                value={props.num}
                onChangeText={(text) => { props.onChangeTextHandler(text, props.nome) }}
            />
            <Button color="darkred" title={props.nomeBotao} />
        </View>
    )

}

const styles = StyleSheet.create({
    numero: {
        width: 80,
        height: 50,
        fontSize: 20,
        borderWidth: 2,
        margin: 10
    },
    pontuacao: {
        fontSize: 20,
        color: 'black'
    },
    container: {
        alignItems: 'center'
    }
})