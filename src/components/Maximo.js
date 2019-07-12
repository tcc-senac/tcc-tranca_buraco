import React from 'react';

import {
  View
} from 'react-native';

import Entrada from './Entrada';

export default props => {

  return (
    <View>
      <Entrada nomeBotao={props.nomeBotao} num={props.num} onChangeTextHandler={props.onChangeTextHandler} nome="maximo" />
    </View>
  )

}