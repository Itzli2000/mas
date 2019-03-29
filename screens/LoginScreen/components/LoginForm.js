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
import { ApplicationStyles as styles, Images } from './../../../Themes';

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.loginFormContainer}>
        <View style={styles.loginFormInputElement}>
          <ImageBackground 
            style={styles.loginFormBackImage}
            source={Images.inputBack}
          >
            <Input 
              containerStyle={styles.loginFormInputContainer}
              inputContainerStyle={styles.loginFormInputsContainer}
              inputStyle={styles.loginFormInputs}
              placeholder="usuario"
            />
          </ImageBackground>
        </View> 
        <View style={styles.loginFormInputElement}>
        <ImageBackground 
            style={styles.loginFormBackImage}
            source={Images.inputBack}
          >
            <Input 
              containerStyle={styles.loginFormInputContainer}
              inputContainerStyle={styles.loginFormInputsContainer}
              inputStyle={styles.loginFormInputs}
              placeholder="contraseña"
            />
          </ImageBackground>
        </View>
      </View>
    );
  }
}


export default LoginForm;