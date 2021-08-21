import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#2A62FF',
    height: 900,
    alignItems: 'center',
    flexDirection: 'column',
  },
  blueBox: {
    height: 260,
    width: 550,
  },
  blackBox: {
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#212121',
    backgroundColor: '#212121',
  },

  cardTransactionContent: {
    marginTop: 20,
    height: 115,
    flexDirection: 'column',
  },
  cardTransactionContentText: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
  },
  cardBarTextSmall: {
    color: '#EFEFEF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  cardBarTextLittle: {
    color: '#2A62FF',
    fontSize: 13,
    fontWeight: '300',
  },

  cardFaturaContent: {
    marginTop: 20,
    height: 180,
    flexDirection: 'column',
  },
  cardFaturaContentText: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
  },
});
