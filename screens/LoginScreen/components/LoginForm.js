'use strict';

import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  Switch,
  TextInput,
} from 'react-native';
import { 
  Input, 
  CheckBox, } from 'react-native-elements';
import { ApplicationStyles as styles, Images, Colors } from './../../../Themes';

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.loginFormContainer}>
        <View style={styles.loginFormInputElement}>
            <Input 
              containerStyle={styles.loginFormInputContainer}
              inputContainerStyle={styles.loginFormInputsContainer}
              inputStyle={styles.loginFormInputs}
              placeholderTextColor={Colors.orangeText}
              placeholder="usuario"
            />
        </View> 
        <View style={styles.loginFormInputElement}>
            <Input 
              containerStyle={styles.loginFormInputContainer}
              inputContainerStyle={styles.loginFormInputsContainer}
              inputStyle={styles.loginFormInputs}
              placeholderTextColor={Colors.orangeText}
              placeholder="contraseña"
            />
        </View>
      </View>
    );
  }
}


export default LoginForm;