'use strict';

import React, { Component } from 'react';
import LoginComponent from './components/LoginComponent';
import {
  Text,
} from 'react-native';
import ScreenContainer from './../../components/ScreenContainer';
import SplashScreen from './../../components/SplashScreen';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }


  async componentWillMount() {
    await Expo.Font.loadAsync({
      'gotham-regular': require('./../../fonts/GothamBook.otf'),
      'gotham-medium': require('./../../fonts/GothamMedium.ttf'),
      'gotham-bold': require('./../../fonts/GothamBold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  validateUserLogIn = () => {
    this.props.navigation.navigate('Home');
  }



  render() {
    return (
      <ScreenContainer {...this.props}>
        { this.state.fontLoaded ? (
          <LoginComponent {...this.props} validateUserLogIn={this.validateUserLogIn} />
        ) : <SplashScreen /> }
      </ScreenContainer>
      );
  }
}

export default LoginScreen;