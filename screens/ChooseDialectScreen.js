import React, { Component } from "react";
import {SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import ButtonWithFlag from "../components/ButtonWithFlag";

function ChooseDialectScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textViewjeVeuxApprendre}>
                <Text style={styles.jeVeuxApprendre}>
                    Je veux apprendre …
                </Text>
            </View>
            <View style={styles.buttonView}>
                <ButtonWithFlag imageFlagUri={require('../assets/images/Flag_of_Anjouan.png')} title="Anjouanais"/>
                <ButtonWithFlag imageFlagUri={require('../assets/images/Flag_of_Mohéli.png')} title="Mohélien"/>
                <ButtonWithFlag imageFlagUri={require('../assets/images/Flag_of_Grande_Comore.png')} titleStyle={{fontSize: 23,color: "#db002e"}} title="Grand-comorien"/>
            </View>
            <View style={styles.imageLogoView}>
                <Image source={require('../assets/logos/logoalliance.png')} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageLogoView:{
        flex: 1,
        alignItems: 'center',
    },
    buttonView: {
        flex: 3,
        alignItems: 'center',
    },
    textViewjeVeuxApprendre: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    jeVeuxApprendre: {
        color: "#db002e",
        fontSize: 35,
    }
});

export default ChooseDialectScreen;