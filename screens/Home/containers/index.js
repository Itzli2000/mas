'use strict';
import React, { Component } from 'react';
import ScreenContainer from './../../../components/ScreenContainer';
import HomeComponent from './../components/HomeComponent';

class HomeScreen extends Component {
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
  //   });
  //   this.setState({ fontLoaded: true });
  // }


  render() {
    return (
      <ScreenContainer>
          <HomeComponent /> 
        }
      </ScreenContainer>
      );
  }
}

export default HomeScreen;