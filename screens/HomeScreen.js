import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import ButtonPrimary from '../components/ButtonPrimary';

const HomeScreen = (props) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textViewApprendsGratuitement}>
                <Text style={styles.apprendsGratuitement}>
                    Apprends gratuitement
                    les langues comoriennes et le français.
                </Text>
            </View>
            <View style={styles.kLimaView}>
                <Text style={styles.kLima}>
                    k@lima
                </Text>
            </View>
            <View style={styles.buttonView}>
                <ButtonPrimary style={styles.button} title="Commencer"/>
                <ButtonPrimary style={styles.button} title="J’ai déjà un compte"/>
            </View>
            <View style={styles.imageLogoView}>
                <Image source={require('../assets/logos/logoalliance.png')} />
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textViewApprendsGratuitement: {
        top: 50,
        flex: 1,
        width: '100%',
    },
    apprendsGratuitement: {
        color: '#da002e',
        textAlign: 'center',
        //fontFamily: 'Malayalam MN',
        fontSize: 25,
        fontWeight: '700',
    },
    kLimaView: {
        top:30,
        width: '100%',
        //height: 95,
        flex: 1
    },
    kLima: {
        color: '#da002e',
        textAlign: 'center',
        //fontFamily: 'Malayalam MN',
        fontSize: 80,
        fontWeight: '400',
        lineHeight: 94,
    },
    buttonView: {
        top: 50,
        flex: 3,
        alignItems: 'center',
    },

    imageLogoView:{
        flex: 1,
        alignItems: 'center',
    }
});

export default HomeScreen;

