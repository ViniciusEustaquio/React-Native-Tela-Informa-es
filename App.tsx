import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native';
import batImage from './assets/16dac9fd7ff7d66c02105de1dddb0f38.png'
import { useState } from 'react';

export default function App() {
  
  const [ativo, setAtivo] = useState(true)
  
  function handleForm (Ativo: boolean){
    return !Ativo
  }
  
  
  
  
  return (
    
    <>
    <View style={[styles.container, {display: ativo === true ? 'flex' : 'none'}]}>
      
      <View style={styles.imageContenier}>
        <Image resizeMode="contain" style={styles.image} source={batImage} > 
        </Image>
      </View>
      
      <View style={styles.textContanier} >  
      <Text onPress={() => setAtivo(handleForm)} style={styles.text}>active bat signal</Text>
      </View>
        
    
      <StatusBar style="auto" />
    </View>
    
    <View style={[styles.formContenier, {display: ativo === true ? 'none' : 'flex'} ]}>
      
        <View style={styles.formStrut}>
        <Image style={styles.imgForm} resizeMode='contain' source={batImage} />
        <View style={styles.inputContain}>
        <TextInput style={styles.input}  keyboardType='name-phone-pad' placeholder='Nome'> </TextInput>  
        </View>
        <View style={styles.inputContain}>
        <TextInput style={styles.input}  keyboardType='number-pad' placeholder='Phone'> </TextInput>  
        </View>
        <View style={styles.inputContainLoc}>
        <TextInput style={styles.inputLoc} placeholder='Digite sua localização' textContentType='location'> </TextInput>  
        </View>
        <View style={styles.inputContainLoc}>
        <TextInput style={styles.inputLoc} placeholder='Observações'> </TextInput>  
        </View>
        
        <View style={styles.textContanier} >  
      <Text onPress={() => Alert.alert('Formulario enviado')} style={styles.text}>Enviar</Text>
      </View>
      
      <View style={styles.textContanier} >  
      <Text onPress={() => setAtivo(true)} style={styles.text}>Voltar</Text>
      </View>
          
        </View > 
        

         
      
    </View>
    
    
    </>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    display: 'none'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center'
  },
  textContanier: {
    backgroundColor: 'black',
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 10,
    width: '90%'
  },
  
  imageContenier: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  
  image: {
    width: '60%',
    height: undefined,
    aspectRatio: 1,
    
  },
  formContenier: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1, 
    display: 'flex'
  },
  
  inputContain: {
    width: '100%',
    borderWidth: 3,
    borderColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 10
  },
  
  input: {
   
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  
  inputLoc: {
   
    paddingHorizontal: 20,
    paddingVertical: 50,
    width: '100%',
    textAlignVertical: 'top'
    
  },
  inputContainLoc: {
    width: '100%',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 10,
    
  },
  
  
  
  imgForm: {
    width: '20%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'flex-start'
  }, 
  
  formStrut: {
    flex: 1,
    width: '80%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20
  }
  
});
