import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';

class HomeComponent extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          Esta es una aplicación para empleados staff de ManpowerGroup
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignSelf: 'center',
    margin: 'auto'
  }
});


export default HomeComponent;