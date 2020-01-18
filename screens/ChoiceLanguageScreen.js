import React, { Component } from "react";
import {SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import ButtonWithFlag from "../components/ButtonWithFlag";

class ChoiceLanguageScreen extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        header: null,
    };
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.textViewjeVeuxApprendre}>
                    <Text style={styles.jeVeuxApprendre}>
                        Je veux apprendre …
                    </Text>
                </View>
                <View style={styles.buttonView}>
                    <ButtonWithFlag
                        onPress={() => this.props.navigation.navigate('ChooseDialect')}
                        imageFlagUri={require('../assets/images/flags/comoresFlag.png')}
                        titleStyle={{fontSize: 20, color: "#db002e"}} title="Le Comorien"/>
                    <ButtonWithFlag
                        onPress={() => this.props.navigation.navigate('WhyLearning')}
                        imageFlagUri={require('../assets/images/flags/frenchFlag.png')}
                        titleStyle={{fontSize: 20, color: "#db002e"}} title="Le Francais"/>
                </View>
                <View style={styles.imageLogoView}>
                    <Image style={{width:200,resizeMode: 'contain'}} source={require('../assets/logos/logoalliance.png')}/>
                </View>
            </SafeAreaView>
        );
    }
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
        fontWeight: '700'
    }
});

export default ChoiceLanguageScreen;
