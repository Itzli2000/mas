'use strict';

import React, { Component } from 'react';
import LoginComponent from './../components/LoginComponent';
import {
  Text,
} from 'react-native';
import ScreenContainer from './../../../components/ScreenContainer';

class LoginScreen extends Component {
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
      'open-sans-extrabold': require('./../../../fonts/OpenSans-ExtraBold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  validateUserLogIn = () => {
    console.log('redirecting');
    this.props.navigation.navigate('Home');
  }



  render() {
    return (
      <ScreenContainer>
        { this.state.fontLoaded ? (
          <LoginComponent {...this.props} validateUserLogIn={this.validateUserLogIn} />
        ) : <Text>Loading....</Text> }
      </ScreenContainer>
      );
  }
}

export default LoginScreen;