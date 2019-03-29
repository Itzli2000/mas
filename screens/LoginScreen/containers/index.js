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

    // this.state = {
    //   fontLoaded: false,
    // };
  }


  // async componentWillMount() {
  //   await Expo.Font.loadAsync({
  //     'open-sans-bold': require('./../../../assets/fonts/OpenSans-Bold.ttf'),
  //     'open-sans-regular': require('./../../../assets/fonts/OpenSans-Regular.ttf'),
  //     'open-sans-semibold': require('./../../../assets/fonts/OpenSans-SemiBold.ttf'),
  //     'open-sans-extrabold': require('./../../../assets/fonts/OpenSans-ExtraBold.ttf'),
  //   });
  //   this.setState({ fontLoaded: true });
  // }


  render() {
    return (
      <ScreenContainer>
          <LoginComponent {...this.props} />
      </ScreenContainer>
      );
  }
}

export default LoginScreen;