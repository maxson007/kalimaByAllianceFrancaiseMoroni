import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function FinishButton (props){


    return (
        <TouchableOpacity onPress={props.onPress} style={props.isSuccess? styles.buttonSuccess: styles.buttonFailed} >
            <Text style={styles.text}>Terminer</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    buttonFailed: {
        width: 294,
        height: 60,
        backgroundColor: '#da002e',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonSuccess: {
        width: 294,
        height: 60,
        backgroundColor: '#16d816',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text: {
        color: '#ffffff', fontSize: 25, fontWeight: '700'
    }
});
export default FinishButton;
