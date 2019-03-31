'use strict';

import React, { Component } from 'react';
import { ApplicationStyles as styles, Images, Colors } from './../Themes';
import { LinearGradient } from 'expo';
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';

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


	render() {
		const{ props } = this;
    	const { children } = props;
    	console.log(this.state);
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
						<Image
							style={styles.userCardImageLogo}
							source={Images.logo}
						/>
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
						<View style={styles.column, styles.userCardPhotoContainer}>
							<Image 
								style={styles.userCardPhoto}
								resizeMode='cover'
								borderRadius={100}
								source={Images.userDemo}
							/>
						</View>
						<View style={[styles.column, styles.userCardDataContainer]}>
							<Text style={styles.homeComponentDate}>Jueves 21 de febrero del 2019</Text>
						</View>
					</View>
				</View>
			</LinearGradient>
			<View style={[styles.userCardfloatMenu, this.state.menu ? styles.MenuShow : styles.MenuHide]}>
		    </View>
				{children}
	        </ScrollView>
		  </View>
		);
	}
}


export default UserCard;