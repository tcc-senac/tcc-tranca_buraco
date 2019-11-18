import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import Home from "./pages/Home";
import RegrasJogo from "./pages/RegrasJogo";
import TelaJogo from "./pages/TelaJogo";

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    RegrasJogo: {
        screen: RegrasJogo
    },
    TelaJogo: {
        screen: TelaJogo
    }
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