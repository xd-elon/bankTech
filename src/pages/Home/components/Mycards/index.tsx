import React from 'react';

import { ScrollView, Text, View } from 'react-native';

import { styles } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export const Mycards = () => {

  return (
    <ScrollView 
      horizontal 
      style={styles.cardBar}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
     >

      <View style={styles.card}>
        <View style={styles.cardNumbox}>
          <Text style={styles.cardNum}>1962</Text>
        </View>
        <View style={styles.cardIconNameBox}>
          <Icon name="cc-mastercard" size={30} color="#efefef" />
          <Text style={styles.cardIconNameText}>Mastercard</Text>
        </View>
        <View style={styles.cardLimitBox}>
          <Text style={styles.cardLimiteText}>Limite disponivel</Text>
          <Text style={styles.cardLimiteValue}>R$ 1.846,44</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardNumbox}>
          <Text style={styles.cardNum}>1962</Text>
        </View>
        <View style={styles.cardIconNameBox}>
          <Icon name="cc-mastercard" size={30} color="#efefef" />
          <Text style={styles.cardIconNameText}>Mastercard</Text>
        </View>
        <View style={styles.cardLimitBox}>
          <Text style={styles.cardLimiteText}>Limite disponivel</Text>
          <Text style={styles.cardLimiteValue}>R$ 1.846,44</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardNumbox}>
          <Text style={styles.cardNum}>1962</Text>
        </View>
        <View style={styles.cardIconNameBox}>
          <Icon name="cc-mastercard" size={30} color="#efefef" />
          <Text style={styles.cardIconNameText}>Mastercard</Text>
        </View>
        <View style={styles.cardLimitBox}>
          <Text style={styles.cardLimiteText}>Limite disponivel</Text>
          <Text style={styles.cardLimiteValue}>R$ 1.846,44</Text>
        </View>
      </View>

    


    </ScrollView>
   );
};