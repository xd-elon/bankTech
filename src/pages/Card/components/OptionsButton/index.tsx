import React from 'react';

import {TouchableOpacity, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';

import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

export const OptionsButton = () => {
  const navigation = useNavigation();

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
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textButton}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
