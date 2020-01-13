import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const ResponseButton=(props)=>{
    return (
        <TouchableOpacity style={props.isSuccess?styles.responseButtonSucess:styles.responseButton} onPress={props.onPress} disabled={props.disabled} >
            <View>
                <Text style={props.isSuccess?styles.textResponseButtonSucess:styles.textResponseButton}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
   responseButton: {
        width: 294,
        height: 50,
        borderColor: '#97989a',
        borderStyle: 'solid',
        borderWidth: 2,
        margin: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        borderRadius: 15,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: {height: 12, width: 4}, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 6, //IOS
        elevation: 6, // Android
    },

    responseButtonSucess: {
        width: 294,
        height: 60,
        borderColor: '#16d816',
        borderStyle: 'solid',
        borderWidth: 2,
        margin: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        borderRadius: 15,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: {height: 12, width: 4}, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 6, //IOS
        elevation: 6, // Android
    },
    textResponseButton: {
        fontSize: 15,
        fontWeight: '700',
        alignSelf: 'center',
        color: '#8c8d8f'
    },
    textResponseButtonSucess: {
        fontSize: 15,
        fontWeight: '700',
        alignSelf: 'center',
        color: '#16d816'
    },
});

export default ResponseButton;
