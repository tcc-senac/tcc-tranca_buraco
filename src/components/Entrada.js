import React from 'react';
import {View, StyleSheet} from 'react-native';
import Numero from './Numero';

export default props => (
    <View style={styles.numeros}>
        <Numero nomeBotao={props.nomeBotao} num={props.maximo} onChangeTextHandler={props.onChangeTextHandler} nome='maximo' />
    </View>
)

const styles = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})