import React, { Component } from 'react';
import { StatusBar, Text, ScrollView, StyleSheet, View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';

const limpa = require('../../img/canastra_limpa.png')
const suja = require('../../img/canastra_suja.png')
const pontuacao = require('../../img/pontuacao.png')
const tranca = require('../../img/IconeTranca.png')
const curinga = require('../../img/curinga.png')
const seguida = require('../../img/ImgSeguidaLimpa.png')
const trinca = require('../../img/ImgTrinca.png')
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
const V = (props) => <Text style={{color: 'red'}}> {props.children}</Text>

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
            <ScrollView >
                <Image source={tranca} style={styles.imagem} />
                <TextInput 
                    editable={false}  
                    style={styles.formatoTitulo} 
                    multiline={true}>
                        Jogadores
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    - <B>2 ou 3 participantes:</B> cada um por si, não há parceria.
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    - <B>4 participantes:</B> duas duplas, parceiros(as) sentados(as) em posições alternadas.
                </TextInput>
                <TextInput 
                    editable={false}  
                    style={styles.formatoTitulo} 
                    multiline={true}>
                    Cartas
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    Dois baralhos com 52 cartas cada. Dois sets de cartas de A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K de cada naipe.
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    Há quatro naipes no baralho: 
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    <V>♥ copas</V>
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    ♠ espadas
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    <V>♦ ouros</V>
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    ♣ paus
                </TextInput>
                <TextInput 
                    editable={false}  
                    style={styles.formatoTitulo} 
                    multiline={true}>
                    Objetivo 
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    Fazer mais pontos. No início é definida a quantidade de pontos daquela partida, por exemplo 2000 (dois mil) pontos. A primeira pessoa, ou dupla, que fizer(em) a quantidade de pontos estipulada é que ganha.
                </TextInput>
                <TextInput 
                    editable={false}  
                    style={styles.formatoTitulo} 
                    multiline={true}>
                    Definições
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                   <B>3 de naipe preto (3 de espadas e 3 de paus):</B> Não podem ser utilizados em nenhum jogo. Quando um 3 preto é jogado no LIXO, ele o TRANCA, ou seja, impede que o próximo jogador compre o LIXO, sendo obrigado a comprar uma carta do MONTE.
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    <B> <V>3</V> de <V>naipe vermelho </V>(<V>3 de copas</V> e <V>3 de ouros</V>):</B> Devem ser baixados sozinhos na mesa e valem 100 pontos positivos se o jogador, ou dupla, fizer pelo menos uma CANASTRA LIMPA ou SUJA. Se não houver nenhuma canastra os 3s valem 100 pontos negativos na contagem dos pontos daquela mão.
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    <B>Jokers:</B> Nenhum dos 4 são utilizados na Tranca. 
                </TextInput>
                <Image source={curinga} style={styles.imagem} />
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    <B>Curingas (<V>2 de copas</V>, 2 de espadas, <V>2 de ouros</V>, e 2 de paus):</B> O número dois é utilizado como curinga, de qualquer naipe, podendo substituir qualquer carta. O jogo quando é baixado com um curinga é chamado de “sujo”. Na Tranca o jogo sujo permanece sujo até o final. Não há nenhuma situação em que a carta que foi baixada na mesa volte para a mão de nenhum dos jogadores. 
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    <B>Canastras:</B> Quando o jogo completa sete cartas, ou mais, é chamado de canastra. Se não tiver curinga é uma “canastra limpa”: 
                </TextInput>
                <Image source={limpa} style={styles.imagem} />
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    Senão é “canastra suja”: 
                </TextInput>
                <Image source={suja} style={styles.imagem} />
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    <B>Lixo:</B> Ao final de cada jogada o jogador tem que descartar uma carta. Estas cartas são empilhadas com a face para cima, formando o LIXO, que fica na frente do “monte de compra”. 
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    <B>Monte:</B> Depois de retirar os vivos e os mortos, o restante do baralho é colocado no centro da mesa, com as cartas viradas para baixo, que será o MONTE de cartas para compra.
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    <B>Batida (direta ou indireta):</B> quando acabar as cartas da mão. Há dois momentos em que ela acontece, uma para pegar o morto, outra é a batida final. Para pegar o morto é possível “bater direto”, ou seja, sem descartar. Batida direta - Neste caso o jogador que pegou o morto pode descer e ao final de sua jogada tem que descartar. Batida indireta - neste caso o jogador termina suas cartas, descartando uma. Pegará o morto, mas só poderá utilizá-lo na outra volta, quando for a sua vez de jogar.
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    <B>Morto:</B> No caso de jogo com 2 participantes, cada jogador recebe o morto após a primeira batida. Se for jogo em duplas, só recebe o primeiro da dupla a bater, a primeira vez, é um morto de cada dupla. Se forem três jogadores, só os dois primeiros que baterem pegam o morto. Quem não pegar o morto tem que pagar 100 pontos no final da mão. Para pegar o morto não é necessário ter canastra, somente descer todas as cartas da mão. No caso de terminar as cartas do monte de compras, mas ninguém tiver batido, é colocado um morto de cada vez, até que alguém bata, ou terminem as cartas do monte, e não haja mais mortos para colocar no monte.
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    <B>Seguidas:</B> jogos com três ou mais cartas do mesmo naipe, em ordem crescente, na ordem: 4, 5, 6, 7, 8, 9, 10, J, Q, K e A, podendo qualquer carta ser substituída por um curinga. O mínimo de cartas para descer um jogo é três, mas outras cartas serão acrescentadas no decorrer da mão.
                    </TextInput>
                <Image source={seguida} style={styles.imagem} />
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    <B>Trincas ou lavadeiras:</B> jogos com três ou mais cartas do mesmo valor podendo qualquer carta ser substituída por um curinga. Mínimo de cartas para descer um jogo é três, mas outras cartas serem acrescentadas no decorrer da mão.
                </TextInput>
                <Image source={trinca} style={styles.imagem} />
                <TextInput 
                    editable={false}  
                    style={styles.formatoTitulo} 
                    multiline={true}>
                    Jogando 
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    O jogo inicia com a distribuição das cartas. Uma pessoa embaralha os dois baralhos juntos, e depois pede à pessoa a sua direita para dar o morto. Esta pessoa retira do total de cartas uma quantidade de cartas para que possa dar os dois MORTOS, cada um com onze cartas. A pessoa que embaralhou dá os VIVOS, iniciando com a pessoa que está a sua esquerda, contanto onze cartas para cada um. Os MORTOS são reservados, e o restante das cartas dos mortos é colocado ao centro da mesa, com as cartas viradas para baixo. O restante das cartas do VIVO é colocado sobre o monte, também com as cartas voltadas para baixo, que será o MONTE de “cartas para compra”.
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    O jogador que está sentado à esquerda, que foi o primeiro a receber as cartas, também chamado de MÃO, é o jogador que começa. Somente o primeiro jogador tem a chance de trocar a primeira carta comprada do monte, caso não lhe interesse. Não é obrigatória a troca da primeira carta. Após a compra, o primeiro jogador que está jogando com um parceiro deverá descer seu(s) jogo(s), caso os tenha, e o final de sua jogada se dá com o descarte (jogar fora) de uma carta, geralmente que não lhe interessa, ao LIXO. A última carta descartada fica sempre por cima no LIXO. Não é obrigatório descer o(s) jogo(s), mas quando há parceria é interessante não se deixar na mão cartas do jogo(s) pronto(s), pois o parceiro pode contribuir com o(s) jogo(s). Todos os jogos de um jogador, ou dupla, é somente dele(s), o jogo não é da mesa, só pode colocar carta no(s) jogo(s) do parceiro. O descarte significa que o jogador acabou sua jogada e está passando a vez. Após descartar, jogará o segundo jogador à esquerda do primeiro e assim por diante. 
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    Após cada compra, o jogador poderá baixar um jogo (combinação de cartas, formando uma sequência ou trinca), ou colocar carta(s) nos seus jogos ou de seu parceiro. O jogador não pode voltar atrás e subir cartas colocadas no(s) jogo(s) da mesa, a não ser que tenha acontecido um engano e a carta “não cabe” no jogo.
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    Do segundo jogador em diante, existe a opção entre a compra de uma carta do MONTE ou de todas as cartas do LIXO, no caso de não estar trancado com um três preto. Para comprar o LIXO, o jogador obrigatoriamente terá que justificar a compra da carta de cima, encaixando-a diretamente em um jogo na mesa, ou juntando com duas cartas (ou mais) da mão e baixando como um novo jogo.
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    O jogador, ou no caso de uma dupla, o primeiro jogador que bater pegará o MORTO, e o jogo continuará como antes. Não é necessário canastra para pegar o MORTO. No jogo de parceria, cada morto corresponde a uma dupla. 
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    Após a batida final se dá o término da MÃO. Somam-se os pontos das mão de cada jogador, e desconta-se este valor das cartas dos jogos na mesa. Se algum jogador, ou dupla, não tenha pego o MORTO, diminui-se 100 pontos como penalidade. Se o MORTO não tiver sido usado (batida indireta) diminui-se 100 pontos como penalidade. Depois se conta quantas canastras, limpas ou sujas, e quantos 3s cada jogador ou dupla tem, e anota-se o primeiro valor. Na sequencia é contada a quantidade de cartas dos jogos. Este valor é somado ao primeiro. A partida termina quando o jogador, ou dupla, conseguir(em) ultrapassar o valor estipulado para a partida.
                </TextInput>
                <TextInput editable={false} style={styles.formatoTexto} multiline={true}>
                    Se o jogador que já pegou o MORTO, ou a dupla onde um jogador já o pegou, tornar a bater, terminará a MÃO, mas para bater é preciso de pelo menos uma canastra limpa. Se a outra dupla, ou jogador, não pegar o MORTO, deverá descontar 100 pontos correspondentes ao MORTO, além das cartas que tem em mãos. Se tiver baixado três vermelho e tiver canastra, soma-se 100 pontos para cada 3 vermelho, e se não tiver canastra, deduz-se 100 pontos para cada 3 vermelho baixado. Deduz-se 100 pontos para cada 3 preto que estiver na mão.
                </TextInput>
                <Image source={pontuacao} style={styles.imagem} />
                <TextInput editable={false} style={styles.formatoRodape}>
                    Fonte:
                </TextInput>
                <TextInput editable={false} style={styles.formatoRodape}>
                    https://www.jogatina.com/regras-como-jogar-tranca.html
                </TextInput>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    formatoTexto: {
        fontSize: 18,        
        textAlign: 'auto',
        lineHeight: 24,
        color: 'black',
        marginLeft: 20,
        marginRight: 20,
    },
    formatoTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        flexDirection: 'column',
        color: 'darkred',
        borderWidth: 3,
        margin: 10,
    },
    formatoRodape: {
        fontSize: 10,
        color: 'black',
    },
    imagem: {
        alignSelf: 'center',
    }
});