import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';


const imgFondo = {uri: "https://static.wikia.nocookie.net/dragonballfanon/images/2/29/Goku149.jpg/revision/latest/scale-to-width-down/320?cb=20160112153207&path-prefix=es"}
const insta = {uri: "https://cdn.icon-icons.com/icons2/1753/PNG/512/iconfinder-social-media-applications-3instagram-4102579_113804.png"}
const faceBook = {uri: "https://cdn.icon-icons.com/icons2/99/PNG/512/facebook_socialnetwork_17442.png"}
const tweeter = {uri: "https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579583-yumminkysocialmedia02_83111.png"}
const Index = () => {
  return (
    <ImageBackground style={styles.container} source={imgFondo} resizeMode="cover">
        <View style={styles.contenedor}>
          <Text style={styles.textoPrincipal}>Minga雪</Text>
          <Text style={styles.textoSecundario}>Welcome to the manga multiverse</Text>
        </View>
        <View style={styles.loginBackground}>
          <Text style={styles.signin}>Sign In</Text>
          <Text style={styles.loginTexts}>Email:</Text>
          <TextInput style={styles.textInput}/>
          <Text style={styles.loginTexts} >Password:</Text>
          <TextInput style={styles.textInput} secureTextEntry={true}/>
          <TouchableOpacity style={styles.touchableLogin}>
            <Text style={styles.loginButtonText}>Go!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableRegister}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <StatusBar style='auto' />
        </View>
        <View style={styles.contRedes}>
          <Image style={styles.redes} source={insta}/>
          <Image style={styles.redes} source={faceBook}/>
          <Image style={styles.redes} source={tweeter}/>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  signin:{
    fontSize:25,
    color:"white",
    marginBottom:20,
    fontWeight: 'bold',
  },
  contenedor:{
    
    width:300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    opacity: 0.9
  },
  textoPrincipal: {
    color: '#FF8125',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textoSecundario:{
    fontSize: 20,
    textAlign: 'center',
    color:"white",
    fontWeight: 'bold',
  },
  contRedes:{
    display: "flex",
    width:300,
    flexDirection:"row",
    justifyContent:"space-between",
  },  
  redes:{
    width: 50,
    height: 50,
  },  
  colortext:{
    color: "white",
    
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9
  },
  textInput: {
    width: 250,
    backgroundColor: 'white',
    marginVertical: 20,
    opacity: 0.7,
    
  },
  loginTexts: {
    fontSize: 15,
    display: 'flex',
    width: 250,
    color: "white",
    fontWeight: 'bold',
    
  },
  loginBackground: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    width: 300,
    height: 350,
    backgroundColor: '#FF8125',
    paddingVertical: 20,
    marginVertical: 70,
    borderRadius: 10
  },
  touchableLogin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196f3',
    width: 150,
    height: 30,
    borderRadius: 15
  },
  touchableRegister: {
    display: 'flex',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196f3',
    width: 150,
    height: 30,
    borderRadius: 15
  },
  loginButtonText:{
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  registerButtonText:{
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default Index