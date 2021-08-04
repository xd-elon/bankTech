import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardBar: {
        width: 380,
        height: 300,
        marginLeft: 16,
        //backgroundColor: '#BABABA',
    },
    card: {
        height: 180,
        width: 360,
        borderRadius: 9,
        backgroundColor: '#2A62FF',
        marginRight: 5,
    }, 
    cardNumbox: {
        marginTop: 15,
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
        //backgroundColor: '#BABABA',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25,
    },
    cardIconNameText: {
        marginLeft: 15,
        color: '#efefef',
        fontSize: 18,
    },
    cardLimitBox: {
        flexDirection: 'column',
        marginTop: 30,
        marginLeft: 25,
    },
    cardLimiteText: {
        color: '#BABABA',
    },
    cardLimiteValue: {
        marginTop: 5,
        color: '#efefef',
        fontSize: 25,
        fontWeight: 'bold',
    }

})