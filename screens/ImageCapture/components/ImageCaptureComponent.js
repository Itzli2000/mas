import React, { Component } from 'react'; 
import AnimatedBar from "react-native-animated-bar";
import CardComponent from './../../../components/CardComponent';
import UserCard from './../../../components/UserCard';
import UserMenu from './../../../components/UserMenu';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ApplicationStyles as styles, Images, Colors } from './../../../Themes';
import { Camera, Permissions } from 'expo';
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

class ImageCaptureComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    unitaryPrice: '',
    totalPrice: '',
    observations: '',
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    takePhoto: false,
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    return (
        <UserCard {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View style={[styles.userCardfloatMenu, this.props.localState.menu ? styles.MenuShow : styles.MenuHide]}>
            <UserMenu {...this.props}></UserMenu>
          </View>
          <View>
            <View style={[styles.row, styles.centered, styles.imageCaptureHeader]}>
              <Image style={styles.captureIcon} source={Images.filterIcon} />
              <Text style={styles.imageCaptureHeaderText}>Automotríz / Motores</Text>
            </View>
            <View style={styles.imageCaptureBreadcrumb}>
              <View style={styles.imageCaptureIconContainer}>
                <Icon name={"usd"} style={styles.imageCaptureIcon}/> 
              </View>
              <Text style={styles.imageCaptureIconText}>Precios</Text>
            </View>
            <View style={styles.imageCaptureBodyContainer}>
              <Text style={styles.imageCaptureTitle}>{'Cera dura 200 ml'.toUpperCase()}</Text>
              <TextInput
                placeholder={"Precio Unitario"}
                style={styles.imageCaptureInputPrice}
                onChangeText={(text) => this.setState({unitaryPrice:text})}
                value={this.state.unitaryPrice}/>
              <TextInput
                placeholder={"Precio Total"}
                style={styles.imageCaptureInputPrice}
                onChangeText={(text) => this.setState({totalPrice:text})}
                value={this.state.totalPrice}/>
              <TextInput
                placeholder={"Observaciones"}
                style={styles.imageCaptureText}
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => this.setState({observations:text})}
                value={this.state.observations}/>
                <View style={styles.imageCaptureSection}>
                  <View style={[styles.row, styles.pbDefault, styles.centered]}>
                    <View style={[styles.imageCapturePhotoContainer]}>
                      <Image 
                        style={styles.imageCapturePhoto}
                        resizeMode='cover'
                        borderRadius={100}
                        source={Images.userDemo}
                        />
                    </View>
                    <View style={[styles.column, styles.imageCaptureDataContainer]}>
                      <Button title='Tomar de nuevo' onPress={()=>this.setState({takePhoto: true})} buttonStyle={[styles.visitButton,styles.buttonGreen]} />
                      <Text style={styles.textDivider}></Text>
                      <Button title='Elmimnar' onPress={()=>this.setState({takePhoto: false})} buttonStyle={[styles.visitButton,styles.buttonRed]} />
                    </View>
                  </View>  
                </View>
            </View>
          </View>
          <View style={this.state.takePhoto ? styles.photoON : styles.photoOff}>
            <Camera style={{ flex: 1 }} type={this.state.type}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    {' '}Flip{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        </UserCard>
      );
    }
}


export default ImageCaptureComponent;