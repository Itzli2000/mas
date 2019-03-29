import React, { Component } from 'react';
import { ApplicationStyles as styles } from './../../../Themes';

import {
  View,
  Switch,
  Text,
} from 'react-native';

class CheckOptions extends Component {
  render() {
    return (
      <View> 
        <View style={styles.checkOptionContainer} >
          <Switch style={styles.checkOptionInlineSwitch}/>
          <Text style={styles.checkOptionInlineText}>
            Si acepto que mis datos personales sean transferidos a los terceros indicados para cumplir con las finalidades descritas.
          </Text>
        </View>
        <View style={styles.checkOptionContainer} >
          <Switch style={styles.checkOptionInlineSwitch}/>
          <Text style={styles.checkOptionInlineText}>
            Aviso de Privacidad
          </Text>
        </View> 
      </View>
    );
  }
}


export default CheckOptions;