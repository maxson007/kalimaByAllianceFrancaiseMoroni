import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ButtonChoiceTheme(props){

    return(
        <TouchableOpacity onPress={ props.onPress} style={styles.button}>
            <View style={{flex:1, flexDirection:'row', justifyContent: 'center',  alignItems: 'center',}}>
            <Image
                source={props.imageIcon}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}> { props.title} </Text>
            </View>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 50,
        margin:5,
        borderRadius: 32,
        borderColor: '#8c8d8f',
        borderStyle: 'solid',
        borderWidth: 3,
        backgroundColor: '#da002e',
    },
    image:{
        flex:1,
        width: 38,
        height: 37,

    },
    title: {
        flex: 3,
        color: '#ffffff',
        fontSize: 15,
      //  textAlign: 'center',
        fontWeight: '700',
    },
});
