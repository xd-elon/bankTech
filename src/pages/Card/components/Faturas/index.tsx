import React from 'react';

import { Image, ScrollView, Text, View } from 'react-native';

import { styles } from './styles';


import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

export const Faturas = () => {

  return (
    <ScrollView 
      horizontal 
      style={styles.cardBarTransaction}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
     >

      <View style={styles.cardFatura}>
        <View style={styles.BarColor}>
          {/* barra latral de cor*/ }
        </View>
        <View style={styles.textBox}>
          <View style={styles.textBox}>
            <View style={styles.dateBox}>
              <View>
                  <Text style={styles.dateTextSmall}>Julho</Text>
                   <Text style={styles.dateText}>venc: 21 jul</Text>
              </View>
              <View style={styles.atencionBox}>
                <Icon name="exclamationcircleo" size={15} color="#EFEFEF"/>
                <Text style={styles.atencionText}>Aberta</Text>
              </View>
            </View>
            <View style={styles.priceBox}>
              <Text style={styles.priceTextSmall}>R$156,53</Text>
              <Text style={styles.priceText}>ou 12x de R$ 14,30 (1,99%)</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cardFatura}>
        <View style={styles.BarColor}>
          {/* barra latral de cor*/ }
        </View>
        <View style={styles.textBox}>
          <View style={styles.textBox}>
            <View style={styles.dateBox}>
              <View>
                  <Text style={styles.dateTextSmall}>Julho</Text>
                   <Text style={styles.dateText}>venc: 21 jul</Text>
              </View>
              <View style={styles.atencionBox}>
                <Icon name="exclamationcircleo" size={15} color="#EFEFEF"/>
                <Text style={styles.atencionText}>Aberta</Text>
              </View>
            </View>
            <View style={styles.priceBox}>
              <Text style={styles.priceTextSmall}>R$156,53</Text>
              <Text style={styles.priceText}>ou 12x de R$ 14,30 (1,99%)</Text>
            </View>
          </View>
        </View>
      </View>

    </ScrollView>
   );
};