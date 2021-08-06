import React from 'react';

import { ScrollView, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


import { styles } from './styles';
import Mc from './assets/mc.svg';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

type ICard = {
  cardId: string,
  bandeira: string,
  typo: 'DEBIT' | 'CREDITeDEBIT'
  limit: 'NoActive' | number ,
  amount: number
}


export const Mycards = () => {

  return (
    <ScrollView 
      horizontal 
      style={styles.cardBar}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
     >

    {/*onPress={() => navigation.navigate('Card')}*/}
    <TouchableOpacity  >
      <View style={styles.card}>
          <ImageBackground source={require('./assets/card.jpg')} imageStyle={{ borderRadius: 10}} style={styles.backImage}>
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

    <TouchableOpacity  >
      <View style={styles.card}>
          <ImageBackground source={require('./assets/card.jpg')} imageStyle={{ borderRadius: 10}} style={styles.backImage}>
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