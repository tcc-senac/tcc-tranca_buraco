import React, { Component } from 'react';
import { StatusBar, Text, ScrollView, StyleSheet, View, Image } from 'react-native';
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
                <TextInput style={styles.definicao}>
                    Definições
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                •	Baixar um jogo – Um jogo é formado por 3 ou mais cartas do mesmo naipe, ordenadas em sequência numérica ou três ou mais cartas do mesmo valor, independente do naipe (trinca). No decorrer da partida podem-se acrescentar mais cartas ao jogo.
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                •	Comprar o lixo - Você só poderá comprar o lixo se a carta que estiver no topo do lixo puder ser utilizada em algum jogo já baixado ou se puder ser combinada com as cartas que você já possui na mão e formando assim um novo jogo, que deverá ser obrigatoriamente baixado.
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                •	3 de naipe preto (3 de espadas ♠ e 3 de paus ♣) - Não podem ser utilizados em jogos, ou seja, você não poderá formar nenhuma sequência utilizando estas cartas. Quando um 3 preto é jogado na lixeira, ele "tranca" o lixo, ou seja, impede que o próximo jogador compre o lixo, sendo obrigado a comprar uma carta do monte.
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                •	3 de naipe vermelho (3 de copas ♥ e 3 de ouros ♦) - Podem ser utilizados apenas se forem baixados sozinhos, não podendo ser utilizados em outros jogos. No final da partida, cada jogador ou dupla ganhará 100 pontos por 3 vermelho baixado, caso tenha feito alguma canastra (limpa ou suja), ou perderá 100 pontos por 3 vermelho baixado, caso não tenha feito canastra.
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                •	Curingas - Não há no Joker no jogo de Tranca. Isso quer dizer que apenas o "2" poderá ser utilizado como curinga, podendo substituir qualquer carta. Entretanto, como os "3" vermelhos e os "3" pretos não podem ser utilizados na formação de jogos, não é possível limpar uma canastra suja, no jogo de Tranca.
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                •	Morto - É o montante de 11 cartas que um jogador recebe quando acabam todas as cartas da mão. Se o jogo for de 4 jogadores, cada morto corresponde a uma dupla. Só pode pegar o morto, o primeiro jogador da dupla a acabar com as cartas da própria mão. Não é possível que a mesma dupla, ou o mesmo jogador, pegue os dois mortos. Caso as cartas do monte acabem, e haja algum morto na mesa, este será automaticamente utilizado como o monte.
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                •	Batida – É quando acabam as cartas de um jogador, sendo que este ou sua dupla já tenha pegado o morto. No caso de um jogo em que nenhum jogador tenha pegado o morto, só é possível bater quando os dois mortos virarem monte e as cartas da mão do jogador tenham acabado.
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                •	Batida Direta – É aquela em que o jogador acaba com as cartas da mão sem jogar nenhuma fora, ou seja, todas as cartas vão para jogos na mesa. Caso haja morto, o jogador irá pegá-lo e então continuará a jogar, sem comprar carta.
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                •	Batida Indireta – É aquela em que o jogador acaba com as cartas da mão após jogar a última fora. Caso haja morto, o jogador irá pegá-lo, mas só poderá jogar na próxima rodada.
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                •	Trinca - A trinca é formada por 3 ou mais cartas do mesmo valor, independente do naipe.
                </TextInput>
                <TextInput style={styles.formatoTexto} multiline={true}>
                •	Canastra - Jogo de sete cartas ou mais do mesmo valor de qualquer naipe, ou jogo de sete cartas em sequência, do mesmo naipe. Existem dois tipos de canastra:
                </TextInput>
                <Text style={{fontWeight:'bold'}}>
                o	Canastra limpa – Sem curinga
                </Text>
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
        borderWidth: 3,
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
        borderWidth: 3,
        margin: 10,
        marginTop: 20,
        fontWeight: 'bold',
    },
    definicao:{
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        fontSize: 20,
        color: 'darkred',
        fontWeight: 'bold',
        borderWidth: 3,
        margin: 10,
        marginTop: 20,
        fontWeight: 'bold',
    }
});