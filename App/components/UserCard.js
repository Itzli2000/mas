'use strict';

import React, { Component } from 'react';
import { ApplicationStyles as styles, Images, Colors } from './../Themes';
import { LinearGradient } from 'expo';
import moment from "moment";
import 'moment/locale/es';
import { View, Image, TouchableOpacity, ScrollView, Text, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

moment.locale('es');

class UserCard extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  };
	}


	render() {
		const{ props } = this;
    	const { children, backColor } = props;
		return (
		  <View style={{flex: 1, minHeight: screenHeight}}>
			  <View style={[styles.row, styles.topIcons]}>
				  <TouchableOpacity style={styles.menuIconContainer} activeOpacity = { .5 } onPress={()=>this.props.toogleMenu()}>
					  <Image
					  style={styles.userCardMenuIcon}
					  source={Images.menuIcon}
					  />
				  </TouchableOpacity>
				  <TouchableOpacity activeOpacity = { .5 } onPress={()=>this.props.navigation.navigate('Home')}>
					  <Image
					  style={styles.userCardImageLogo}
					  source={Images.logo}
					  />
				  </TouchableOpacity>
					  <Image
					  style={styles.userCardNavIcon}
					  source={Images.qr}
					  />
				  <TouchableOpacity activeOpacity = { .5 } onPress={()=>this.props.navigation.navigate('Visitas')}>
					  <Image
					  style={styles.userCardNavIcon}
					  source={Images.location}
					  />
				  </TouchableOpacity>
				  <TouchableOpacity activeOpacity = { .5 } onPress={()=>this.props.navigation.navigate('Notificaciones')}>
					  <Image
					  style={styles.userCardNavIcon}
					  source={Images.notification}
					  />
				  </TouchableOpacity>
			  </View>
	        <ScrollView style={styles.mainScrollContainer} contentContainerStyle={styles.mainScrollContent}>
				   <View style={{backgroundColor: (backColor ?  backColor : ' transparent '), flex: 1}}>
				   	 <LinearGradient
				          colors={[Colors.userCardStart, Colors.userCardStop]}
				        >
							<View style={styles.userCardTopBar}>
								<View style={[styles.row, styles.pbDefault]}>
									<View style={[styles.column, styles.userCardPhotoContainer]}>
										<Image 
											style={styles.userCardPhoto}
											resizeMode='cover'
											borderRadius={screenWidth <= 600 ? 50 : 60}
											source={Images.userDemo}
											/>
									</View>
									<View style={[styles.column, styles.userCardDataContainer]}>
										<Text style={styles.userCardDate}>{moment().format('dddd LL')}</Text>
										<Text h3 style={styles.userCardUserSubtitle}>Bienvenido</Text>
										<Text h3 style={styles.userCardUserName}>Carlos Morales</Text>
									</View>
								</View>
							</View>
						</LinearGradient>
						{children}
				   </View>
		      </ScrollView>
		  </View>
		);
	}
}


export default UserCard;