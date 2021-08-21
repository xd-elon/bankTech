/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import Mc from './assets/mc.svg';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export const Mycards = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      style={styles.cardBar}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}>
      <TouchableOpacity onPress={() => navigation.navigate('Card')}>
        <View style={styles.card}>
          <ImageBackground
            source={require('./assets/card.jpg')}
            imageStyle={{borderRadius: 10}}
            style={styles.backImage}>
            <View style={styles.cardNumbox}>
              <Text style={styles.cardNum}>1962</Text>
            </View>
            <View style={styles.cardIconNameBox}>
              <Mc width={100} height={60} />
              <Text style={styles.cardIconNameText}>Mastercard</Text>
            </View>
            <View style={styles.cardLimitBox}>
              <Text style={styles.cardLimiteText}>Limite disponivel</Text>
              <Text style={styles.cardLimiteValue}>R$ 1.846,44</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Card')}>
        <View style={styles.card}>
          <ImageBackground
            source={require('./assets/card.jpg')}
            imageStyle={{borderRadius: 10}}
            style={styles.backImage}>
            <View style={styles.cardNumbox}>
              <Text style={styles.cardNum}>1962</Text>
            </View>
            <View style={styles.cardIconNameBox}>
              <Mc width={100} height={60} />
              <Text style={styles.cardIconNameText}>Mastercard</Text>
            </View>
            <View style={styles.cardLimitBox}>
              <Text style={styles.cardLimiteText}>Limite disponivel</Text>
              <Text style={styles.cardLimiteValue}>R$ 1.846,44</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
