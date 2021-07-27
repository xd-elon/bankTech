import React from 'react';

import { ScrollView, View } from 'react-native';

import { styles } from './styles';


export const Mycards = () => {

  return (
    <ScrollView 
      horizontal 
      style={styles.cardBar}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
     >

      <View style={styles.card}>
      </View>

      <View style={styles.card}>
      </View>

      <View style={styles.card}>
      </View>
    


    </ScrollView>
   );
};