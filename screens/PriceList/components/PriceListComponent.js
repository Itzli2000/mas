import React, { Component } from 'react';
import AnimatedBar from "react-native-animated-bar";
import FullCardComponent from './../../../components/FullCardComponent';
import UserCard from './../../../components/UserCard';
import PercentCircle from 'react-native-percent-circle';
import { ApplicationStyles as styles, Images } from './../../../Themes';

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

const advance=[
  {key: '5 visitas de 10 por día'},
  {key: '30 visitas al mes'},
  {key: '5 reportes de entrega'},
  ]

const pending=[
  {key: '5 visitas de 10 por día'},
  {key: '30 visitas al mes'},
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

  renderTaskList = (data) => {
    return  data.map((item, index) => {
      return (
          <FullCardComponent
            key={index} 
            icon={item.icon}
            title={item.key}
          >
            <View style={[styles.fullCardInnerColumn, styles.fullCardInnerColumnLeft]}>
               <Text style={styles.fullCardBody}>{'  '}{item.description}</Text>
            </View>
            <View style={[styles.fullCardInnerColumn, styles.fullCardInnerColumnRight]}>
              <PercentCircle style={{width:100, height:100}} percent={item.percentage} animationType="Quad.easeInOut"/>
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
        <PercentCircle percent={90} animationType="Quad.easeInOut"/>
          <View>
            {this.renderTaskList(tasks)}
          </View>
        </UserCard>
      );
    }
}


export default PriceListComponent;