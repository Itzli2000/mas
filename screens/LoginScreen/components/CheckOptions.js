import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Switch,
  Text,
} from 'react-native';

class CheckOptions extends Component {
  render() {
    return (
      <View> 
        <View style={styles.containercheckOption} >
          <Switch style={styles.inlineSwitch}/>
          <Text style={styles.inlineText}>
            Si acepto que mis datos personales sean transferidos a los terceros indicados para cumplir con las finalidades descritas.
          </Text>
        </View>
        <View style={styles.containercheckOption} >
          <Switch style={styles.inlineSwitch}/>
          <Text style={styles.inlineText}>
            Aviso de Privacidad
          </Text>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containercheckOption: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'open-sans-regular',
    flexDirection: 'row',
    flexWrap: 'nowrap', 
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: 10
  },
  inlineText: {
    textAlign: 'justify',
    flex:0.7,
  },
  inlineSwitch: {
    flex:0.2,
    marginRight: 10,
  }
});


export default CheckOptions;