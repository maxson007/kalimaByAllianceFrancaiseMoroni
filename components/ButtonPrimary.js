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
        height: 60,
        margin:5,
        borderRadius: 35,
        borderColor: '#ffff',
        borderWidth: 0,
        backgroundColor: '#da002e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#ffffff',
        // fontFamily: 'Malayalam MN',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700',
    },
});