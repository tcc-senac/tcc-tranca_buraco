import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
// import {Tela1, Tela2, Tela3, Tela4, Home} from '../components';

// Imports dos componentes que representam as telas.
import Tela1 from '../components/Tela1';
import Tela2 from '../components/Tela2';
import Home from '../components/Home';

// Cria um container com todas as rotas.
const AppNavigator = createAppContainer(
    createStackNavigator({
        Home:{
            screen: Home
        },
        Tela1:{
            screen: Tela1
        },
        Tela2:{
            screen: Tela2,
            navigationOptions: {
                title: 'PONTOS',
                headerStyle: {
                    backgroundColor: 'darkred'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }
        }
    }, {headerLayoutPreset:'center'})
)

export default AppNavigator;