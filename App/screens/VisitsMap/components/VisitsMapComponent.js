import React, { Component } from 'react';
import TransparentCard from './../../../components/TransparentCard';
import UserCard from './../../../components/UserCard';
import UserMenu from './../../../components/UserMenu';
import { Button, SearchBar  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from "moment";
import MapView from 'react-native-maps';
import { ApplicationStyles as styles, Images, Colors } from './../../../Themes';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';


class VisitsMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      observations: '',
    }
  }

  render() {
    return (
        <UserCard  {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View style={[styles.userCardfloatMenu, this.props.localState.menu ? styles.MenuShow : styles.MenuHide]}>
            <UserMenu {...this.props}></UserMenu>
          </View> 
          <View style={[styles.row, styles.centered, styles.imageCaptureHeader]}>
            <Text style={styles.imageCaptureHeaderText}>Superama Satélite</Text>
            <View style={styles.placeStatusText}>
              <Text>Abierto</Text>
              <Icon style={styles.placeStatusIcon} name="circle"/>
            </View>
          </View>
          <View style={[styles.mapContainerSection]}>
            <MapView
              style={{height:300, width: '100%'}}
              initialRegion={{
                latitude: 19.431818171564856,
                longitude: -99.13371519816394,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
            <View style={[styles.surveyBox, styles.mapBox]}>
              <Text  style={styles.surveyObservations}>Observaciones</Text>
              <TextInput
                style={styles.surveyObservationsText}
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => this.setState({observations:text})}
                value={this.state.observations}/>
              </View>
              <View style={[styles.row, styles.centered]}>
                <TouchableOpacity activeOpacity = { .5 } onPress={()=>this.props.navigation.navigate('Captura')}>
                  <Icon style={styles.surveyIconStyles} name="camera" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = { .5 } onPress={()=>alert('Saving survey')}>
                  <Icon style={styles.surveyIconStyles} name="check-square"/>
                </TouchableOpacity>
              </View>
          </View>
        </UserCard>
      );
    }
}


export default VisitsMapComponent;