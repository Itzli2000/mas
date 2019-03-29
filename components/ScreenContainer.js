'use strict';
import React, { Component } from 'react';
import { ScrollView, ImageBackground, View, } from 'react-native';
import { ApplicationStyles as styles, Images } from './../Themes';

class ScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <View style={styles.screenContainer}>
        <ImageBackground
        style={styles.screenBackImage}
        source={Images.loginBack}
        >
          {children}
        </ImageBackground> 
      </View>
      );
  }
}

export default ScreenContainer;