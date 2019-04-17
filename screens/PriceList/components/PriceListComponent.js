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
    iconClor: Colors.orange,
      icon1: 'camera',
      icon1Color: Colors.orangeStart,
      icon2: 'exclamation',
      icon2Color: Colors.userCardStart,
      icon3: 'file',
      icon3Color: Colors.green,
    startColor: Colors.userCardStart,
    endColor: Colors.userCardEnd,
  },
  {
    title: 'Montar Publicidad',
    icon: 'times',
    iconClor: Colors.orange,
      icon1: 'camera',
      icon1Color: Colors.orangeStart,
      icon2: 'exclamation',
      icon2Color: Colors.userCardStart,
      icon3: 'file',
      icon3Color: Colors.green,
    startColor: Colors.startRed,
    endColor: Colors.endRed,
  },
  {
    title: 'Montar Publicidad',
    icon: 'minus',
    iconClor: Colors.orange,
      icon1: 'camera',
      icon1Color: Colors.orangeStart,
      icon2: 'exclamation',
      icon2Color: Colors.userCardStart,
      icon3: 'file',
      icon3Color: Colors.green,
    startColor: Colors.orangeStart,
    endColor: Colors.orangeStop,
  },
  {
    title: 'Montar Publicidad',
    icon: 'check',
    iconClor: Colors.orange,
      icon1: 'camera',
      icon1Color: Colors.orangeStart,
      icon2: 'exclamation',
      icon2Color: Colors.userCardStart,
      icon3: 'file',
      icon3Color: Colors.green,
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
                  iconClor={item.iconClor}
                  navigate='TareasActivas'
                  title={item.title}
                  startColor={item.startColor}
                  endColor={item.endColor}
                > 
                  <View style={[styles.row]}>
                  {item.icon1 && <Icon name={item.icon1} style={[styles.homeCardIcon, {color: item.icon1Color, marginLeft: 'auto'}]}/>}
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