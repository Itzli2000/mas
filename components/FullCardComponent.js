'use strict';
import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import { ApplicationStyles as styles } from './../Themes';
import { LinearGradient } from 'expo';

class FullCardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <View style={styles.cardContainer}>
        <View
          style={styles.fullCardContainerStyle}
        >
          <LinearGradient
              style={styles.screenBackImage}
              colors={['#8db5a5', '#6f9083']}
            >
              <Text h4 style={styles.cardTitleStyles}>{this.props.title.toUpperCase()}</Text>
              <View style={styles.cardBodyStyle}>
                {children}
              </View>
          </LinearGradient>
        </View>
      </View>
      );
  }
}

export default FullCardComponent;