'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch,
} from 'react-native';
import { 
  Input,
  CheckBox, } from 'react-native-elements';

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputElement}>
          <Input 
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.inputsContainer}
            inputStyle={styles.inputs}
            placeholder="usuario"
          />
        </View> 
        <View style={styles.inputElement}>
          <Input 
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.inputsContainer}
            inputStyle={styles.inputs}
            placeholder="contraseña"
          />
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
    shadowColor: '#ff00ff',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,

  },
  inputContainer: {
    flex: 0.8, 
  },
  inputsContainer: {
    margin: 'auto',
    borderWidth: 1,
    borderColor: '#74757e',
    height: 55,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  inputs: {
    fontSize:20,
    lineHeight:55,
    textAlign: 'center', 
    shadowColor: 'rgba(0, 0, 0, 0.7)',
  },
});


export default LoginForm;