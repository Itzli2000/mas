import React, { Component } from 'react';
import LoginForm from './LoginForm';
import CheckOptions from './CheckOptions';
import { Button } from 'react-native-elements';

import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';

class LoginComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
       <ImageBackground
          style={styles.backImage}
          source={require('./../../../assets/images/loginBack.jpg')}
        >
        <ScrollView>
          <Image
            style={styles.imageLogo}
            source={require('./../../../assets/images/logo.png')}
          />
          <Text style={styles.welcomeText}>
            Esta es una aplicación para empleados staff de ManpowerGroup
          </Text>
          <LoginForm />
          <Text style={styles.passwordFogotText}>
            ¿Olvidaste tu contraseña?
          </Text>
          <CheckOptions/>
          <Button title='Entrar' onPress={()=>{}} buttonStyle={styles.loginButton} />
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    alignContent: 'center'
  },
  imageLogo: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: 19,
    marginBottom: 10,
    fontFamily: 'open-sans-regular',
    textAlign: 'center',
  },
  passwordFogotText: {
    fontSize: 21,
    fontFamily: 'open-sans-semibold',
    textAlign: 'center', 
    marginTop: 20,
    marginBottom: 15,
  },
  backImage: {
    width: '100%', 
    height: '100%'
  },
  loginButton: {
    width: 100,
    height: 50,
    margin: 'auto',
    alignSelf: 'center',
    backgroundColor: '#e77c22',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 15,
  }
});


export default LoginComponent;