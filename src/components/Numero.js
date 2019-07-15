import React, { useState } from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';

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
                style={styles.inputStyle}
                keyboardType={'numeric'}
                onChangeText={(text) => props.onChangeTextHandler(text || 0, props.nome)}
                value={props.num}
            />
            <Button color="darkred" title={props.nomeBotao} onPress={()=> {props.onClickHandler(props.nome)}} />
        </View>
    )

}
const styles = StyleSheet.create({
    inputStyle: {
        width: 80,
        height: 50,
        fontSize: 20,
        borderWidth: 2,
        margin: 10, 

    },
    pontuacao: {
        fontSize: 20,
        color: 'black'
    },
    container: {
        alignItems: 'center'
    }
})