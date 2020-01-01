import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ButtonWithFlag(props) {
    return (
        <TouchableOpacity style={styles.button}>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={styles.imageFlagView}>
                    <Image
                        source={props.imageFlagUri}
                        resizeMode="contain"
                        style={styles.imageFlag}
                    />
                </View>
                <View style={styles.titleView}>
                    <Text style={props.titleStyle ||  styles.title }>{props.title}</Text>
                </View>
                <View style={styles.arrowTriangleView}>
                    <Image
                        source={require("../assets/images/arrowTriangle.png")}
                        resizeMode="contain"
                        style={styles.arrowTriangle}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 70,
        borderRadius: 100,
        borderColor: "#db002e",
        borderWidth: 1,
        margin: 5
    },
    titleView: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: "#db002e",
        fontSize: 26
    },
    arrowTriangleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowTriangle: {
        width: 22,
        height: 41
    },

    imageFlagView:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageFlag: {
        width: 100,
        marginLeft:-8,
        height: 69,
        //alignItems:'flex-start'
    },
    rectStack: {
        width: '80%',
        height: 70,
    }

});