'use strict';

import React, { Component } from 'react';
import { ApplicationStyles as styles, Images, Colors } from './../Themes';
import { LinearGradient } from 'expo';
import moment from "moment";
import 'moment/locale/es';
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';

moment.locale('es');

import UserMenu from './UserMenu';

class UserCard extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	menu:false
	  };
	}

	toogleMenu = () => {
		if (this.state.menu === false)
			this.setState({menu:true});
		else
			this.setState({menu:false});
	}

	hideMenu = () => {
			this.setState({menu:false});
	}


	render() {
		const{ props } = this;
    	const { children } = props;
		return (
		  <View>
        <ScrollView style={styles.mainScrollContainer}>
			    <LinearGradient
			          colors={[Colors.userCardStart, Colors.userCardStop]}
			        >
						<View style={styles.userCardTopBar}>
							<View style={styles.row}>
								<TouchableOpacity style={styles.menuIconContainer} activeOpacity = { .5 } onPress={()=>this.toogleMenu()}>
						        <Image
										style={styles.userCardMenuIcon}
										source={Images.menuIcon}
						        	/>
					      </TouchableOpacity>
								<TouchableOpacity activeOpacity = { .5 } onPress={()=>this.props.navigation.navigate('PriceList')}>
									<Image
										style={styles.userCardImageLogo}
										source={Images.logo}
									/>
					      </TouchableOpacity>
								<Image
									style={styles.userCardNavIcon}
									source={Images.qr}
								/>
								<Image
									style={styles.userCardNavIcon}
									source={Images.location}
								/>
								<Image
									style={styles.userCardNavIcon}
									source={Images.notification}
								/>
							</View>
							<View style={[styles.row, styles.pbDefault]}>
								<View style={[styles.column, styles.userCardPhotoContainer]}>
									<Image 
										style={styles.userCardPhoto}
										resizeMode='cover'
										borderRadius={100}
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
					<View style={[styles.userCardfloatMenu, this.state.menu ? styles.MenuShow : styles.MenuHide]}>
						<UserMenu {...props} hideMenu={this.hideMenu}></UserMenu>
			    </View>
					{children}
	      </ScrollView>
		  </View>
		);
	}
}


export default UserCard;