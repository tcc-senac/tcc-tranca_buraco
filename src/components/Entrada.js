import React from 'react';
import {View, StyleSheet} from 'react-native';
import Numero from './Numero';

export default props => (
        <Numero style={styles.maximo} nomeBotao={props.nomeBotao} num={props.num} onChangeTextHandler={props.onChangeTextHandler} nome={props.nome} onClickHandler={props.onClickHandler} />
)


const styles = StyleSheet.create({
maximo: {
        height: 40,
        minWidth: 60,
        width: 80,
        backgroundColor: 'darkred',
        borderColor: '#999',
        borderWidth: 5,
}
});