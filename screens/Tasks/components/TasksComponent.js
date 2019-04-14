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

class TasksComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      pendings: '',
    };
  }

  render() {
    return (
        <UserCard {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View style={[styles.userCardfloatMenu, this.props.localState.menu ? styles.MenuShow : styles.MenuHide]}>
            <UserMenu {...this.props}></UserMenu>
          </View>
          <View>
            <View style={[styles.row, styles.centered, styles.homeFirstSection]}>
              <Icon name={'check'} style={ styles.tasksIconHeader}/> 
              <Text>Estatus</Text>
            </View>
            <View style={[styles.row, styles.centered]}>
              <View style={styles.darkPicker}>
                <Image style={styles.homePickerIcon} source={Images.arrow}/>
                <Picker
                  selectedValue={this.state.pendings}
                  style={{ height: 30, width: 150, color: 'white' }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({pendings: itemValue})
                  }> 
                  <Picker.Item label="Pendientes" value="A" />
                  <Picker.Item label="Pendientes 1" value="A1" />
                  <Picker.Item label="Pendientes 2" value="A2" />
                </Picker>
              </View>
            </View>
            <CardComponent 
              {...this.props}
              navigate='TareasActivas'
              title='Tareas por cumplir'
              startColor={Colors.userCardStart}
              endColor={Colors.userCardStop}
            >
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
            </CardComponent>
            <CardComponent 
              {...this.props}
              navigate='TareasActivas'
              title='Tareas por cumplir'
              startColor={Colors.orangeStart}
              endColor={Colors.orangeStop}
            >
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
                <Image style={styles.homeCardIcon} source={Images.menuIcon} />
            </CardComponent>
            <CardComponent 
              {...this.props}
              navigate='TareasActivas'
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


export default TasksComponent;