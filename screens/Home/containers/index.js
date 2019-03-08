'use strict';

import React, { Component } from 'react';
import LoginComponent from './../components/LoginComponent';

import {
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
} from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }


  async componentWillMount() {
    await Expo.Font.loadAsync({
      'open-sans-bold': require('./../../../assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-regular': require('./../../../assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-semibold': require('./../../../assets/fonts/OpenSans-SemiBold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }


  render() {
    return (
      <ScrollView >
        { this.state.fontLoaded ? (
          <Text>Cargado</Text>
        ) : <Text>Loading....</Text> }
      </ScrollView>
      );
  }
}

export default HomeScreen;