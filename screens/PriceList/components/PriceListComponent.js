import React, { Component } from 'react'; 
import AnimatedBar from "react-native-animated-bar";
import CardComponent from './../../../components/CardComponent';
import UserCard from './../../../components/UserCard';
import UserMenu from './../../../components/UserMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
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


const tasks=[
  {
    title: 'Montar Publicidad',
    icon: 'check',
      icon1: 'exclamation',
      icon1Color: Colors.orangeStart,
      icon2: 'exclamation',
      icon2Color: Colors.redStart,
      icon3: 'exclamation',
      icon3Color: Colors.orangeEnd,
    startColor: Colors.userCardStart,
    endColor: Colors.userCardEnd,
  },
  {
    title: 'Montar Publicidad',
    icon: 'times',
      icon1: 'exclamation',
      icon1Color: Colors.orangeStart,
      icon2: 'exclamation',
      icon2Color: Colors.redStart,
      icon3: 'exclamation',
      icon3Color: Colors.orangeEnd,
    startColor: Colors.startRed,
    endColor: Colors.endRed,
  },
  {
    title: 'Montar Publicidad',
    icon: 'minus',
      icon1: 'exclamation',
      icon1Color: Colors.orangeStart,
      icon2: 'exclamation',
      icon2Color: Colors.redStart,
      icon3: 'exclamation',
      icon3Color: Colors.orangeEnd,
    startColor: Colors.orangeStart,
    endColor: Colors.orangeStop,
  },
  {
    title: 'Montar Publicidad',
    icon: 'check',
      icon1: 'exclamation',
      icon1Color: Colors.orangeStart,
      icon2: 'exclamation',
      icon2Color: Colors.redStart,
      icon3: 'exclamation',
      icon3Color: Colors.orangeEnd,
    startColor: Colors.userCardStart,
    endColor: Colors.userCardEnd,
  },
]

class PriceListComponent extends Component {
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
              <Image style={styles.homeCardIconPicker} source={Images.filterIcon} />
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
              <Image style={styles.homeCardIconPicker} source={Images.filterIcon} />
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
            {tasks.map((item, index)=>
                <CardComponent 
                  {...this.props}
                  key={index}
                  icon={item.icon}
                  navigate='TareasActivas'
                  title={item.title}
                  startColor={item.startColor}
                  endColor={item.endColor}
                > 
                  <View style={[styles.row, {justifyContent: ' flex-end', alignItems: 'flex-end'}]}>
                  {item.icon1 && <Icon name={item.icon1} style={[styles.homeCardIcon, {color: item.icon1Color}]}/>}
                  {item.icon2 && <Icon name={item.icon2} style={[styles.homeCardIcon, {color: item.icon2Color}]}/>}
                  {item.icon3 && <Icon name={item.icon3} style={[styles.homeCardIcon, {color: item.icon3Color}]}/>}
                  </View>
                </CardComponent>
            )} 
          </View>
        </UserCard>
      );
    }
}


export default PriceListComponent;