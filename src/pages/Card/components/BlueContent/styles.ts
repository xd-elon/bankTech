import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardBarBlueContent: {
        width: 380,
        height: 220,
        marginLeft: 16,
    },
    imageBack: {
        width: 500,
        height: 390,
    },
    blueContent: {
        marginTop: 35,
        marginLeft: 75,
        flexDirection: 'column',
    },


    iconBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textCard: {
        color: '#EFEFEF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    textCardSmall: {
        color: '#EFEFEF',
        fontSize: 20,
        fontWeight: 'bold',
    },


    limiteTextBox: {
        width: 350,
        marginTop: 15,
        marginLeft: 10,
    },
    limiteText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    limiteTextColor: {
        color: '#EFEFEF',
    },
    progressBar: {
        color: '#EFEFEF',
        backgroundColor: '#5480FF',
        borderRadius: 4,
        marginTop: 8,
        height: 10,
    },


    limiteValueText: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    limiteTexValuetColor: {
        color: '#EFEFEF',
        fontWeight: 'bold'
    },
    datePayBox: {
        marginLeft: 25,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    datePay: {
        width: 140,
        height: 60,
        marginTop: 20,
        flexDirection: 'column',

        borderColor: '#EFEFEF',
        borderWidth: 1,
        borderRadius: 8,
        
        alignItems: 'center'
    },
    dateNum: {
        color:  '#EFEFEF',
        fontSize: 22,
        fontWeight: 'bold'
    },
    dateText: {
        color:  '#EFEFEF',
        fontSize: 12,
        fontWeight: 'bold'
    }


})