'use strict';
import React, { Component } from 'react';
import {  View, Text, Image } from 'react-native';
import { ApplicationStyles as styles, Colors, Images } from './../Themes';
import { LinearGradient } from 'expo';

class CardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    const { children, title } = props;
    const { startColor, endColor } = props;
    return (
      <View style={styles.cardContainer}>
        <View
          style={styles.cardContainerStyle}
        >
          <LinearGradient
              style={[styles.screenBackImage, styles.cardBackgorund]}
              colors={[(startColor ? startColor : Colors.greenStart), (endColor ? endColor : Colors.greenStop)]}
            >
              <View style={[styles.cardBodyStyle, styles.cardTitleContainer]}>
                <Text h4 style={styles.cardTitleStyles}>{title.toUpperCase()}</Text>
                <Image style={styles.cardTitleIcon} source={Images.menuIcon} />
              </View>
              <View style={[styles.cardBodyStyle]}>
                {children}
              </View>
          </LinearGradient>
        </View>
      </View>
      );
  }
}

export default CardComponent;