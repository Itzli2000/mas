import React, { Component } from 'react'; 
import AnimatedBar from "react-native-animated-bar";
import CardComponent from './../../../components/CardComponent';
import UserCard from './../../../components/UserCard';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ApplicationStyles as styles, Images, Colors } from './../../../Themes';

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

class EncuestaComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    pick1: '',
    pick2: '',
    observations: '',
    opt1: false,
    opt2: false,
    opt3: false,
    };
  }

  render() {
    return (
        <UserCard {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View>
            <View style={[styles.row, styles.centered, styles.homeFirstSection]}>
              <Image style={styles.homeCardIcon} source={Images.filterIcon} />
              <Text>Categoría</Text>
              <View style={styles.darkPicker}>
                <Image style={styles.homePickerIcon} source={Images.arrow}/>
                <Picker
                  selectedValue={this.state.pick1}
                  style={{ height: 30, width: 150, color: 'white' }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({pick1: itemValue})
                  }> 
                  <Picker.Item label="Automotríz" value="A" />
                  <Picker.Item label="Automotríz 1" value="A1" />
                  <Picker.Item label="Automotríz 2" value="A2" />
                </Picker>
              </View>
            </View>
            <View style={[styles.row, styles.centered]}>
              <Image style={styles.homeCardIcon} source={Images.filterIcon} />
              <Text>Subcategoría</Text>
              <View style={styles.darkPicker}>
                <Image style={styles.homePickerIcon} source={Images.arrow}/>
                <Picker
                  selectedValue={this.state.pick2}
                  style={{ height: 30, width: 150, color: 'white' }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({pick2: itemValue})
                  }> 
                  <Picker.Item label="Automotríz" value="A" />
                  <Picker.Item label="Automotríz 1" value="A1" />
                  <Picker.Item label="Automotríz 2" value="A2" />
                </Picker>
              </View>
            </View>
            <View style={styles.surveyContainer}>
              <Text style={styles.surveyTitle}>¿Qué colores de pantalones hay en el mostrador?</Text>
              <View style={styles.surveyBox}>
                <CheckBox
                  containerStyle={styles.surveyCheck}
                  textStyle={styles.surveyCheckText}
                  checkedIcon={'check-square-o'}
                  checkedColor={Colors.white}
                  uncheckedIcon={'minus-square'}
                  title="Azul"
                  checked={this.state.opt1}
                  onPress={() => this.setState({ opt1: !this.state.opt1 })}
                />
                <CheckBox
                  containerStyle={styles.surveyCheck}
                  textStyle={styles.surveyCheckText}
                  checkedIcon={'check-square-o'}
                  checkedColor={Colors.white}
                  uncheckedIcon={'minus-square'}
                  title="Verde"
                  checked={this.state.opt2}
                  onPress={() => this.setState({ opt2: !this.state.opt2 })}
                />
                <CheckBox
                  containerStyle={styles.surveyCheck}
                  textStyle={styles.surveyCheckText}
                  checkedIcon={'check-square-o'}
                  checkedColor={Colors.white}
                  uncheckedIcon={'minus-square'}
                  title="Rojo"
                  checked={this.state.opt3}
                  onPress={() => this.setState({ opt3: !this.state.opt3 })}
                />
              <Text  style={styles.surveyObservations}>Observaciones</Text>
              <TextInput
                style={styles.surveyObservationsText}
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => this.setState({observations:text})}
                value={this.state.observations}/>
              </View>
              <View style={styles.row}>
                <TouchableOpacity activeOpacity = { .5 } onPress={()=>alert('Getting camera')}>
                  <Icon style={styles.surveyIconStyles} name="camera" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = { .5 } onPress={()=>alert('SAving survey')}>
                  <Icon style={styles.surveyIconStyles} name="check-square" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </UserCard>
      );
    }
}


export default EncuestaComponent;