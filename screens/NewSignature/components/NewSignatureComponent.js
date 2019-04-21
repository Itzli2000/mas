import React, { Component } from 'react'; 
import AnimatedBar from "react-native-animated-bar";
import CardComponent from './../../../components/CardComponent';
import UserCard from './../../../components/UserCard';
import UserMenu from './../../../components/UserMenu';
import { CheckBox, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ApplicationStyles as styles, Images, Colors } from './../../../Themes';
import ExpoPixi from 'expo-pixi'
import {
  View,
  Text,
  Image,
  Dimensions,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

class NewSignatureComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    signature: '',
    responsable: '',
    area: '',
    observations: '',
    };
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
          <UserCard {...this.props} userCardData={()=>this.renderUserCardData()}>
            <View style={[styles.userCardfloatMenu, this.props.localState.menu ? styles.MenuShow : styles.MenuHide]}>
              <UserMenu {...this.props}></UserMenu>
            </View>
            <View style={[styles.newSignatureContainer]}>
              <View style={[styles.centered]}>
                <Text  style={styles.newSignatureTitle}>Ingresa Firma</Text>
                <ExpoPixi.Signature
                  style={styles.newSignatureCanvas}
                 ref='signatureCanvas' //Important to be able to call this obj
                 strokeWidth={3} // thickness of the brush
                 strokeAlpha={0.5} // opacity of the brush
                />
                <TextInput
                  placeholder={"Responsable"}
                  style={styles.newSignatureInput}
                  multiline={false}
                  onChangeText={(text) => this.setState({responsable:text})}
                  value={this.state.responsable}/>
                <TextInput
                  placeholder={"Area"}
                  style={styles.newSignatureInput}
                  multiline={false}
                  onChangeText={(text) => this.setState({area:text})}
                  value={this.state.area}/>
                <TextInput
                  placeholder={"Observaciones"}
                  style={styles.newSignatureInput}
                  multiline={true}
                  numberOfLines={2}
                  onChangeText={(text) => this.setState({observations:text})}
                  value={this.state.observations}/>
                <View style={[styles.row, styles.centered, styles.newSignatureFooter]}>
                  <TouchableOpacity activeOpacity = { .5 } onPress={()=>this.props.navigation.navigate('Captura')}>
                    <Icon style={styles.surveyIconStyles} name="camera" />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity = { .5 } onPress={()=>alert('Saving survey')}>
                    <Icon style={styles.surveyIconStyles} name="check-square"/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </UserCard>
        );
      }
    }
}


export default NewSignatureComponent;