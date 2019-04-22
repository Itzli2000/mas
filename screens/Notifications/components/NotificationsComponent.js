import React, { Component } from 'react'; 
import AnimatedBar from "react-native-animated-bar";
import NotificationsCard from './../../../components/NotificationsCard';
import UserCard from './../../../components/UserCard';
import UserMenu from './../../../components/UserMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ApplicationStyles as styles, Images, Colors } from './../../../Themes';

import {
  View,
  Text,
  Dimensions,
  TextInput
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


const notifications=[
  {
    icon: 'check',
    iconColor: Colors.greenStart,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'user',
    iconColor: Colors.orangeStart,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'shopping-cart',
    iconColor: Colors.startRed,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'check',
    iconColor: Colors.greenStart,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'user',
    iconColor: Colors.orangeStart,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'shopping-cart',
    iconColor: Colors.startRed,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'check',
    iconColor: Colors.greenStart,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'user',
    iconColor: Colors.orangeStart,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'shopping-cart',
    iconColor: Colors.startRed,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
]

class NotificationsComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      observations: '',
    };
  }

  render() {
    return (
        <UserCard {...this.props} userCardData={()=>this.renderUserCardData()} backColor={Colors.gray}>
          <View style={{flex:1}}>
            <View style={[styles.userCardfloatMenu, this.props.localState.menu ? styles.MenuShow : styles.MenuHide]}>
              <UserMenu {...this.props}></UserMenu>
            </View>
            <View style={[styles.row, styles.centered, styles.imageCaptureHeader, {marginBottom: 30}]}>
              <Text style={styles.imageCaptureHeaderText}>Notificaciones y Actualizaciones</Text>
            </View>
            <View>
            {notifications.map((item, index)=>
                <View key={index} style={styles.notificacionContainer}>
                  <View style={styles.notificationData}>
                  <Icon name={item.icon} style={[styles.notificacionIcon,{color:item.iconColor}]}/> 
                    <Text style={styles.notificationTitle}>{item.title}</Text>
                    <Text style={styles.notificationSubtilte}>{item.subtitle}</Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        </UserCard>
      );
    }
}


export default NotificationsComponent;