import React, { Component } from 'react';
import ProgressCircle from 'react-native-progress-circle';
import AnimatedBar from "react-native-animated-bar";
import CardComponent from './../../../components/CardComponent';
import UserCard from './../../../components/UserCard';
import { ApplicationStyles as styles, Images, Colors } from './../../../Themes';

import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  Dimensions
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

class HomeComponent extends Component {
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

  navigatePrice = () => {
    this.props.navigation.navigate('PriceList');
  }

  render() {
    const { navigation } = this.props;
    return (
        <UserCard userCardData={()=>this.renderUserCardData()} navigatePrice={this.navigatePrice}>
          <View>
            <CardComponent 
              title='Tareas por cumplir'
              startColor={Colors.userCardStart}
              endColor={Colors.userCardStop}
            >
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
            </CardComponent>
            <CardComponent 
              title='Tareas por cumplir'
              startColor={Colors.orangeStart}
              endColor={Colors.orangeStop}
            >
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
            </CardComponent>
            <CardComponent 
              title='Tareas por cumplir'
              startColor={Colors.greenStart}
              endColor={Colors.greenStop}
            >
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
            </CardComponent>
          </View>
        </UserCard>
      );
    }
}


export default HomeComponent;