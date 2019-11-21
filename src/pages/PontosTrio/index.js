import React, { Component } from 'react';
import { View, Text, TextInput, Alert, ScrollView, StyleSheet } from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import CustomPicker from '../../components/picker';

console.disableYellowBox = true;

export default class PontosTrio extends Component{
    constructor(props){
        super(props);

        this.state = {
            inputMaxima: "",
            maximoDisabled: true,
            pontuacaoMaxima: "",

            inputJogador1: "",
            inputJogador2: "",

            pontosJogador1: 0,
            pontosJogador1Restantes: 0,

            pontosJogador2: 0,
            pontosJogador2Restantes: 0,

            historicoJogador1: [],
            historicoJogador2: []


        }
    }
    static navigationOptions = {
        title: 'MARCANDO OS PONTOS'
    };

    resetarJogo = () => {
        this.setState({
            inputMaxima: "",
            maximoDisabled: true,
            pontuacaoMaxima: "",

            inputJogador1: "",
            inputJogador2: "",

            pontosJogador1: 0,
            pontosJogador1Restantes: 0,

            pontosJogador2: 0,
            pontosJogador2Restantes: 0,

            historicoJogador1: [],
            historicoJogador2: []
        });
    }

    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
            <Text style={{ textAlign: "center", fontSize: 18, color: 'darkred', lineHeight: 18, marginTop: 10 }}>Definir a</Text>
            <Text style={{ textAlign: "center", fontSize: 18, color: 'darkred', fontWeight:'bold', lineHeight: 18  }}>PONTUAÇÃO MÁXIMA</Text>
            <Text style={{ textAlign: "center", fontSize: 18, color: 'darkred', lineHeight: 18 }}>para esta partida</Text>                
                <TextInput onChangeText={(txt) => this.setState({ 
                        inputMaxima: txt, 
                        pontuacaoMaxima: parseInt(txt), 
                        pontosJogador1Restantes: parseInt(txt), 
                        pontosJogador2Restantes: parseInt(txt), 
                    })} 
                    value={this.state.inputMaxima} 
                    style={styles.input}
                    keyboardType="numeric"   
                    editable={this.state.maximoDisabled}  
                />
                <Text style={{ textAlign: "center", fontSize: 18, color: 'darkred' }}>Clicar em INICIAR</Text>

                <Button txt="INICIAR" onPress={() => this.setState({ maximoDisabled: false })}/>

                <Text style={{ textAlign: "center", fontSize: 18, color: 'darkred', padding: 0, margin: 10, marginBottom: 0 }}>Definir os jogadores</Text>
                <View style={styles.containerPontuacao}>
                    <View style={styles.containerJogador1}>
                        <CustomPicker selectedValue={this.state.apelidoJogador1} onValueChange={(itemValue, itemIndex) => this.setState({apelidoJogador1: itemValue})} />
                        {   
                            this.state.historicoJogador1 && this.state.historicoJogador1.map((item) => (
                                <Text style={{ textAlign: 'center' }}>{item}</Text>
                                )
                            )
                        }

                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}/>
                        <Text style={{ textAlign: 'center', color: 'darkred', fontWeight: 'bold'  }}>TOTAL: {this.state.pontosJogador1}</Text>
                        <TextInput onChangeText={(txt) => {
                                this.setState({ inputJogador1: parseInt(txt) }); 
                            }}
                            value={this.state.inputJogador1} 
                            style={styles.input}
                            keyboardType="phone-pad"   
                        />

                        <Button txt="Somar os pontos" onPress={() => {

                                //VERIFICA SE EXISTE PONTUAÇÃO MAXIMA
                                if (this.state.pontuacaoMaxima == 0) {
                                    Alert.alert("Por favor definir a PONTUAÇÃO MÁXIMA!");
                                    return;
                                }

                                //NÃO COMPUTA O CAMPO VAZIO  
                                if(this.state.inputJogador1 == '') {
                                    Alert.alert("Por favor preencha a pontuação de "+this.state.apelidoJogador1);
                                    return;
                                }

                                //ADICIONA NO HISTORICO
                                var pontos = this.state.historicoJogador1;
                                pontos.push(parseInt(this.state.inputJogador1));
                                this.setState({ historicoJogador1: pontos });

                                //SOMA OS PONTOS DO JOGADOR
                                var pontoJogador1 = this.state.pontosJogador1;
                                var soma = pontoJogador1 + parseInt(this.state.inputJogador1);

                                this.setState({ 
                                    pontosJogador1: soma
                                });

                                if (this.state.historicoJogador1.length == this.state.historicoJogador2.length && soma >= this.state.pontuacaoMaxima)  {
                                    if (soma == this.state.pontosJogador2){
                                        this.setState({ 
                                            inputJogador1: '',
                                        });
                                        return;
                                    } else if(soma > this.state.pontosJogador2) {
                                        this.setState({ 
                                            inputJogador1: '',
                                        });
                                        Alert.alert("Parabéns! "+this.state.apelidoJogador1+" ganhou!");
                                        return;
                                    } else {
                                        this.setState({ 
                                            inputJogador1: '',
                                        });
                                        Alert.alert("Parabéns! "+this.state.apelidoJogador2+" ganhou!");
                                        return;
                                    }
                                }

                                if (this.state.historicoJogador1.length == this.state.historicoJogador2.length && this.state.pontosJogador2 >= this.state.pontuacaoMaxima)  {
                                    if (soma == this.state.pontosJogador2){
                                        this.setState({ 
                                            inputJogador1: '',
                                        });
                                        return;
                                    } else if(this.state.pontosJogador2 > soma) {
                                        this.setState({ 
                                            inputJogador1: '',
                                        });
                                        Alert.alert("Parabéns! "+this.state.apelidoJogador2+" ganhou!");
                                        return;
                                    } else {
                                        this.setState({ 
                                            inputJogador1: '',
                                        });
                                        Alert.alert("Parabéns! "+this.state.apelidoJogador1+" ganhou!");
                                        return;
                                    }
                                }
                                //SOMA O RESTANTE PARA GANHAR
                                var maximo = this.state.pontuacaoMaxima;
                                this.setState({
                                    pontosJogador1Restantes: maximo - soma,
                                    inputJogador1: '',
                                })
                            }
                        }/>
                    </View>
                    
                    
                    <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'darkred', fontSize: 24, fontWeight: '700' }}>X</Text>
                    </View>


                    <View style={styles.containerJogador2}>
                        <CustomPicker selectedValue={this.state.apelidoJogador2} onValueChange={(itemValue, itemIndex) => this.setState({apelidoJogador2: itemValue})} />
                        
                        {   
                            this.state.historicoJogador2 && this.state.historicoJogador2.map((item) => (
                                    <Text style={{ textAlign: 'center' }}>{item}</Text>
                                )
                            )
                        }
                        
                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}/>
                        <Text style={{ textAlign: 'center', color: 'darkred', fontWeight: 'bold' }}>TOTAL: {this.state.pontosJogador2}</Text>
                        <TextInput onChangeText={(txt) => {
                                this.setState({ inputJogador2: parseInt(txt) }); 
                            }} 
                            value={this.state.inputJogador2} 
                            style={styles.input}
                            keyboardType="phone-pad"
                        />

                        <Button txt="Somar os pontos" onPress={() => {

                                //VERIFICA SE EXISTE PONTUAÇÃO MAXIMA
                                if (this.state.pontuacaoMaxima == 0) {
                                    Alert.alert("Por favor definir a PONTUAÇÃO MÁXIMA!");
                                    return;
                                }

                                //NÃO COMPUTA O CAMPO VAZIO  
                                if(this.state.inputJogador2 == '') {
                                    Alert.alert("Por favor preencha a pontuação de "+this.state.apelidoJogador2);
                                    return;
                                }

                                //ADICIONAR OS PONTOS NO HISTORICO
                                var pontos = this.state.historicoJogador2;
                                pontos.push(parseInt(this.state.inputJogador2));
                                this.setState({ historicoJogador2: pontos });

                                //ADICIONA OS PONTOS NA SOMA DOS PONTOS
                                var pontoJogador2 = this.state.pontosJogador2;
                                var soma = pontoJogador2 + parseInt(this.state.inputJogador2);
                                this.setState({ 
                                    pontosJogador2: soma
                                });

                                if (this.state.historicoJogador1.length == this.state.historicoJogador2.length && soma >= this.state.pontuacaoMaxima)  {
                                    if (soma == this.state.pontosJogador1){
                                        this.setState({ 
                                            inputJogador2: '',
                                        });
                                        return;
                                    } else if(soma > this.state.pontosJogador1) {
                                        this.setState({ 
                                            inputJogador2: '',
                                        });
                                        Alert.alert("Parabéns! "+this.state.apelidoJogador2+" ganhou!");
                                        return;
                                    } else {
                                        this.setState({ 
                                            inputJogador2: '',
                                        });
                                        Alert.alert("Parabéns! "+this.state.apelidoJogador1+" ganhou!");
                                        return;
                                    }
                                }

                                if (this.state.historicoJogador1.length == this.state.historicoJogador2.length && this.state.pontosJogador1 >= this.state.pontuacaoMaxima)  {
                                    if (soma == this.state.pontosJogador1){
                                        this.setState({ 
                                            inputJogador2: '',
                                        });
                                        return;
                                    } else if(this.state.pontosJogador1 > soma) {
                                        this.setState({ 
                                            inputJogador2: '',
                                        });
                                        Alert.alert("Parabéns! "+this.state.apelidoJogador1+" ganhou!");
                                        return;
                                    } else {
                                        this.setState({ 
                                            inputJogador2: '',
                                        });
                                        Alert.alert("Parabéns! "+this.state.apelidoJogador2+" ganhou!");
                                        return;
                                    }
                                }

                                //SOMA O RESTANTE PARA GANHAR
                                var maximo = this.state.pontuacaoMaxima;
                                this.setState({
                                    pontosJogador2Restantes: maximo - soma,
                                    inputJogador2: '',
                                })
                            }
                        }/>
                    </View>
                </View>

                {/* POG */}
                <Text>  </Text>
                <Text>  </Text>
                <Button txt="NOVA PARTIDA" onPress={ () => this.resetarJogo() } />
            </View>
            </ScrollView>
        )
    }
}
