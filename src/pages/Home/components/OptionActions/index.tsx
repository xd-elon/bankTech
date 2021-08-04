import React from 'react';

import { ScrollView, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconHand from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';

Icon.loadFont();
IconHand.loadFont();

export const OptionActions = () => {

  return (
    <ScrollView 
      horizontal 
      style={styles.actionsBar}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
     >

      <View style={styles.actionAlignBox}>
        <View style={styles.actionsBarImageBox}>
          <Icon name="barcode-scan" size={30} color="#355a9e" />
        </View>
        <Text style={styles.actionsBarText}>Pagar{"\n"}pessoas</Text>
      </View>

      <View style={styles.actionAlignBox}>
        <View style={styles.actionsBarImageBox}>
          <Icon name="barcode-scan" size={30} color="#387F76" />
        </View>
        <Text style={styles.actionsBarText}>Pix</Text>
      </View>

      <View style={styles.actionAlignBox}>
        <View style={styles.actionsBarImageBox}>
          <IconHand name="handshake-o" size={30} color="#AF5947" />
        </View>
        <Text style={styles.actionsBarText}>Cobrar</Text>
      </View>

      <View style={styles.actionAlignBox}>
        <View style={styles.actionsBarImageBox}>
          <Icon name="barcode-scan" size={30} color="#8F3050" />
        </View>
        <Text style={styles.actionsBarText}>Pagar{"\n"}conta</Text>
      </View>

      <View style={styles.actionAlignBox}>
        <View style={styles.actionsBarImageBox}>
          <Icon name="barcode-scan" size={30} color="#b33e38" />
        </View>
        <Text style={styles.actionsBarText}>Cartão de{"\n"}trasporte</Text>
      </View>

    </ScrollView>
   );
};