import React, { Component } from 'react';

// Este import "AppNavigator" é para Navegação de telas (ROTAS).
import AppNavigator from './routes/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}