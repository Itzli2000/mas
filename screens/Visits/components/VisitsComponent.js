import React, { Component } from 'react';
import TransparentCard from './../../../components/TransparentCard';
import UserCard from './../../../components/UserCard';
import UserMenu from './../../../components/UserMenu';
import { Button, SearchBar  } from 'react-native-elements';
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
  TouchableOpacity,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


const tasks=[
  {
    key: 'Superama Satelite',
    icon: 'map-marker',
    address: 'Avenida Siempreviva 742',
    checkIn: '11:20',
    checkOut: null,
  },
  {
    key: 'Superama Rosario',
    icon: 'map-marker',
    address: 'Avenida Siempreviva 742',
    checkIn: '17:03',
    checkOut: '19:00',
  },
  {
    key: 'Superama Tlalnepantla',
    icon: 'map-marker',
    address: 'Avenida Siempreviva 742',
    checkIn: null,
    checkOut: '0:00',
  },
 ]

class VisitsComponent extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  renderVisitsList = (data) => {
    return  data.map((item, index) => {
      return (
          <TransparentCard
            key={index} 
            icon={item.icon}
            title={item.key}
            subTitle={item.address}
            startColor={Colors.gray}
            stopColor={Colors.gray}
          >
            <View style={[styles.fullCardInnerColumn, styles.fullCardInnerColumnLeft, styles.floatRight]}>
               <View style={[styles.transparentCardBody, styles.row]}>
                 <View style={[styles.transparentCardColumn]}>
                   {item.checkIn != null && <Text style={styles.visitTextIn}><Icon name={'clock-o'} />  {moment(item.checkIn, "HH mm").format('hh:mm A')}</Text>}
                   {(item.checkOut != null && item.checkIn != null) && <Text style={styles.visitTextOut}><Icon name={'clock-o'} />  {moment(item.checkOut, "HH mm").format('hh:mm A')}</Text>}
                 </View>
                 <View style={[styles.transparentCardColumn]}>
                   {item.checkIn === null && <Button title='Entrada' onPress={()=>{this.props.checkIn()}} buttonStyle={[styles.visitButton,styles.buttonGreen]} />}
                   {item.checkOut === null && <Button title='Salida' onPress={()=>{this.props.checkOut()}} buttonStyle={[styles.visitButton,styles.buttonRed]} />}
                   {(item.checkOut != null && item.checkIn != null) && <TouchableOpacity activeOpacity = { .5 } ><Text style={styles.visitTextComplete}><Icon style={styles.visitCompleteIcon} name={'cloud-upload'} /></Text></TouchableOpacity>}
                 </View>
               </View>
            </View>           
          </TransparentCard>
        )
    });
  }

  render() {
    const { search } = this.state;
    const { navigation } = this.props;
    return (
        <UserCard  {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View style={[styles.userCardfloatMenu, this.props.localState.menu ? styles.MenuShow : styles.MenuHide]}>
            <UserMenu {...this.props}></UserMenu>
          </View>
          <View style={{backgroundColor: Colors.gray, flex:1}}>
            <SearchBar
              containerStyle={{backgroundColor: 'transparent', borderWidth: 0, borderBottomColor: 'transparent', borderTopColor: 'transparent'}}
              inputContainerStyle={{backgroundColor: 'rgba(255,255,255,1)', borderWidth: 0, borderColor: 'transparent', width: '90%', borderRadius: 10, marginLeft: 'auto', marginRight: 'auto'}}
              placeholder="Visita"
              onChangeText={this.updateSearch}
              value={search}
            />
            {this.renderVisitsList(tasks)}
          </View>
        </UserCard>
      );
    }
}


export default VisitsComponent;