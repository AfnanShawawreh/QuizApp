import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

const Card = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>

};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        margin: '10%',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 5, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        width: '80%',
        height: '80%',


    }
});

export default Card;