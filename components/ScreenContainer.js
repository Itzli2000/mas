'use strict';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, ImageBackground, View, } from 'react-native';

class ScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
        style={styles.backImage}
        source={require('./../assets/images/loginBack.jpg')}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            {children}
          </ScrollView>
        </ImageBackground> 
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollViewContainer: {
    flex:0,
  },
  backImage: {
    width: '100%', 
    height: '100%',
  }
});

export default ScreenContainer;