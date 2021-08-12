import React from 'react';
import { SafeAreaView, Text, View, StatusBar, ImageBackground} from 'react-native';

import { Transactions } from './components/Transactions';
import { Faturas } from './components/Faturas';
import { OptionsButton } from './components/OptionsButton';
import { BlueContent } from './components/BlueContent'

import { styles } from './styles';

export const Card = () => {
  return (
     <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor='#2A62FF'/>

       <View style={styles.blueBox}>
          <BlueContent/>
       </View>
       
       <View style={styles.blackBox}>
         <View style={styles.cardTransactionContent}>
              <View style={styles.cardTransactionContentText}>
                <Text style={styles.cardBarTextSmall}>Serviços mais utilizados</Text>
              </View>
              <Transactions />
          </View>

          <View style={styles.cardFaturaContent}>
              <View style={styles.cardFaturaContentText}>
                <Text style={styles.cardBarTextSmall}>Faturas</Text>
                <Text style={styles.cardBarTextLittle}>Ver todos</Text>
              </View>
              <Faturas />
          </View>

          <View>
            <OptionsButton/>
          </View>


       </View>

  



     </SafeAreaView>
   );
};
