import React, { Component } from 'react';
import ProgressCircle from 'react-native-progress-circle';
import AnimatedBar from "react-native-animated-bar";
import FullCardComponent from './../../../components/FullCardComponent';
import UserCard from './../../../components/UserCard';
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
  {key: '5 visitas de 10 por día'},
  {key: '30 visitas al mes'},
  {key: '5 reportes de entrega'},
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
    return <FlatList
            data={data}
            renderItem={({item}) => <Text style={styles.fullCardInnerFlatItem}>{item.key}</Text>}
          />
  }

  render() {
    console.log(this.state.progress);
    const { navigation } = this.props;
    return (
        <UserCard  {...this.props} userCardData={()=>this.renderUserCardData()}>
          <Text h3 style={styles.userCardUserName}>Bienvenido Carlos Morales</Text>
          <View>
            <FullCardComponent 
              title='Tareas por cumplir'
            >
              <View style={[styles.fullCardInnerColumn, styles.fullCardInnerColumnLeft]}>
                {this.renderTaskList(tasks)}
              </View>
              <View style={[styles.fullCardInnerColumn, styles.fullCardInnerColumnRight]}>
                <ProgressCircle
                    percent={30}
                    radius={screenWidth <= 600 ? 35 : 45}
                    borderWidth={10}
                    color="#3399FF"
                    shadowColor="#cacbce"
                    bgColor="#fff"
                >
                    <Text style={{ fontSize: 18 }}>{'30%'}</Text>
                </ProgressCircle>
              </View>
            </FullCardComponent>
            <FullCardComponent 
              title='Avance'
            >
              <View style={[styles.fullCardInnerColumn, styles.fullCardInnerColumnLeft]}>
                {this.renderTaskList(advance)}
              </View>
              <View style={[styles.fullCardInnerColumn, styles.fullCardInnerColumnRight]}>
                <AnimatedBar
                  progress={this.state.progress}
                  height={screenWidth <= 600 ? 7 : 10}
                  borderColor="#c8ced6"
                  fillColor="#c8ced6"
                  barColor="#3887b8"
                  borderRadius={100}
                />
                <AnimatedBar
                  progress={this.state.progress}
                  height={screenWidth <= 600 ? 7 : 10}
                  borderColor="#c8ced6"
                  fillColor="#c8ced6"
                  barColor="#6e8f82"
                  borderRadius={100}
                />
                <AnimatedBar
                  progress={this.state.progress}
                  height={screenWidth <= 600 ? 7 : 10}
                  borderColor="#c8ced6"
                  fillColor="#c8ced6"
                  barColor="#3887b8"
                  borderRadius={100}
                />
              </View>
            </FullCardComponent>
            <FullCardComponent 
              title='Pendientes'
            >
              <View style={[styles.fullCardInnerColumn, styles.fullCardInnerColumnLeft]}>
                {this.renderTaskList(pending)}
              </View>
              <View style={[styles.fullCardInnerColumn, styles.fullCardInnerColumnRight]}>
              </View>
            </FullCardComponent>
          </View>
        </UserCard>
      );
    }
}


export default PriceListComponent;