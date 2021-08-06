import React, { useState } from 'react';

import { Text, View, TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import IconHome from 'react-native-vector-icons/Feather';

Icon.loadFont();


import { styles } from './styles';

export const AbsoluteBar = () => {

  return (
    <View style={styles.absoluteBAr}>
      <TouchableOpacity style={styles.buttonAbsoluteBarClick}>
        <IconHome name="home" size={20} color="#efefef" style={{ marginLeft: 5}}/>
        <Text style={styles.absoluteText}>inicio</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name="credit-card" size={25} color="#efefef"/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name="text-document" size={25} color="#efefef"/>
      </TouchableOpacity>

      <View style={styles.perfilButton}>
        <Image source={require('./assets/perfil.png')} style={styles.image}/>
      </View>
        
    </View>
   )
};