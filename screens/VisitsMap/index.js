'use strict';
import React, { Component } from 'react';
import ScreenContainer from './../../components/ScreenContainer';
import VisitsMapComponent from './components/VisitsMapComponent';
import {
  Text,
} from 'react-native';

class VisitsMapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      menu:false
    };
  }

  toogleMenu = () => {
    if (this.state.menu === false)
      this.setState({menu:true});
    else
      this.setState({menu:false});
  }

  hideMenu = () => {
    this.setState({menu:false});
  }


  async componentWillMount() {
    await Expo.Font.loadAsync({
      'gotham-regular': require('./../../fonts/GothamBook.otf'),
      'gotham-medium': require('./../../fonts/GothamMedium.ttf'),
      'gotham-bold': require('./../../fonts/GothamBold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }


  render() {
    return (
      <ScreenContainer {...this.props}>
        { this.state.fontLoaded ? (
          <VisitsMapComponent
            {...this.props} 
            hideMenu={this.hideMenu}
            toogleMenu={this.toogleMenu} 
            localState={this.state} 
          />
          ) : <Text >Loading....</Text> 
        }
      </ScreenContainer>
      );
  }
}

export default VisitsMapScreen;