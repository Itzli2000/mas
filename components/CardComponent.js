'use strict';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <View style={styles.container}>
          <View
            style={styles.containerStyle}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  containerStyle: {
    flex: 0.8,
    backgroundColor: '#FFF',
    borderColor: '#afb5ba',
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  cardTitleStyles: {
    backgroundColor: '#e77c22',
    fontFamily: 'open-sans-bold',
    color: '#FFFFFF',
    paddingLeft: 15,
    fontSize: 15,
    height: 30,
    lineHeight: 30,
  },
  cardBodyStyle: {
    backgroundColor:'#dbe6f0',
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    flexWrap: 'nowrap'
  }
});

export default CardComponent;