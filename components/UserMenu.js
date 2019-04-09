'use strict';

import React, { Component } from 'react';
import { ApplicationStyles as styles, Images, Colors, Metrics } from './../Themes';
import { LinearGradient } from 'expo';
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const menuItems=[
    {
      name: 'Precios',
      icon: 'usd',
      navigate: 'PriceList'
    },
    {
      name: 'Ventas',
      icon: 'line-chart',
      navigate: 'Home'
    },
    {
      name: 'Exhibiciones',
      icon: 'shopping-basket',
      navigate: 'Home'
    },
    {
      name: 'Inventarios',
      icon: 'archive',
      navigate: 'Visitas'
    },
    {
      name: 'Encuestas',
      icon: 'clipboard',
      navigate: 'Encuestas'
    },
    {
      name: 'Generales',
      icon: 'cog',
      navigate: 'PriceList'
    },
    {
      name: 'Tareas',
      icon: 'list-alt',
      navigate: 'PriceList'
    },
    {
      name: 'Planogramas',
      icon: 'tasks',
      navigate: 'PriceList'
    },
    {
      name: 'Ayuda y soporte técnico',
      icon: 'question-circle',
      navigate: 'PriceList'
    },
    {
      name: 'Firmas',
      icon: 'pencil',
      navigate: 'PriceList'
    },
    {
      name: 'Chat',
      icon: 'comment',
      navigate: 'PriceList'
    },
 ]

 const menuBottom = [
   {
     name: 'Cerrar',
     icon: 'times',
     navigate: 'Login'
   },
   {
     name: 'Sincronizar',
     icon: 'cloud-upload',
     navigate: 'PriceList'
   },
   {
     name: 'Cerrar Sesión',
     icon: 'times',
     navigate: 'Login'
   },
 ]

class UserMenu extends Component { 
  constructor(props) {
    super(props);
  
    this.state = {};
  }


  renderMenuList = (data, order) => {
    return  data.map((item, index) => {
      return (
        <TouchableOpacity key={index} activeOpacity = { .5 } onPress={()=>{this.props.hideMenu();this.props.navigation.navigate(item.navigate)}}>
          <View 
           style={styles.menuLinks} 
          >
           <View style={order === 1 ? styles.menuIconsContainer : styles.menuIconsContainerBottom}>
             <Icon name={item.icon} style={ order === 1 ? styles.menuIcons : styles.menuIconsBottom}/> 
           </View>
           <Text style={styles.menuLinksText}>{'  '}{item.name}</Text>
          </View>
        </TouchableOpacity>
        )
    });
  }

  render() {
    const {props} = this;
    return (
      <View style={[styles.column, styles.cardfloatMenuData]}>
        <View style={[styles.row, styles.menuUserData]}>
          <View style={[styles.column, styles.menuUserPhotoContainer]}>
            <Image 
              style={styles.menuUserPhoto}
              resizeMode='cover'
              borderRadius={100}
              source={Images.userDemo}
              />
          </View>
          <View style={[styles.column, styles.menuUserDataContainer]}>
            <Text h3 style={styles.menuUserUserName}>Carlos Morales</Text>
            <Text h3 style={styles.menuUserUserSubtitle}>Ver tus datos</Text>
          </View>
        </View>
          <View>{this.renderMenuList(menuItems, 1)}</View>
          <View style={styles.menuListBottom}>{this.renderMenuList(menuBottom, 2)}</View>
          
      </View>
    );
  }
}


export default UserMenu;