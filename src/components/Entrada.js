import React from 'react';
import {View, StyleSheet} from 'react-native';
import Numero from './Numero';

export default props => (
    <View style={styles.numeros}>
        <Numero nomeBotao={props.nomeBotao} num={props.num} onChangeTextHandler={props.onChangeTextHandler} nome={props.nome} />
    </View>
)

const styles = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})