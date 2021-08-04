import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',
        height: 800,
        alignItems: 'center',   
    },
    content: {
        alignItems: 'center',
    },
    amountBarName: {
        color: '#EFEFEF',
        fontSize: 19,
    },
    optiosContent: {
        height: 160,
    },


    cardContent: {
        height: 237,
        flexDirection: 'column',
    },
    cardContentText: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
    },
    cardBarTextSmall: {
        color: '#EFEFEF',
        fontSize: 19,
        fontWeight: 'bold',
    },
    cardBarTextLittle: {
        color: '#2A62FF',
        fontSize: 15,
        fontWeight: '300',
    },


    cardTransactionContent: {
        height: 136,
        flexDirection: 'column',
    },
    cardTransactionContentText: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
    },

    
    cardContactConctent: {
        height: 150,
        flexDirection: 'column',
    },
    cardContactContentText: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
    },
})