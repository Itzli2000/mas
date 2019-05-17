import React from 'react';
import { Routes } from './navigation/AppNavigator';
import {
  StyleSheet,
  View,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  }

});