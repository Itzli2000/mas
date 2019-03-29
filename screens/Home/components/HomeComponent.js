import React, { Component } from 'react';
import ProgressCircle from 'react-native-progress-circle';
import AnimatedBar from "react-native-animated-bar";
import CardComponent from './../../../components/CardComponent';
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
const innerScroll = screenHeight - 80;


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

  renderTaskList = (data) => {
    return <FlatList
            data={data}
            renderItem={({item}) => <Text style={styles.homeComponentFlatItem}>{item.key}</Text>}
          />
  }

  render() {
    console.log(this.state.progress);
    const { navigation } = this.props;
    return (
      <View style={{height:screenHeight}}> 
        <View style={styles.homeComponentTopBar}>
          <Image
            style={styles.homeComponentNavIcon}
            source={Images.qr}
          />
          <Image
            style={styles.homeComponentNavIcon}
            source={Images.location}
          />
          <Image
            style={styles.homeComponentNavIcon}
            source={Images.notification}
          />
        </View>
        <Image
            style={styles.homeComponentImageLogo}
            source={Images.logo}
          />
        <ScrollView>
        <Text style={styles.homeComponentDate}>Jueves 21 de febrero del 2019</Text>
        <Text h3 style={styles.homeComponentUserName}>Bienvenido Carlos Morales</Text>
        <View>
          <CardComponent 
            title='Tareas por cumplir'
          >
            <View style={[styles.homeComponentColumn, styles.homeComponentColumnLeft]}>
              {this.renderTaskList(tasks)}
            </View>
            <View style={[styles.homeComponentColumn, styles.homeComponentColumnRight]}>
              <ProgressCircle
                  styel={styles.homeComponentProgressBar}
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
          </CardComponent>
          <CardComponent 
            title='Avance'
          >
            <View style={[styles.homeComponentColumn, styles.homeComponentColumnLeft]}>
              {this.renderTaskList(advance)}
            </View>
            <View style={[styles.homeComponentColumn, styles.homeComponentColumnRight]}>
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
          </CardComponent>
          <CardComponent 
            title='Pendientes'
          >
            <View style={[styles.homeComponentColumn, styles.homeComponentColumnLeft]}>
              {this.renderTaskList(pending)}
            </View>
            <View style={[styles.homeComponentColumn, styles.homeComponentColumnRight]}>
            </View>
          </CardComponent>
        </View>
        </ScrollView>
      </View>
    );
  }
}


export default HomeComponent;