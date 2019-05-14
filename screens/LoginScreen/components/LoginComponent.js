import React, { Component } from 'react';
import LoginForm from './LoginForm';
import CheckOptions from './CheckOptions';
import { Button } from 'react-native-elements';
import { loginStyles as styles } from './../styles/styles';
import { Images } from './../../../Themes';

import {
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';

class LoginComponent extends Component {

  render() {
    console.log(this.props);
    const { navigation } = this.props;
    return (
        <ScrollView contentContainerStyle={styles.loginScrollViewContainer}>
          <View style={styles.loginContainer}>
            <Image
              style={styles.loginImageLogo}
              source={Images.logo}
            />
            <Text style={styles.loginWelcomeText}>
              Esta es una aplicación para empleados staff de ManpowerGroup
            </Text>
            <LoginForm />
            <Text style={styles.loginPasswordFogotText}>
              ¿Olvidaste tu contraseña?
            </Text>
            <CheckOptions/>
            <Button title='Entrar' onPress={()=>this.props.validateUserLogIn()} buttonStyle={styles.loginButton} />
          </View>
        </ScrollView>
    );
  }
}


export default LoginComponent;