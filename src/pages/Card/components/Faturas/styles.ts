import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardBarTransaction: {
        width: 380,
        height: 220,
        //backgroundColor: '#BABABA',
        marginLeft: 16,
    },
    cardFatura: {
        height: 145,
        width: 340,
        borderRadius: 7,
        backgroundColor: '#424242',
        marginRight: 10,
    flexDirection: 'row',
    },

    BarColor: {
        marginTop: 15,
        marginLeft: 10,
        height: 115,
        width: 5,
        backgroundColor: '#FF9838',
        
    },
    textBox: {
        flexDirection: 'column',
        
    },
    dateBox: {
        marginTop: 15,
        marginLeft: 15,
        width: 290,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceBox: {
        marginTop: 15,
        marginLeft: 15,
        width: 290,
        flexDirection: 'column',
    },
    dateText: {
        color: '#EFEFEF',
    },
    dateTextSmall: {
        color: '#EFEFEF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    priceText: {
        color: '#EFEFEF',
    },
    priceTextSmall: {
        color: '#EFEFEF',
        fontSize: 30,
        fontWeight: 'bold',
    },
    atencionBox: {
        width: 85,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FF9838',
        borderRadius: 15,
    },
    atencionText: {
        color: '#EFEFEF',
        marginRight: 10,
    },


})