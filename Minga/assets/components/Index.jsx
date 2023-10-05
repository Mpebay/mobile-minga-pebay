import { useDispatch, useSelector } from 'react-redux/es';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Alert, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import saveAuthor from '../redux/actions/me_authors';

const imgFondo = { uri: "https://static.wikia.nocookie.net/dragonballfanon/images/2/29/Goku149.jpg/revision/latest/scale-to-width-down/320?cb=20160112153207&path-prefix=es" }
const insta = { uri: "https://cdn.icon-icons.com/icons2/1753/PNG/512/iconfinder-social-media-applications-3instagram-4102579_113804.png" }
const faceBook = { uri: "https://cdn.icon-icons.com/icons2/99/PNG/512/facebook_socialnetwork_17442.png" }
const tweeter = { uri: "https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579583-yumminkysocialmedia02_83111.png" }


const Index = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.me_authorsReducer);
  console.log(user)

  async function enviarData() {
    const userData = {
      email: email,
      password: password,
    };

    try {
      const credenciales = await axios.post("https://backendminga.onrender.com/auth/signin",userData);
      const authToken = credenciales.data.response.token;
      dispatch(saveAuthors(authToken));
      await AsyncStorage.setItem("token", authToken);
      await AsyncStorage.setItem("user", credenciales.data.response.user.email);
      setToken(authToken);
    } catch (error) {
      console.log("error feo", error);
      setToken(""); 
      Alert.alert('Login Failed', 'Please check your email and password.');
    }
  }

  return (
    <ImageBackground style={styles.container} source={imgFondo} resizeMode="cover">
      <View style={styles.contenedor}>
        <Text style={styles.textoPrincipal}>Minga雪</Text>
        <Text style={styles.textoBienvenida}>Welcome to the manga multiverse</Text>
        <TouchableOpacity style={styles.touchableMangas}>
          <Text style={styles.mangasButtonText} onPress={() => navigation.navigate("Mangas")}>Go to Mangas!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginBackground}>
        <Text style={styles.signin}>Sign In</Text>
        <Text style={styles.loginTexts}>Email:</Text>
        <TextInput style={styles.textInput} onChangeText={(text) => setEmail(text)} />
        <Text style={styles.loginTexts} >Password:</Text>
        <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
        <TouchableOpacity style={styles.touchableLogin} onPress={async () => {
          await enviarData();
          if (token) {
            navigation.navigate("Mangas");
          } else {
           navigation.navigate("Home")
          }
        }}>
          <Text style={styles.loginButtonText} >Go!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableRegister} onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
        <StatusBar style='auto' />
      </View>
      <View style={styles.contRedes}>
        <Image style={styles.redes} source={insta} />
        <Image style={styles.redes} source={faceBook} />
        <Image style={styles.redes} source={tweeter} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  touchableMangas: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196f3',
    width: 200,
    height: 40,
    borderRadius: 15,
    marginTop: 15,
  },
  mangasButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  signin: {
    fontSize: 25,
    color: "white",
    marginBottom: 20,
    fontWeight: 'bold',
  },
  contenedor: {
    width: 300,
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
    textAlign: 'center',
    marginBottom: 15,
  },
  textoSecundario: {
    fontSize: 20,
    textAlign: 'center',
    color: "white",
    fontWeight: 'bold',
    backgroundColor: "#FF8125"
  },
  textoBienvenida: {
    fontSize: 20,
    textAlign: 'center',
    color: "white",
    fontWeight: 'bold',
    backgroundColor: "#FF8125",
    width: 300,
    borderRadius: 5,

  },
  contRedes: {
    display: "flex",
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  redes: {
    width: 50,
    height: 50,
  },
  colortext: {
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
  },
  loginTexts: {
    fontSize: 15,
    display: 'flex',
    width: 250,
    color: "black",
    fontWeight: 'bold',
  },
  loginBackground: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    width: 300,
    height: 320,
    backgroundColor: '#FF8125',
    paddingVertical: 20,
    marginVertical: 40,
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
  loginButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  registerButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default Index