import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function CheckButton (props){


        return (
            <TouchableOpacity onPress={props.onPress} style={props.disabled? styles.checkButtonDisabled: styles.checkButtonEnabled} disabled={props.disabled}>
                <Text style={props.disabled?styles.text: styles.textButtonEnabled}>Vérifier</Text>
            </TouchableOpacity>
        )

}

const styles = StyleSheet.create({

    checkButtonDisabled: {
        width: 294,
        height: 60,
        backgroundColor: '#97989a',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    checkButtonEnabled: {
        width: 294,
        height: 60,
        backgroundColor: '#16d816',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text: {
        color: '#424d3f', fontSize: 25, fontWeight: '700'
    },
    textButtonEnabled: {
        color: '#ffffff', fontSize: 25, fontWeight: '700'
    }

});
export default CheckButton;
