'use strict';

import React, { Component } from 'react';
import { ApplicationStyles as styles, Images, Colors, Metrics } from './../Themes';
import { LinearGradient } from 'expo';
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import { SearchBar  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class CategoriesSelector extends Component { 
  constructor(props) {
    super(props);
  
    this.state = {
      search: '',
    };
  }


  renderCategoriesList = (data) => {
    return  data.map((item, index) => {
      return (
        <TouchableOpacity 
          key={index} 
          activeOpacity = { .5 } 
          onPress={()=>{this.props.categorieSelectedFunction(item.value)}}
        >
          <View 
           style={styles.categoriesLinks} 
          >
           <View style={styles.menuIconsContainer}>
             <Icon name={item.icon} style={ styles.menuIcons }/> 
           </View>
           <Text style={styles.categoriesLinksText}>{'  '}{item.name}</Text>
          </View>
        </TouchableOpacity>
        )
    });
  }

  render() {
    const {props} = this;
    const {listData} = props;
    return (
      <View style={[styles.column, styles.cardfloatMenuData]}>
        <ScrollView> 
          <View style={[styles.row, styles.centered, styles.imageCaptureHeader]}>
            <Text style={styles.categorieHeaderText}>Selecciona una categoría</Text>
              <SearchBar
                containerStyle={{backgroundColor: 'transparent', borderWidth: 0, borderBottomColor: 'transparent', width: '60%', borderTopColor: 'transparent'}}
                inputContainerStyle={{backgroundColor: 'rgba(255,255,255,1)', borderWidth: 0, borderColor: 'transparent', borderRadius: 10, marginLeft: 'auto', marginRight: 'auto'}}
                placeholder="Categoría"
                onChangeText={this.updateSearch}
                value={this.state.search}
              />
          </View>
          <View>{this.renderCategoriesList(listData)}</View>
        </ScrollView>
      </View>
    );
  }
}


export default CategoriesSelector;