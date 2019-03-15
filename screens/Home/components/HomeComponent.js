import React, { Component } from 'react';
import ProgressCircle from 'react-native-progress-circle';
import AnimatedBar from "react-native-animated-bar";
import CardComponent from './../../../components/CardComponent';

import {
  StyleSheet,
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
            renderItem={({item}) => <Text style={styles.flatItem}>{item.key}</Text>}
          />
  }

  render() {
    console.log(this.state.progress);
    const { navigation } = this.props;
    return (
      <View style={{height:screenHeight}}> 
        <View style={styles.topBar}>
          <Image
            style={styles.navIcon}
            source={require('./../../../assets/images/qr.png')}
          />
          <Image
            style={styles.navIcon}
            source={require('./../../../assets/images/location.png')}
          />
          <Image
            style={styles.navIcon}
            source={require('./../../../assets/images/notification.png')}
          />
        </View>
        <Image
            style={styles.imageLogo}
            source={require('./../../../assets/images/logo.png')}
          />
        <ScrollView>
        <Text style={styles.date}>Jueves 21 de febrero del 2019</Text>
        <Text h3 style={styles.userName}>Bienvenido Carlos Morales</Text>
        <View>
          <CardComponent 
            title='Tareas por cumplir'
          >
            <View style={[styles.column, styles.columnLeft]}>
              {this.renderTaskList(tasks)}
            </View>
            <View style={[styles.column, styles.columnRight]}>
              <ProgressCircle
                  styel={styles.progressBar}
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
            <View style={[styles.column, styles.columnLeft]}>
              {this.renderTaskList(advance)}
            </View>
            <View style={[styles.column, styles.columnRight]}>
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
            <View style={[styles.column, styles.columnLeft]}>
              {this.renderTaskList(pending)}
            </View>
            <View style={[styles.column, styles.columnRight]}>
            </View>
          </CardComponent>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    backgroundColor: '#292b33',
    minHeight: 80,
    paddingTop: 10,
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  imageLogo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    position: 'absolute',
    top: 15,
    left: 30,
  },
  navIcon: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
    marginRight: 10,
  },
  date: {
    fontSize: (screenWidth <= 600 ? 15 : 17),
    textAlign: 'right',
    paddingRight: 20,
    paddingTop: 15
  },
  userName: {
    marginTop: (screenWidth <= 600 ? 25 : 40),
    marginBottom: (screenWidth <= 600 ? 25 : 40),
    fontSize: (screenWidth <= 600 ? 17 : 20),
    textAlign: 'center',
    fontFamily: 'open-sans-extrabold',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  columnLeft: {
    width: '60%',
  },
  columnRight: {
    width: '40%',
  },
  flatItem: {
    padding: 5,
    fontSize: (screenWidth <= 600 ? 13 : 15),
    height: 30,
    color: '#000',
  },
});


export default HomeComponent;