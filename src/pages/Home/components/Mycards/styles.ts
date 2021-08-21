import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardBar: {
    width: 380,
    marginLeft: 16,
  },
  card: {
    height: 180,
    width: 360,
    marginRight: 5,
  },
  cardNumbox: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardNum: {
    color: '#efefef',
    fontSize: 19,
    fontWeight: 'bold',
    marginRight: 19,
  },
  cardIconNameBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  cardIconNameText: {
    color: '#efefef',
    fontSize: 18,
  },
  cardLimitBox: {
    flexDirection: 'column',
    marginLeft: 25,
  },
  cardLimiteText: {
    color: '#BABABA',
  },
  cardLimiteValue: {
    marginTop: 2,
    color: '#efefef',
    fontSize: 25,
    fontWeight: 'bold',
  },
  backImage: {
    height: 180,
  },
});
