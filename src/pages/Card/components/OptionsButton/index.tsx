import React from 'react';

import { Image, TouchableOpacity, Text, View } from 'react-native';

import { styles } from './styles';


import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

export const OptionsButton = () => {
  return (
    <View style={styles.cardBarButton}>

    <View style={styles.rowButton}>
      <TouchableOpacity style={styles.blueButton}>
        <Text style={styles.textButton}>Pagar Fatura</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.darkButton}>
       <Text style={styles.textButton}>Parcelar Fatura</Text>
      </TouchableOpacity>
    </View>
    
    <View style={styles.closeMove}>
      <TouchableOpacity>
        <Text style={styles.textButton}>Fechar</Text>
      </TouchableOpacity>
    </View>

    </View>
   );
};