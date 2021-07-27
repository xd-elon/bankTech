import React from 'react';

import { ScrollView, View } from 'react-native';

import { styles } from './styles';


export const Transactions = () => {

  return (
    <ScrollView 
      horizontal 
      style={styles.cardBarTransaction}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
     >

      <View style={styles.cardTransaction}>
      </View>

      <View style={styles.cardTransaction}>
      </View>

      <View style={styles.cardTransaction}>
      </View>

      <View style={styles.cardTransaction}>
      </View>

      <View style={styles.cardTransaction}>
      </View>
    


    </ScrollView>
   );
};