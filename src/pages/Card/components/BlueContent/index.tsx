import React from 'react';

import {  ImageBackground,  Text, View } from 'react-native';
import { ProgressBar, Colors} from 'react-native-paper';

import { styles } from './styles';
import Mc from './assets/mc.svg';

export const BlueContent = () => {

  return (
    <View style={styles.cardBarBlueContent}>
      <ImageBackground  style={styles.imageBack} resizeMode="cover" source={require('./assets/cardback.png')}>   
        <View style={styles.blueContent}>
          <View style={styles.iconBox}>
            <Mc width={100} height={60} />
            <View>
              <Text style={styles.textCardSmall}>Mastercard</Text>
              <Text style={styles.textCard}>Final 1962</Text>
            </View>
          </View>

          <View style={styles.limiteTextBox}>
            <View style={styles.limiteText}>
              <Text style={styles.limiteTextColor}>Limite disponivel</Text>
              <Text style={styles.limiteTextColor}>Limite utilizado</Text>
            </View>
            <View>
                <ProgressBar progress={0.5} color="#EFEFEF" style={styles.progressBar}/> 
            </View>
            <View style={styles.limiteValueText}>
              <Text style={styles.limiteTexValuetColor}>R$1.846,44</Text>
              <Text style={styles.limiteTexValuetColor}>R$153,56</Text>
            </View>
          </View>

          <View style={styles.datePayBox}>
            <View style={styles.datePay}>
                <Text style={styles.dateNum}>21</Text>
                <Text style={styles.dateText}>Dia do vencimento</Text>
            </View>
            <View style={styles.datePay}>
                <Text style={styles.dateNum}>12</Text>
                <Text style={styles.dateText}>Melhor dia de compra</Text>
            </View>

          </View>
        </View>

      </ImageBackground>



  

    </View>
   );
};