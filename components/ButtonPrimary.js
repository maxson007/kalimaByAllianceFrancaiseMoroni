import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function ButtonPrimary(props){

    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.title}> { props.title} </Text>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 70,
        margin:5,
        borderRadius: 35,
        borderColor: '#ffff',
        borderWidth: 0,
        backgroundColor: '#da002e',
    },
    title: {
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        // fontFamily: 'Malayalam MN',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: 60,
    },
});