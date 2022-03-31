import * as React from 'react';
import { View, Image ,StyleSheet, Text } from 'react-native';
import {Button, Input} from 'react-native-elements';


function Tela1() {
     return ( 
     
          <View style={styles.container}>
               <Text style={{color: 'white', fontSize: 25, left: 10, top: 10}}>INICIAR SESSÃO</Text>
               <Text style={{color: 'white', fontSize: 15, left: 10, top: 70}}>Com uma conta steam existente</Text>

               <View>
               <Text style={{color: 'white', fontSize: 15, left: 10, top: 100}}>Nome do usuário Steam</Text>
                    <Input style={styles.InputContainer}></Input>

                    <Text style={{color: 'white', fontSize: 15, left: 10, top: 10}}>Senha</Text>
                    <Input style={styles.SenhaContainer}></Input>

                    <Button title="Iniciar Sessão" style={styles2.SubmitContainer}/>

                    <Text style={{color: 'white', fontSize: 25, left: 10, top: 20}}>CRIAR</Text>
                    <Text style={{color: 'white', fontSize: 15, left: 10, top: 40}}>Com uma conta steam existente</Text>
                    <Text style={{color: 'white', fontSize: 15, left: 10, top: 60}}>Cadastre-se no Steam e descubra milhares de jogos para jogar.</Text>
               </View>


          </View>
          
     );
}

export default Tela1;

const styles = StyleSheet.create({
     container:{
          backgroundColor: 'rgb(42, 71, 94)',
          // opacity: 0.3,
          bottom: 10,
          width: '90%',
          height: '90%',
     },
     InputContainer:{
          backgroundColor: 'rgb(27, 40, 56)',
          color: 'white',
          marginTop: 110
     },
     SenhaContainer:{
          backgroundColor: 'rgb(27, 40, 56)',
          color: 'white',
          marginTop: 30
     }
});

const styles2 = StyleSheet.create({
     SubmitContainer:{
          width: 100
     }
});  