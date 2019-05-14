import React, { Component } from 'react';
import AnimatedBar from "react-native-animated-bar";
import FullCardComponent from './../../../components/FullCardComponent';
import UserMenu from './../../../components/UserMenu';
import UserCard from './../../../components/UserCard';
import ProgressCircle from 'react-native-progress-circle';
import { HomeStyles as styles } from './../styles/styles';
import { ApplicationStyles as generalStyles, Colors } from './../../../Themes';

import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  Dimensions
} from 'react-native';

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

class HomeComponent extends Component {
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
            <View style={[styles.homeCardInnerColumn, styles.homeCardInnerColumnLeft]}>
               <Text style={styles.homeCardBody}>{'  '}{item.description}</Text>
            </View>
            <View style={[styles.homeCardInnerColumn, styles.homeCardInnerColumnRight]}>
              <ProgressCircle
                percent={item.percentage}
                radius={screenWidth <= 600 ? 35 : 45}
                borderWidth={10}
                color="#3399FF" 
                shadowColor="#cacbce"
                bgColor="#fff"
              >
                <Text style={{ fontSize: 18 }}>{item.percentage}</Text>
              </ProgressCircle>
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
            <View style={[styles.homeCardInnerColumn, styles.homeCardInnerColumnLeft]}>
               <Text style={styles.homeCardBody}>{'  '}{item.description}</Text>
            </View>
            <View style={[styles.homeCardInnerColumn, styles.homeCardInnerColumnRight]}>
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
    const { navigation } = this.props;
    return (
        <UserCard  {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View style={[generalStyles.userCardfloatMenu, this.props.localState.menu ? generalStyles.MenuShow : generalStyles.MenuHide]}>
            <UserMenu {...this.props}></UserMenu>
          </View>
          <View>
            {this.renderTaskList(tasks)}
            {this.renderPendingList(pending)}
          </View>
        </UserCard>
      );
    }
}


export default HomeComponent;