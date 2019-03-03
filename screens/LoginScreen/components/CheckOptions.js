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
        <View style={styles.checkOption} >
          <Switch style={{flexWrap:'wrap'}}/>
          <Text >
            Si acepto que mis datos personales sean transferidos a los terceros indicados para cumplir con las finalidades descritas.
          </Text>
        </View>
        <View style={styles.checkOption} >
          <Switch style={styles.inline}/>
          <Text style={styles.inline}>
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
    justifyContent: 'center'
  },
  inline: {

  }
});


export default CheckOptions;