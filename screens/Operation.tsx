import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Operation() {
  return (
    <View>
      <Text style={styles.title}>Operaciones</Text>
      <Text style={styles.text}>ID Operación</Text>
      <Text style={styles.text}>Monto</Text>
      <Text style={styles.text}>Tipo de Operación</Text>
      <Text style={styles.text}>Comentario</Text>
      <Text style={styles.text}>Ejecutar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
    text:{
        fontSize: 15,
        color: '#000000',
        borderRadius: 20,        
        margin: 10,
        height: 100,
        width: "90%",
        backgroundColor: '#ffffff',
        textAlign: 'center',   
    }
})