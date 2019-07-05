import React, { Component } from 'react';
import { StatusBar, Text, ScrollView, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class Tela1 extends Component {
    static navigationOptions = {
        title: 'REGRAS DO JOGO',
        headerStyle: {
            backgroundColor: 'darkred'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
    render() {

        return (
            <ScrollView>
                <TextInput style={styles.formato}>
                    Regras como jogar Tranca
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true} numberOfLines={4}>
                    Pode ser jogado com dois ou quatro jogadores.
                    No jogo com dois participantes, você jogará contra a única pessoa presente na mesa. A contagem de pontos é individual.
                    Quando quatro pessoas participam, duas duplas são formadas, e uma joga contra a outra. O seu parceiro de jogo será a pessoa que estiver posicionada exatamente acima de você na mesa de jogo, com o nome dentro de uma caixa da mesma cor que a sua.
                    A distribuição das cartas é feita de forma automática e aleatória pelo nosso sistema, não havendo a intervenção de nenhum jogador ou membro da equipe Jogatina.com neste processo.
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                    •  Jogadores: 2 ou 4
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                    •  Número de cartas: 108 (2 baralhos sem Joker)
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                    •  Distribuição: 11 cartas para cada participante e dois mortos com 11 cartas cada um
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                    •  Objetivo: O jogador ou a dupla que fizer o maior número de pontos, ganha a partida.
                </TextInput>
                <TextInput style={styles.convencao}>
                    Convenções
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                    •  Pode trinca (também chamada de "lavadeira")
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                    •  Não tem Joker (também chamado de "curingão")
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                    •  Tem morto
                    </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                    •  Pode bater com canastra suja
                    </TextInput>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    formato: {
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        fontSize: 20,
        color: 'darkred',
        fontWeight: 'bold',
        borderWidth: 2,
        margin: 10,
    },
    formatoTexto: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    convencao: {
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        fontSize: 20,
        color: 'darkred',
        fontWeight: 'bold',
        borderWidth: 2,
        margin: 10,
        marginTop: 20,
        fontWeight: 'bold',
    }
});