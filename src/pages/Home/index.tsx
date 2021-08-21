import React from 'react';

import {SafeAreaView, Text, View, StatusBar} from 'react-native';

import {AmountView} from './components/Amount';
import {OptionActions} from './components/OptionActions';
import {Mycards} from './components/Mycards';
import {Transactions} from './components/Transactions';
import {Contatcs} from './components/Contatcs';
import {AbsoluteBar} from './components/AbsoluteBar';

import {styles} from './styles';

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#212121" />
      <View style={styles.content}>
        <Text style={styles.amountBarName}>Olá, Alan</Text>
        <AmountView />
      </View>

      <View style={styles.optiosContent}>
        <OptionActions />
      </View>

      <View style={styles.cardContent}>
        <View style={styles.cardContentText}>
          <Text style={styles.cardBarTextSmall}>Meus cartões</Text>
          <Text style={styles.cardBarTextLittle}>Ver todos</Text>
        </View>
        <Mycards />
      </View>

      <View style={styles.cardTransactionContent}>
        <View style={styles.cardTransactionContentText}>
          <Text style={styles.cardBarTextSmall}>Transações recentes</Text>
          <Text style={styles.cardBarTextLittle}>Ver todos</Text>
        </View>
        <Transactions />
      </View>

      <View style={styles.cardContactConctent}>
        <View style={styles.cardTransactionContentText}>
          <Text style={styles.cardBarTextSmall}>Contatos</Text>
          <Text style={styles.cardBarTextLittle}>Ver todos</Text>
        </View>
        <Contatcs />
      </View>

      <View style={styles.absoluteBox}>
        <AbsoluteBar />
      </View>
    </SafeAreaView>
  );
};
