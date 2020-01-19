import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import ButtonPrimary from '../components/ButtonPrimary';
import SplashAnimation from '../animations/SplashAnimation';
import {connect} from "react-redux";
import TabNavigator from "../ navigation/TabNavigator";
import { enableScreens} from 'react-native-screens';
import ChoiceLanguageScreen from "./survey/ChoiceLanguageScreen";
import ChooseDialectScreen from "./survey/ChooseDialectScreen";
import WhyLearningScreen from "./survey/WhyLearningScreen";
enableScreens();
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            startSurvey: false,
            isCompletedSurvey: false,
            surveyResponse: {
                languageToLearn: null,
                dialectToLearn: null,
                whyLearnLanguage: null
            }
        };
        this._addSurveyResponse=this._addSurveyResponse.bind(this)
    }

    static navigationOptions = {
        headerShown: false
    };

    _addSurveyResponse(surveyResponse) {
        this.setState({surveyResponse});
        if(this.state.surveyResponse.languageToLearn!==null &&
            this.state.surveyResponse.dialectToLearn!==null &&
            this.state.surveyResponse.whyLearnLanguage!==null){
            this.setState({
                startSurvey: false,
                isCompletedSurvey: true,
            })
        }
    }

    _renderHomeView(){
            return (
                <SafeAreaView style={styles.container}>
                    <View style={styles.textViewApprendsGratuitement}>
                        <Text style={styles.apprendsGratuitement}>
                            Apprends gratuitement
                            les langues comoriennes et le français.
                        </Text>
                    </View>
                    <View style={styles.kLimaView}>
                        <Image style={{width: 100, height: 100, alignSelf: 'center'}}
                               source={require('../assets/logos/languageLogo.png')}/>
                        <Text style={styles.kLima}>
                            k@lima
                        </Text>
                    </View>
                    <View style={styles.buttonView}>
                        <ButtonPrimary onPress={() => {this.setState({startSurvey: true})}}
                                       style={styles.button}
                                       title="Commencer"/>
                        <ButtonPrimary style={styles.button} title="J’ai déjà un compte"/>
                    </View>
                    <View style={styles.imageLogoView}>
                        <Image style={{width: 200, resizeMode: 'contain'}}
                               source={require('../assets/logos/logoalliance.png')}/>
                    </View>
                </SafeAreaView>
            );
    }
    render() {
        if (this.props.surveyResponse.languageToLearn === null) {
            return this._renderHomeView()
        }
        if(this.state.startSurvey){
            if(this.state.surveyResponse.languageToLearn!==null && this.state.surveyResponse.dialectToLearn===null) {
                return (
                    <ChooseDialectScreen addSurveyResponse={this._addSurveyResponse} surveyResponse={this.state.surveyResponse}/>
                )
            }
            if(this.state.surveyResponse.languageToLearn!==null &&
                this.state.surveyResponse.dialectToLearn!==null &&
                this.state.surveyResponse.whyLearnLanguage===null) {
                return (
                    <WhyLearningScreen addSurveyResponse={this._addSurveyResponse} surveyResponse={this.state.surveyResponse}/>
                )
            }
            if(this.state.surveyResponse.languageToLearn===null &&
                this.state.surveyResponse.dialectToLearn===null &&
                this.state.surveyResponse.whyLearnLanguage===null){
                return (
                    <ChoiceLanguageScreen addSurveyResponse={this._addSurveyResponse} surveyResponse={this.state.surveyResponse} />
                )
            }
        }

        return <TabNavigator/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textViewApprendsGratuitement: {
        marginTop: 50,
        flex: 1,
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    apprendsGratuitement: {
        color: '#da002e',
        textAlign: 'center',
        //fontFamily: 'Malayalam MN',
        fontSize: 25,
        fontWeight: '700',
    },
    kLimaView: {
        marginTop: 10,
        width: '100%',
        //height: 95,
        flex: 1
    },
    kLima: {
        color: '#da002e',
        textAlign: 'center',
        //fontFamily: 'Malayalam MN',
        fontSize: 29,
        fontWeight: '700',

    },
    buttonView: {
        top: 50,
        flex: 3,
        alignItems: 'center',
    },

    imageLogoView: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    }
});

//export default HomeScreen;

const mapStateToProps = (state) => {
    return {
        surveyResponse: state.surveyResponse
    }
};
export default connect(mapStateToProps)(HomeScreen)
