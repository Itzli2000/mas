import React, { Component } from 'react';
import AnimatedBar from "react-native-animated-bar";
import FullCardComponent from './../../../components/FullCardComponent';
import UserCard from './../../../components/UserCard';
import PercentCircle from 'react-native-percent-circle';
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


const tasks=[
  {
    key: 'Porcentaje de cumplimiento',
    icon: 'clock-o',
    description: '5 visitas de 10 por día',
    percentage: 50,
  },
  {
    key: 'Porcentaje de cumplimiento',
    icon: 'clock-o',
    description: '7 visitas de 10 por día',
    percentage: 70,
  },
  {
    key: 'Porcentaje de cumplimiento',
    icon: 'clock-o',
    description: '10 visitas de 10 por día',
    percentage: 100,
  },
 ]
const pending=[
  {
    key: 'Porcentaje de cumplimiento',
    icon: 'clock-o',
    description: '5 visitas de 10 por día',
    percentage: 50,
  },
 ]

class VisitasComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    progress: 0,
    };
  }
 
  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.progress > 0.4) return clearInterval(interval);
 
      this.setState(state => {
        return {
          progress: state.progress + 0.1,
        };
      });
    }, 100);
  }

  renderTaskList = (data) => {
    return  data.map((item, index) => {
      return (
          <FullCardComponent
            key={index} 
            icon={item.icon}
            title={item.key}
            startColor={Colors.userCardStart}
            stopColor={Colors.userCardStop}
          >
            <View style={[styles.fullCardInnerColumn, styles.fullCardInnerColumnLeft]}>
               <Text style={styles.fullCardBody}>{'  '}{item.description}</Text>
            </View>
            <View style={[styles.fullCardInnerColumn, styles.fullCardInnerColumnRight]}>
              <PercentCircle style={styles.circularGrap} percent={item.percentage} radius={40} fontColor={Colors.white} lineWidth={10} fontSize={20} lineCap={'round'} animationType="Circ.easeInOut"/>
            </View>           
          </FullCardComponent>
        )
    });
  }

  renderPendingList = (data) => {
    return  data.map((item, index) => {
      return (
          <FullCardComponent
            key={index} 
            icon={item.icon}
            title={item.key}
            startColor={Colors.orangeStart}
            stopColor={Colors.orangeStop}
          >
            <View style={[styles.fullCardInnerColumn, styles.fullCardInnerColumnLeft]}>
               <Text style={styles.fullCardBody}>{'  '}{item.description}</Text>
            </View>
            <View style={[styles.fullCardInnerColumn, styles.fullCardInnerColumnRight]}>
              <AnimatedBar
                progress={this.state.progress}
                height={10}
                borderColor="#DDD"
                fillColor="tomato"
                barColor={Colors.white}
                borderRadius={5}
              />
            </View>           
          </FullCardComponent>
        )
    });
  }

  render() {
    console.log(this.state.progress);
    const { navigation } = this.props;
    return (
        <UserCard  {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View>
          <Text>Visitas</Text>
            {this.renderTaskList(tasks)}
            {this.renderPendingList(pending)}
          </View>
        </UserCard>
      );
    }
}


export default VisitasComponent;