import React from 'react';

import {ScrollView, Text, View} from 'react-native';

import {styles} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export const Transactions = () => {
  return (
    <ScrollView
      horizontal
      style={styles.cardBarTransaction}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}>
      <View style={styles.cardTransaction}>
        <View style={styles.cardTransactionBox}>
          <Icon name="credit-card" size={14} color="#efefef" />
          <Text style={styles.cardTransactionText}>Netflix</Text>
          <Text style={styles.cardTransactionText}>R$43,21</Text>
        </View>
      </View>

      <View style={styles.cardTransaction}>
        <View style={styles.cardTransactionBox}>
          <Icon name="credit-card" size={14} color="#efefef" />
          <Text style={styles.cardTransactionText}>Xbox live</Text>
          <Text style={styles.cardTransactionText}>R$43,21</Text>
        </View>
      </View>

      <View style={styles.cardTransaction}>
        <View style={styles.cardTransactionBox}>
          <Icon name="credit-card" size={14} color="#efefef" />
          <Text style={styles.cardTransactionText}>Xbox live</Text>
          <Text style={styles.cardTransactionText}>R$43,21</Text>
        </View>
      </View>

      <View style={styles.cardTransaction}>
        <View style={styles.cardTransactionBox}>
          <Icon name="credit-card" size={14} color="#efefef" />
          <Text style={styles.cardTransactionText}>Xbox live</Text>
          <Text style={styles.cardTransactionText}>R$43,21</Text>
        </View>
      </View>

      <View style={styles.cardTransaction}>
        <View style={styles.cardTransactionBox}>
          <Icon name="credit-card" size={14} color="#efefef" />
          <Text style={styles.cardTransactionText}>Xbox live</Text>
          <Text style={styles.cardTransactionText}>R$43,21</Text>
        </View>
      </View>
    </ScrollView>
  );
};
