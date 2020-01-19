import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image,FlatList,TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {ADD_SURVEY_RESPONSE} from '../../constants/ActionTypes'
import TabNavigator from "../../ navigation/TabNavigator";

class WhyLearningScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isCompleted: false,
            surveyResponse: {
                languageToLearn: null,
                dialectToLearn: null,
                whyLearnLanguage: null
            }
        }
        this._addSurveyResponse = this._addSurveyResponse.bind(this)

    }
    static navigationOptions = {
        header: null,
        mode: 'modal',
        //  headerMode: 'none',
    };

    _addSurveyResponse(whyLearnLanguage) {
        const surveyResponse= this.props.navigation.state.params.surveyResponse;
        surveyResponse.whyLearnLanguage=whyLearnLanguage;
        this.setState({surveyResponse, isCompleted:true});
        const action = { type: ADD_SURVEY_RESPONSE, value: surveyResponse };
        this.props.dispatch(action);
    }
    render() {

        const data = [
            {
                icon: require("../../assets/images/screens/sac.png"),
                text: 'Ecole'
            },
            {
                icon: require("../../assets/images/screens/travel.png"),
                text: 'Voyages'
            },
            {
                icon: require("../../assets/images/screens/family.png"),
                text: 'Famille et amis'
            },
            {
                icon: require("../../assets/images/screens/museum.png"),
                text: 'Culture'
            },
            {
                icon: require("../../assets/images/screens/salary.png"),
                text: 'Opportunités'
            },
            {
                icon: require("../../assets/images/screens/chemistry.png"),
                text: 'Autres'
            }
        ];
        if(this.state.isCompleted) return (<TabNavigator/>);
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.textViewPourquoiApprends}>
                    <Text style={styles.pourquoiApprends}>Pourquoi apprends-tu une langue ?</Text>
                </View>
                <View style={styles.gridContainer}>
                    <FlatList
                        data={data}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => this._addSurveyResponse(item.text)} style={{
                                flex: 1,
                                flexDirection: 'column',
                                margin: 15,
                                alignItems: 'center'
                            }}>
                                <Image style={styles.imageItem} source={item.icon}/>
                                <Text style={styles.gridText}> {item.text} </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={styles.imageLogoView}>
                    <Image style={{width:200,resizeMode: 'contain'}} source={require('../../assets/logos/logoalliance.png')}/>
                </View>
            </SafeAreaView>
        )
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
    textViewPourquoiApprends: {
        //flex: 1,
        top: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    pourquoiApprends: {
        color: "#db002e",
        fontSize: 35,
        fontWeight: '700',
        textAlign: 'center'
    },
    imageItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridText:{
        color: '#da002e',
        fontSize: 20,
        fontWeight: '700',
    },
    gridContainer: {
        justifyContent: 'center',
        //alignItems: 'center',
       // width: '100%',
        flex: 4,
        paddingTop: 40,
    },
});

const mapStateToProps = (state) => {
    return {
        surveyResponse: state.surveyResponse
    }
};
export default connect(mapStateToProps)(WhyLearningScreen)
