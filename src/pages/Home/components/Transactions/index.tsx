import React from 'react';

import { ScrollView, Text, View } from 'react-native';

import { styles } from './styles';
import Pix from './assets/pix.svg';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export const Transactions = () => {

  return (
    <ScrollView 
      horizontal 
      style={styles.cardBarTransaction}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
     >

      <View style={styles.cardTransaction}>
        <View style={styles.cardTransactionBox}>
          <Pix height={14} width={14} fill="#efefef"/>
          <Text style={styles.cardTransactionText}>R$1.943,21</Text>
          <Text style={styles.cardTransactionTextDesc}>KABUM.COM.BR</Text>
        </View>
      </View>

      <View style={styles.cardTransaction}>
        <View style={styles.cardTransactionBox}>
          <Icon name="credit-card" size={14} color="#efefef"/>
          <Text style={styles.cardTransactionText}>R$43,21</Text>
          <Text style={styles.cardTransactionTextDesc}>Boleto Santander</Text>
        </View>
      </View>

      <View style={styles.cardTransaction}>
        <View style={styles.cardTransactionBox}>
          <Icon name="credit-card" size={14} color="#efefef"/>
          <Text style={styles.cardTransactionText}>R$58,21</Text>
          <Text style={styles.cardTransactionTextDesc}>NETFLIX</Text>
        </View>
      </View>

      <View style={styles.cardTransaction}>
        <View style={styles.cardTransactionBox}>
          <Icon name="credit-card" size={14} color="#efefef"/>
          <Text style={styles.cardTransactionText}>R$943,21</Text>
          <Text style={styles.cardTransactionTextDesc}>TECLADO</Text>
        </View>
      </View>

    </ScrollView>
   );
};