import React from 'react';
import Numero from './Numero';

export default props => (
    <Numero nomeBotao={props.nomeBotao} num={props.num} onChangeTextHandler={props.onChangeTextHandler} nome={props.nome} />
)