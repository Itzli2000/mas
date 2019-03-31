import React, { Component } from 'react';
import { ApplicationStyles as styles, Colors } from './../../../Themes';
import { Switch } from 'react-native-switch';

import {
  View,
  Text,
} from 'react-native';

class CheckOptions extends Component {
  render() {
    return (
      <View> 
        <View style={styles.checkOptionContainer} >
          <Switch
            value={true}
            onValueChange={(val) => console.log(val)}
            disabled={false}
            circleSize={14}
            barHeight={17}
            circleBorderWidth={0}
            backgroundActive={Colors.orange}
            backgroundInactive={Colors.inactive}
            circleActiveColor={Colors.white} 
            circleInActiveColor={Colors.black}
            changeValueImmediately={true}
            changeValueImmediately={true}
            switchLeftPx={2}
            switchRightPx={2}
            switchWidthMultiplier={2}
          />
          <Text style={styles.checkOptionInlineText}>
            Si acepto que mis datos personales sean transferidos a los terceros indicados para cumplir con las finalidades descritas.
          </Text>
        </View>
        <View style={styles.checkOptionContainer} >
          <Switch
            style={styles.checkOptionInlineSwitch}
            value={false}
            onValueChange={(val) => console.log(val)}
            disabled={false}
            circleSize={14}
            barHeight={17}
            circleBorderWidth={0}
            backgroundActive={Colors.orange}
            backgroundInactive={Colors.inactive}
            circleActiveColor={Colors.white} 
            circleInActiveColor={Colors.black}
            changeValueImmediately={true}
            changeValueImmediately={true}
            switchLeftPx={2}
            switchRightPx={2}
            switchWidthMultiplier={2}
          />
          <Text style={styles.checkOptionInlineText}>
            Aviso de Privacidad
          </Text>
        </View> 
      </View>
    );
  }
}


export default CheckOptions;