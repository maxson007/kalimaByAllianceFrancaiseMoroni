import React, {Component} from "react";
import {SafeAreaView, StyleSheet, View, Text, Image} from "react-native";
import ButtonWithFlag from "../../components/ButtonWithFlag";

class ChooseDialectScreen extends Component {

    constructor(props) {
        super(props);
    }

    _addSurveyResponse(dialectToLearn) {
        const surveyResponse = this.props.surveyResponse;
        surveyResponse.dialectToLearn=dialectToLearn;
        this.props.addSurveyResponse(surveyResponse);
    }
    static navigationOptions = {
        headerShown: false
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
                    <ButtonWithFlag onPress={() => this._addSurveyResponse("Anjouanais")}
                                    imageFlagUri={require('../../assets/images/flags/Flag_of_Anjouan.png')}
                                    title="Anjouanais"/>
                    <ButtonWithFlag onPress={() => this._addSurveyResponse("Mohélien")}
                                    imageFlagUri={require('../../assets/images/flags/Flag_of_Mohéli.png')}
                                    title="Mohélien"/>
                    <ButtonWithFlag onPress={() => this._addSurveyResponse("Mahorais")}
                                    imageFlagUri={require('../../assets/images/flags/Flag_of_Mayotte.png')}
                                    title="Mahorais"/>
                    <ButtonWithFlag onPress={() => this._addSurveyResponse("Grand-comorien")}
                                    imageFlagUri={require('../../assets/images/flags/Flag_of_Grande_Comore.png')}
                                    titleStyle={{fontSize: 20, color: "#db002e"}} title="Grd-comorien"/>
                </View>
                <View style={styles.imageLogoView}>
                    <Image style={{width:200,resizeMode: 'contain'}} source={require('../../assets/logos/logoalliance.png')}/>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageLogoView: {
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

export default ChooseDialectScreen;
