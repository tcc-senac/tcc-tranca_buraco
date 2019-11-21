import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import Home from "./pages/Home";
import TelaJogo from "./pages/TelaJogo";
import RegrasJogo from "./pages/RegrasJogo";

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    TelaJogo: {
        screen: TelaJogo
    }, 
    RegrasJogo: {
        screen: RegrasJogo
    },
}, {
    defaultNavigationOptions:{
        headerStyle: {
            borderBottomWidth:0,
            elevation: 0,
            backgroundColor: 'darkred'
        },
        headerTintColor: 'white',
        headerLayoutPreset:'center',
    }
});
export default createAppContainer(AppNavigator);