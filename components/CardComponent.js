'use strict';
import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import { ApplicationStyles as styles } from './../Themes';

class CardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <View style={styles.cardContainer}>
          <View
            style={styles.cardContainerStyle}
          >
            <Text h4 style={styles.cardTitleStyles}>{this.props.title.toUpperCase()}</Text>
            <View style={styles.cardBodyStyle}>
              {children}
            </View>
          </View>
      </View>
      );
  }
}

export default CardComponent;