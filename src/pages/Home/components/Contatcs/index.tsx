import React from 'react';

import { ScrollView, View } from 'react-native';

import { styles } from './styles';


export const Contatcs = () => {

  return (
    <ScrollView 
      horizontal 
      style={styles.cardBarContacts}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
     >

      <View style={styles.cardContacs}>
      </View>

      <View style={styles.cardContacs}>
      </View>

      <View style={styles.cardContacs}>
      </View>

      <View style={styles.cardContacs}>
      </View>

      <View style={styles.cardContacs}>
      </View>

      <View style={styles.cardContacs}>
      </View>

      <View style={styles.cardContacs}>
      </View>


    </ScrollView>
   );
};