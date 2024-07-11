import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';
import { TextInput } from 'react-native-gesture-handler';


export default function LoginScreen({navigation} : any) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate('Tab'); // Navega al componente 'Tab' después del inicio de sesión exitoso
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);

        let titulo = '';
        let mensaje = '';

        if (errorCode === 'auth/wrong-password') {
          titulo = 'Error de contraseña';
          mensaje = 'Contraseña incorrecta, revisar credenciales';
        } else if (errorCode === 'auth/user-not-found') {
          titulo = 'Error de usuario';
          mensaje = 'Usuario no encontrado, revisar el correo electrónico';
        } else {
          titulo = 'Error de acceso';
          mensaje = 'Revisar credenciales de correo y contraseña';
        }

        Alert.alert(titulo, mensaje);

        setEmail('');
        setPassword('');
      });
  };

  return (
    <ImageBackground
      source={{ uri: 'https://cdn.pixabay.com/photo/2021/06/27/14/54/money-6369051_1280.png' }}
      style={styles.imagen}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Login</Text>

        <TextInput
          placeholder='Ingrese su correo'
          onChangeText={(texto) => setEmail(texto)}
          style={styles.input}
          value={email}
        />
        <TextInput
          placeholder='Ingrese su contraseña'
          onChangeText={(texto) => setPassword(texto)}
          style={styles.input}
          value={password}
          secureTextEntry={true} // Para ocultar la contraseña
        />

        <TouchableOpacity style={styles.boton1} onPress={login}>
          <Text style={{ fontWeight: '800' }}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton2} onPress={() => navigation.navigate('WelcomeScreen')}>
          <Text style={{ fontWeight: '800' }}>Regresar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imagen: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(7, 49, 21, 0.8)', 
  },
  titulo:{
    fontSize: 45,
    color: 'white',
    marginBottom: 20,
      
  },
  input:{
    backgroundColor: 'white',
    height: 60,
    width: '60%',
    margin: 10,
    marginBottom: 25,
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 25,
    textAlign: 'center',
    borderBottomWidth: 5,
    fontSize: 15,
    
  },
  boton1:{
    borderWidth: 2,
    borderColor: 'black',
    padding:10,
    margin: 8,
    borderRadius: 25,
    backgroundColor: "#b9fcb6",
    width: '30%',
    alignItems: 'center'
  },
  boton2:{
    borderWidth: 2,
    borderColor: 'black',
    padding:10,
    margin: 8,
    borderRadius: 25,
    backgroundColor: '#ff9ba5',
    width: '30%',
    alignItems: 'center'
  }
})