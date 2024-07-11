import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function WelcomeScreen({navigation}: any) {
    return (
        <ImageBackground 
        source={{ uri: "https://cdn.pixabay.com/photo/2021/06/27/14/54/money-6369051_1280.png" }}
        style={styles.container}
        >
          <Text style={styles.welcome}>Bienvenidos</Text>
          <View style={styles.btncontainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btntexto} onPress={()=>navigation.navigate('Register')}>Registrarse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.btntexto}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <Text style={styles.footer}>Hecho por: Hernán Calvopiña</Text>
          </View>
        </ImageBackground>
      )
    }
    
    const styles = StyleSheet.create({
      container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      input:{
        backgroundColor: "#666",
        height: 55,
        width: "80%",
        marginBottom: 15,
        borderRadius:40,
        paddingHorizontal: 25,
        fontSize: 30,
        color: 'white'
      },
      btntexto:{
        color:'white',
        fontSize:20,
      },
      welcome:{
        color:'black',
        fontSize:50,
        marginBottom:20,
      },
      button:{
        backgroundColor:'black',
        padding:15,
        borderRadius:25,
        margin:10,
        alignItems:'center',
        width:'70%'
      },
      btncontainer:{
        position:'absolute',
        bottom:50,
        width:'100%',
        alignItems:'center'
      },
      footer:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
      }
    })