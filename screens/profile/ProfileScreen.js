import React, {Component} from "react";
import {SafeAreaView, StyleSheet, View, Text, Image} from "react-native";

export default class ProfileScreen extends Component {


    render() {

        return (
                <View style={styles.container}>
                    <View style={styles.header}>
                    </View>
                    <Image style={styles.avatar} source={{uri: 'https://i.pinimg.com/originals/38/a0/8f/38a08fb4a2db7853de0ea449a13b279d.jpg'}}/>
                    <Text style={styles.name}>Mariah SIMBEL</Text>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#da002e",
        height: 200,
        //borderBottomColor: "#8C8D8F",
       // borderBottomWidth:4
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "#8C8D8F",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 30,
        marginTop: 70,
        color: "#da002e",
        fontWeight: "700",
        alignSelf: 'center'
    }
});
