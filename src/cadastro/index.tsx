import * as React from 'react';

import { View ,StyleSheet, Text } from 'react-native';
import {Input} from 'react-native-elements';
import { CheckBox, Button } from 'react-native-elements';
import { useState } from 'react';


export interface CadastroScreenProps{

}

export function Tela2Cadastro(props: CadastroScreenProps) {

     const [isSelected, setSelected] = useState(false)

     return ( 
     
          <View style={styles.container}>
               <Text style={{color: 'white', fontSize: 25, left: 10, top: 50}}>CADASTRAR-SE</Text>

               <View>
                    <Text style={{color: 'white', fontSize: 15, left: 10, top: 100}}>Endereço de e-mail</Text>
                    <Input style={styles.InputContainer}></Input>

                    <Text style={{color: 'white', fontSize: 15, left: 10, top: 10}}>Confirme o e-mail</Text>
                    <Input style={styles.ConfimContainer}></Input>

                    <Text style={{color: 'white', fontSize: 15, left: 10, top: 10}}>País de residência</Text>
                    <Input style={styles2.PaisContainer}></Input>
                    
                    <CheckBox  
                    title={'Tenho 13 anos de idade ou mais e aceito os termos do Acordo de Assinatura do Steam e da Política de Privacidade da Valve'}
                    checkedIcon="check"
                    checkedColor='green'
                    checked={isSelected}
                    onPress={() => setSelected(!isSelected)}>
                    </CheckBox>

                    <Button buttonStyle={{width: 150, marginLeft: 10}} title="Confirmar!"/>

               </View>
                    

          </View>
          
     );
}

export default Tela2Cadastro;

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
     ConfimContainer:{
          backgroundColor: 'rgb(27, 40, 56)',
          color: 'white',
          marginTop: 30
     }
});

const styles2 = StyleSheet.create({
     PaisContainer:{
          backgroundColor: 'rgb(27, 40, 56)',
          color: 'white',
          marginTop: 30
     },
});  
