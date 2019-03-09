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
    const { navigation } = this.props;
    return (
      <View>
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
        <Button title='Entrar' onPress={(e)=>{navigation.navigate('Home');console.log(e);}} buttonStyle={styles.loginButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageLogo: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginTop: 30,
    marginBottom: 15,
    alignSelf: 'center', 
  },
  welcomeText: {
    width: 300,
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'center',
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
  loginButton: {
    width: 150,
    height: 40,
    margin: 'auto',
    alignSelf: 'center',
    backgroundColor: '#e77c22',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15,
  }
});


export default LoginComponent;