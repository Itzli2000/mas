import React, { Component } from 'react'; 
import AnimatedBar from "react-native-animated-bar";
import NotificationsCard from './../../../components/NotificationsCard';
import UserCard from './../../../components/UserCard';
import UserMenu from './../../../components/UserMenu';
import { ApplicationStyles as styles, Images, Colors } from './../../../Themes';

import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  Picker
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


const complete=[
  {key: 'menuIcon'},
  {key: 'logo'},
  {key: 'qr'},
  ]

const medium=[
  {key: '5 visitas de 10 por día'},
  {key: '30 visitas al mes'},
  ]

const uncomplete=[
  ]

class NotificationsComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    progress: 0,
    };
  }
 
  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.progress > 0.9) return clearInterval(interval);
 
      this.setState(state => {
        return {
          progress: state.progress + 0.1,
        };
      });
    }, 100);
  }

  render() {
    return (
        <UserCard {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View style={[styles.userCardfloatMenu, this.props.localState.menu ? styles.MenuShow : styles.MenuHide]}>
            <UserMenu {...this.props}></UserMenu>
          </View>
          <View>
            <View style={[styles.row, styles.centered, styles.homeFirstSection]}>
              <Image style={styles.homeCardIcon} source={Images.filterIcon} />
              <Text>Categoría</Text>
              <View style={styles.darkPicker}>
                <Image style={styles.homePickerIcon} source={Images.arrow}/>
                <Picker
                  selectedValue={this.state.language}
                  style={{ height: 30, width: 150, color: 'white' }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
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
                  selectedValue={this.state.language}
                  style={{ height: 30, width: 150, color: 'white' }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                  }> 
                  <Picker.Item label="Automotríz" value="A" />
                  <Picker.Item label="Automotríz 1" value="A1" />
                  <Picker.Item label="Automotríz 2" value="A2" />
                </Picker>
              </View>
            </View>
            <NotificationsCard 
              {...this.props}
              title='Tareas por cumplir'
              startColor={Colors.userCardStart}
              endColor={Colors.userCardStop}
            >
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
            </NotificationsCard>
            <NotificationsCard 
              {...this.props}
              title='Tareas por cumplir'
              startColor={Colors.orangeStart}
              endColor={Colors.orangeStop}
            >
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
            </NotificationsCard>
            <NotificationsCard 
              {...this.props}
              title='Tareas por cumplir'
              startColor={Colors.greenStart}
              endColor={Colors.greenStop}
            >
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
            </NotificationsCard>
          </View>
        </UserCard>
      );
    }
}


export default NotificationsComponent;