import React from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'

const imgFondoRegister = {uri:"https://images.ecestaticos.com/dsJbhc4Ho1Du_kIhRq1sYX8NAmY=/0x0:1918x1078/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8c0%2F955%2F7de%2F8c09557defbb73fb453d80e530f9b9f9.jpg"}

const Register = () => {
    
    return (
    <>
        <ImageBackground style={styles.container}source={imgFondoRegister} resizeMode="cover">
            
            <View style={styles.contenedor}>
            <Text style={styles.titulo}>Register</Text>
            <Text style={styles.textInputs}>Nombre</Text>
            <TextInput style={styles.Inputs}/>
            <Text style={styles.textInputs}>Apellido</Text>
            <TextInput style={styles.Inputs}/>
            <Text style={styles.textInputs}>Email:</Text>
            <TextInput style={styles.Inputs}/>
            <Text style={styles.textInputs} >Password:</Text>
            <TextInput style={styles.Inputs} secureTextEntry={true}/>
            </View>
            <View>
                <TouchableOpacity style={styles.botonRegister}>
                    <Text style={styles.textBoton}>Lets go!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonRegisterGoogle}>
                    <Text style={styles.textBoton}>Register with Google </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </> 
)
}
const styles = StyleSheet.create({
    botonRegisterGoogle:{
        alignItems:"center",
    },
    textBoton:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },  
    botonRegister:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2196f3',
        width: 200,
        height: 40,
        borderRadius: 15,
        marginTop: 20,
    },
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
    },
    titulo:{
        color: 'white',
        fontSize:40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
    },
    contenedor:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
        width: 300,
        height: 400,
        backgroundColor: '#FF8125',
        borderRadius: 10,
    },
    Inputs:{
        backgroundColor:"white",
        width:250,
    },
    textInputs:{
        color:"black",
        width:250,
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        fontWeight: 'bold',
        
    },



})
export default Register