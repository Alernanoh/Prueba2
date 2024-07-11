import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function MainPage() {
  return (
   
    <ImageBackground
    source={{ uri: "https://cdn.pixabay.com/photo/2021/06/27/14/54/money-6369051_1280.png" }}
    style={styles.container}
    >
      <Text style={styles.welcome}>Inicio</Text>
      <View>
        <Text style={styles.text}>Mis productos</Text>
        </View>
      <View>

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
    welcome:{
        color:'black',
        fontSize:50,
        marginBottom:20,
      },
      text:{
        color:'black',
        borderRadius: 15,
        height: 50,
        width: "80%",
        backgroundColor: '#F5F5F5',
        padding: 10,
        margin: 10
      }
})