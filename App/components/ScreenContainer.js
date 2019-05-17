'use strict';
import React, { Component } from 'react';
import { ScrollView, ImageBackground, View, } from 'react-native';
import { ApplicationStyles as styles, Images } from './../Themes';
import { LinearGradient } from 'expo';

class ScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <View style={styles.screenContainer}>
        {/*<ImageBackground
        style={styles.screenBackImage}
        source={Images.loginBack}
        >
          {children}
        </ImageBackground> */}
        <LinearGradient
          style={styles.screenBackImage}
          colors={['#fbfcfe', '#466ea5']}
        >
          {children}
        </LinearGradient>
      </View>
      );
  }
}

export default ScreenContainer;