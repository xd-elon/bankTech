import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardBarButton: {
    height: 220,
    marginLeft: 16,
    flexDirection: 'column',
    marginTop: 10,
  },
  rowButton: {
    marginTop: 5,
    height: 60,
    width: 370,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  blueButton: {
    borderRadius: 3,
    backgroundColor: '#2A62FF',
    height: 50,
    width: 165,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkButton: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#efefef',
    height: 50,
    width: 165,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#efefef',
  },
  closeMove: {
    marginTop: 10,
    marginLeft: 160,
  },
});
