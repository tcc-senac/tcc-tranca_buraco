import React from 'react';
import {View, StyleSheet} from 'react-native';
import Numero1 from './Numero1';

export default props => (
    <View style={styles.numeros}>
        <Numero1 num={props.maximo} onChangeTextHandler={props.onChangeTextHandler} nome='maximo' />
    </View>
)

const styles = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})