import React, { Component } from 'react'; 
import AnimatedBar from "react-native-animated-bar";
import CardComponent from './../../../components/CardComponent';
import UserCard from './../../../components/UserCard';
import UserMenu from './../../../components/UserMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from "moment";
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


const tasks=[
  {
    task: 'Montat publicidad',
    status: 'Crítica',
    icon: 'exclamation',
    iconColor: Colors.orangeStart,
    startDate: '2019-02-27T10:00:00',
    endDate: '2019-02-27T10:00:00',
    startColor: Colors.orangeStart,
    endColor: Colors.orangeStop,
  },
  {
    task: 'Montat publicidad',
    status: 'Crítica',
    icon: 'exclamation',
    iconColor: Colors.redStart,
    startDate: '2019-02-27T10:00:00',
    endDate: '2019-02-27T10:00:00',
    startColor: Colors.redStart,
    endColor: Colors.redStop,
  },
  {
    task: 'Montat publicidad',
    status: 'Crítica',
    icon: 'exclamation',
    iconColor: Colors.startRed,
    startDate: '2019-02-27T10:00:00',
    endDate: '2019-02-27T10:00:00',
    startColor: Colors.startRed,
    endColor: Colors.endRed,
  },
]

class TasksComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      pendings: '',
    };
  }

  renderTasks = (data) => {
    const instance = this;
    console.log('rendering');
    var card = data.map((item, index)=>
        <View key={index}>
          <CardComponent 
            {...instance.props}
            navigate='TareasActivas'
            title={item.task}
            startColor={item.startColor}
            endColor={item.endColor}
          >
            <View style={styles.column}>
              <Text>Fecha Inicial</Text>
              <Text>{moment(item.startDate).format('MM-DD-YYYY')}</Text>
            </View>
            <View style={styles.column}>
              <Text>Fecha Final</Text>
              <Text>{moment(item.endDate).format('MM-DD-YYYY')}</Text>
            </View>
          </CardComponent>
        </View>
      );
    console.log(card);
    return card;
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
            {tasks.map((item, index)=>
              <View key={index}>
                <CardComponent 
                  {...this.props}
                  icon={item.icon}
                  navigate='TareasActivas'
                  title={item.task}
                  startColor={item.startColor}
                  endColor={item.endColor}
                >
                  <View style={styles.row}>
                    <View style={[styles.column, styles.taskColumn]}>
                      <Text style={{fontWeight: 'bold', color: 'white'}}>Fecha Inicial</Text>
                      <Text style={{color: 'white'}}>{moment(item.startDate).format('YYYY-DD-MM')}</Text>
                    </View>
                    <View style={[styles.column, styles.taskColumn]}>
                      <Text style={{fontWeight: 'bold', color: 'white'}}>Fecha Final</Text>
                      <Text style={{color: 'white'}}>{moment(item.endDate).format('YYYY-DD-MM')}</Text>
                    </View>
                  </View>
                </CardComponent>
              </View>
            )}
          </View>
        </UserCard>
      );
    }
}


export default TasksComponent;