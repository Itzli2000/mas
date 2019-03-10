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
} from 'react-native';


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
    }, 1000);
  }

  renderTaskList = (data) => {
    return <FlatList
            data={data}
            renderItem={({item}) => <Text style={styles.flatItem}>{item.key}</Text>}
          />
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex:1}}> 
        <View style={styles.topBar}></View>
        <Image
            style={styles.imageLogo}
            source={require('./../../../assets/images/logo.png')}
          />
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <CardComponent 
            title='Tareas por cumplir'
          >
            <View style={styles.column}>
              {this.renderTaskList(tasks)}
            </View>
            <View style={styles.column}>
              <ProgressCircle
                  percent={30}
                  radius={35}
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
            <View style={styles.column}>
              {this.renderTaskList(advance)}
            </View>
            <View style={styles.column}>
              <AnimatedBar
                progress={50}
                height={5}
                borderColor="#000"
                fillColor="green"
                barColor="blue"
                borderRadius={100}
                duration={3000}
              />
              <AnimatedBar
                progress={50}
                height={5}
                borderColor="#000"
                fillColor="#FFF"
                barColor="blue"
                borderRadius={100}
                duration={3000}
              />
              <AnimatedBar
                progress={50}
                height={5}
                borderColor="#000"
                fillColor="#efefef"
                barColor="blue"
                borderRadius={100}
                duration={3000}
              />
            </View>
          </CardComponent>
          <CardComponent 
            title='Pendientes'
          >
            <View style={styles.column}>
              {this.renderTaskList(pending)}
            </View>
            <View style={styles.column}>
            </View>
          </CardComponent>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  scrollViewContainer: {
    flexGrow: 0.9,
  },
  topBar: {
    backgroundColor: '#292b33',
    minHeight: 80,
  },
  imageLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    top: 10,
    left: 50,
  },
  column: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  flatItem: {
    padding: 5,
    fontSize: 13,
    height: 30,
    color: '#000',
  },
});


export default HomeComponent;