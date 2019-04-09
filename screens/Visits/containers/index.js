'use strict';
import React, { Component } from 'react';
import ScreenContainer from './../../../components/ScreenContainer';
import VisitsComponent from './../components/VisitsComponent';
import {
  Text,
} from 'react-native';

class VisitsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }


  async componentWillMount() {
    await Expo.Font.loadAsync({
      'gotham-regular': require('./../../../fonts/GothamBook.otf'),
      'gotham-medium': require('./../../../fonts/GothamMedium.ttf'),
      'gotham-bold': require('./../../../fonts/GothamBold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }


  render() {
    return (
      <ScreenContainer {...this.props}>
        { this.state.fontLoaded ? (
          <VisitsComponent {...this.props} />
          ) : <Text >Loading....</Text> 
        }
      </ScreenContainer>
      );
  }
}

export default VisitsScreen;