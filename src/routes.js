import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import Home from "./pages/Home";
import RegrasJogo from "./pages/RegrasJogo";
// import PontosTrio from "./pages/PontosTrio";
import TelaJogo from "./pages/TelaJogo";
import RegrasBuraco from "./pages/RegrasBuraco";



const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    TelaJogo: {
        screen: TelaJogo
    }, 
    // PontosTrio: {
    //     screen: PontosTrio
    // }, 
    RegrasJogo: {
        screen: RegrasJogo
    },
    RegrasBuraco: {
        screen: RegrasBuraco
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