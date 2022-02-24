import React from 'react';

import {ScrollView, View, Text, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconHand from 'react-native-vector-icons/FontAwesome';
import IconUser from 'react-native-vector-icons/Feather';
import IconTicket from 'react-native-vector-icons/Entypo';

import {styles} from './styles';
import Pix from './assets/pix.svg';

Icon.loadFont();

export const OptionActions = () => {
  return (
    <ScrollView
      horizontal
      style={styles.actionsBar}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}>
      <TouchableHighlight>
        <View style={styles.actionAlignBox}>
          <View style={styles.actionsBarImageBox}>
            <IconUser name="users" size={30} color="#355a9e" />
          </View>
          <Text style={styles.actionsBarText}>Pagar{'\n'}pessoas</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight>
        <View style={styles.actionAlignBox}>
          <View style={styles.actionsBarImageBox}>
            <Pix width={30} height={30} color="#387F76" />
          </View>
          <Text style={styles.actionsBarText}>Pix</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight>
        <View style={styles.actionAlignBox}>
          <View style={styles.actionsBarImageBox}>
            <IconHand name="handshake-o" size={30} color="#AF5947" />
          </View>
          <Text style={styles.actionsBarText}>Cobrar</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight>
        <View style={styles.actionAlignBox}>
          <View style={styles.actionsBarImageBox}>
            <Icon name="barcode-scan" size={30} color="#8F3050" />
          </View>
          <Text style={styles.actionsBarText}>Pagar{'\n'}conta</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight>
        <View style={styles.actionAlignBox}>
          <View style={styles.actionsBarImageBox}>
            <IconTicket name="v-card" size={30} color="#b33e38" />
          </View>
          <Text style={styles.actionsBarText}>Cartão de{'\n'}trasporte</Text>
        </View>
      </TouchableHighlight>
    </ScrollView>
  );
};
