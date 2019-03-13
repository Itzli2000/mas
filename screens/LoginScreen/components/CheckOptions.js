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
    width: '100%',
    margin: 'auto',
    fontFamily: 'open-sans-regular',
    flexDirection: 'row',
    flexWrap: 'nowrap', 
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: 13,
  },
  inlineText: {
    width: '70%',
    fontSize: 13,
    textAlign: 'justify',
    alignSelf: 'center',
  },
  inlineSwitch: {
    width: '20%',
    marginRight: 10,
    alignSelf: 'center',
  }
});


export default CheckOptions;