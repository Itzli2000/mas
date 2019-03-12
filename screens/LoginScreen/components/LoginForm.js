'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Switch,
  TextInput,
} from 'react-native';
import { 
  Input, 
  CheckBox, } from 'react-native-elements';

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputElement}>
          <ImageBackground 
            style={styles.backImage}
            source={require('./../../../assets/images/inputBack.png')}
          >
            <Input 
              containerStyle={styles.inputContainer}
              inputContainerStyle={styles.inputsContainer}
              inputStyle={styles.inputs}
              placeholder="usuario"
            />
          </ImageBackground>
        </View> 
        <View style={styles.inputElement}>
        <ImageBackground 
            style={styles.backImage}
            source={require('./../../../assets/images/inputBack.png')}
          >
            <Input 
              containerStyle={styles.inputContainer}
              inputContainerStyle={styles.inputsContainer}
              inputStyle={styles.inputs}
              placeholder="contraseña"
            />
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  inputElement: {
    flexDirection:'row',
    flex: 0.8, 
    height: 50,
    borderWidth: 1,
    borderColor: '#74757e',
    margin: 0,
    marginTop: 10,
    borderRadius: 15,
    padding: 0,
    overflow: 'hidden'
  },
  inputContainer: {
    flex: 0.8, 
  },
  inputsContainer: {
    flex: 1,
    borderRadius: 15,
    borderColor: 'transparent',
    },
  inputs: {
    fontSize:20,
    lineHeight:20,
    textAlign: 'center', 
    backgroundColor: 'transparent',
    overflow: 'hidden'
  },
  backImage: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default LoginForm;