'use strict';
import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import { ApplicationStyles as styles } from './../Themes';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

class TransparentCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, startColor, stopColor } = this.props;
    return (
      <View style={styles.transparentCardContainer}>
        <View
          style={styles.transparentCardContainerStyle}
        >
          <LinearGradient
              style={styles.screenBackImage}
              colors={[(startColor ? startColor : rgba(255,255,255,0)), (stopColor ? stopColor : rgba(255,255,255,0))]}
            >
              <View style={styles.transparentCardTitleContainer}>
                <Text h4 style={styles.transparentcardTitleStyles}>{this.props.title.toUpperCase()}</Text>
                <Text h5 style={styles.transparentcardSubtitleStyles}>{this.props.subTitle.toUpperCase()}</Text>
                <Icon style={styles.transparentCardIconStyles} name={this.props.icon} /> 
              </View>
              <View style={styles.transparentCardBody}>
                {children}
              </View>
          </LinearGradient>
        </View>
      </View>
      );
  }
}

export default TransparentCard;