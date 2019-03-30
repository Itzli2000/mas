'use strict';
import React, { Component } from 'react';
import ScreenContainer from './../../../components/ScreenContainer';
import HomeComponent from './../components/HomeComponent';
import {
  Text,
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
      'open-sans-bold': require('./../../../fonts/OpenSans-Bold.ttf'),
      'open-sans-regular': require('./../../../fonts/OpenSans-Regular.ttf'),
      'open-sans-semibold': require('./../../../fonts/OpenSans-SemiBold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }


  render() {
    return (
      <ScreenContainer>
        { this.state.fontLoaded ? (
          <HomeComponent />
          ) : <Text >Loading....</Text> 
        }
      </ScreenContainer>
      );
  }
}

export default HomeScreen;