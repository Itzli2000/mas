'use strict';
import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import { ApplicationStyles as styles } from './../Themes';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

class FullCardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <View style={styles.fullCardContainer}>
        <View
          style={styles.fullCardContainerStyle}
        >
          <LinearGradient
              style={styles.screenBackImage}
              colors={['#8db5a5', '#6f9083']}
            >
              <View style={styles.fullCardTitleContainer}>
                <Icon style={styles.cardIconStyles} name={this.props.icon} /> 
                <Text h4 style={styles.cardTitleStyles}>{this.props.title.toUpperCase()}</Text>
              </View>
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