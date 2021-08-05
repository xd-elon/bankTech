import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',
        height: 900,
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
        height: 230,
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
        fontSize: 17,
        fontWeight: 'bold',
    },
    cardBarTextLittle: {
        color: '#2A62FF',
        fontSize: 13,
        fontWeight: '300',
    },


    cardTransactionContent: {
        height: 125,
        flexDirection: 'column',
    },
    cardTransactionContentText: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
    },

    
    cardContactConctent: {
        //height: 140,
        flexDirection: 'column',
    },
    cardContactContentText: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
    },


    absoluteBox: {
        //paddingBottom: 10,
        top: 655,
        position: 'absolute',
        
    }
})