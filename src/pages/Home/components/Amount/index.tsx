import React, {useState} from 'react';

import {Text, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEye from 'react-native-vector-icons/Feather';

Icon.loadFont();
IconEye.loadFont();

import {styles} from './styles';

export const AmountView = () => {
  const [isVisible, setIsVisible] = useState(true);

  function handleVisibleClick() {
    setIsVisible(!isVisible);
  }

  return isVisible ? (
    <View style={styles.amountBar}>
      <Icon name="qrcode-scan" size={35} color="#efefef" />
      <Text style={styles.amountBarText}>R$1.047,39</Text>
      <TouchableOpacity onPress={handleVisibleClick}>
        <IconEye name="eye" size={35} color="#efefef" />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.amountBar}>
      <Icon name="qrcode-scan" size={35} color="#efefef" />
      <Text style={styles.amountBarTextHiden}>°°°°°°°°</Text>
      <TouchableOpacity onPress={handleVisibleClick}>
        <IconEye name="eye-off" size={35} color="#9e9e9e" />
      </TouchableOpacity>
    </View>
  );
};
