import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const WordToSelect=(props)=>{
    return (
        <TouchableOpacity onPress={props.onPress} style={props.isSelected?styles.buttonSelected:styles.button}>
            <Text style={props.isSelected?styles.textSelected:styles.text}>
                {props.word}
            </Text>
        </TouchableOpacity>
    )
};

export default WordToSelect;
const styles = StyleSheet.create({
    button:{
        borderRadius:15,
        borderColor: '#97989a',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: '#ffffff',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: {height: 4, width: 1}, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 3, //IOS
        elevation: 5, // Android
        margin:5,
        height:50,
        alignItems: 'center',
        justifyContent: 'center'
    },
buttonSelected:{
    borderRadius:15,
    borderColor: '#0091ff',
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 4, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 3, //IOS
    elevation: 5, // Android
    margin:5,
    height:50,
    alignItems: 'center',
    justifyContent: 'center'
},

    text:{
        marginLeft:10,
        marginRight:10,
        fontSize: 15,
        fontWeight: '700',
        alignSelf: 'center',
        color: '#8c8d8f'}
    ,

    textSelected:{
        marginLeft:10,
        marginRight:10,
        fontSize: 15,
        fontWeight: '700',
        alignSelf: 'center',
        color: '#0091ff'}
});
