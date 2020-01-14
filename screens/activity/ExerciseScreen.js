import React, {Fragment} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Platform,
    ActivityIndicator,
    TouchableOpacity,
    FlatList
} from "react-native";
import {ProgressBar,Divider} from 'react-native-paper';
import { MaterialIcons} from '@expo/vector-icons';
import CheckButton from "../../components/CheckButton";
import ResponseButton from "../../components/ResponseButton";
import FinishButton from "../../components/FinishButton";
import Alert from "../../components/Alert";
import WordToSelect from "../../components/WordToSelect";

const ExoData = [
    {
        identifier: 3,
        typeExercice: 'translatesSentence',
        enonceExercice: 'Traduis cette phrase. ',
        phraseTraduire: 'Je suis un garcon',
        listeProposition: ['Wami', 'mtru', 'mama', 'baba', 'coco', 'bahari', 'gari'],
        reponseExercice: 'Wami mtru baba'
    },
    {
        identifier: 1,
        typeExercice: 'chooseExactTranslation',
        enonceExercice: 'Choisis la traduction exacte',
        phraseTraduire: 'Je suis une fille',
        listeProposition: ['Wami mtru mama', 'Wami mtru baba', 'Wami mama', 'Wami baba'],
        reponseExercice: 'Wami mtru mama'
    },
    {
        identifier: 2,
        typeExercice: 'chooseExactTranslation',
        enonceExercice: 'Choisis la traduction exacte',
        phraseTraduire: 'Je suis un garcon',
        listeProposition: ['Wami mtru baba', 'Wami mtru baba', 'Wami mama', 'Wami baba'],
        reponseExercice: 'Wami mtru baba'
    },

    {
        identifier: 4,
        typeExercice: 'traduction-paires',
        enonceExercice: 'Tape sur les paires',
        listeMotComorien: ['Wami', 'mtru', 'mama', 'baba', 'coco', 'bahari', 'gari'],
        listeMotFrancais: ['Moi', 'personne', 'maman', 'papa', 'grand-mere', 'mer', 'voiture']
    }
];


class ExerciseScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentExercise: null,
            currentExerciseType: null,
            progressBarValue: 0,
            currentIndex: 0,
            numberExercise: 0,
            isLoading: false,
            disabledCheckButton: true,
            isSuccessCurrentExercise: null,
            currentExerciseIsFinish: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        let currentExercise = ExoData[this.state.currentIndex];
        //console.log(currentExercise);
        let currentExerciseType = currentExercise.typeExercice;
        let numberExercise = ExoData.length;
        let progressBarValue = (this.state.currentIndex + 1) / numberExercise;
        //console.log(currentExercise.listeProposition);
        //  console.log(this.state);
        this.setState({
            currentExercise,
            numberExercise,
            progressBarValue,
            currentExerciseType,
            isLoading: false
        });
        // this._handleOnPressCheckButton = this._handleOnPressCheckButton.bind(this)
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }

    _handlePressResponse(item) {

        //console.log(item)
        let listeProposition = [item];
        let currentExercise = this.state.currentExercise;
        currentExercise.listeProposition = listeProposition;
        this.setState({
            currentExercise,
            disabledCheckButton: false
        });
    }

    _renderResponseProposition() {
        if (this.state.currentExercise == null) return null;
        if (this.state.currentExerciseType === "chooseExactTranslation")
            return (
                <FlatList
                    data={this.state.currentExercise.listeProposition}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <ResponseButton isSuccess={!this.state.disabledCheckButton} title={item}
                                        onPress={() => this._handlePressResponse(item)}
                                        disabled={!this.state.disabledCheckButton}/>
                    )}
                />
            );
        if (this.state.currentExerciseType === "translatesSentence") {
            return (
                <FlatList
                    data={this.state.currentExercise.listeProposition}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={3}
                    renderItem={({item}) => (
                        <WordToSelect word={item}/>
                    )}
                />
            );
        }

    }

    _renderEnonceExercice() {
        if (this.state.currentExercise != null)
            return (
                <Fragment>
                    <Text style={styles.textInstructionExercice}>{this.state.currentExercise.enonceExercice}</Text>
                    <Text style={styles.textAtraduire}>
                        {this.state.currentExercise.phraseTraduire}
                    </Text>
                </Fragment>
            )
    }

    _handleOnPressCheckButton() {
        let currentExercise = this.state.currentExercise;
        let chooseResponse = currentExercise.listeProposition[0];
        this.setState({
            isSuccessCurrentExercise: (chooseResponse == currentExercise.reponseExercice),
            currentExerciseIsFinish: true
        });
    }

    _renderCheckOrFinishButton() {
        if (!this.state.currentExerciseIsFinish)
            return (
                <CheckButton onPress={() => this._handleOnPressCheckButton()}
                             disabled={this.state.disabledCheckButton}/>
            );
        //Button Terminer
        return (
            <Fragment>
                <Alert title={this.state.isSuccessCurrentExercise ? "Bonne réponse" : "Mauvaise réponse"}
                       type={this.state.isSuccessCurrentExercise ? "success" : "danger"}/>
                <FinishButton onPress={() => this._handleOnPressFinishButton()}
                              isSuccess={this.state.isSuccessCurrentExercise}/>
            </Fragment>

        );
    }

    _handleOnPressFinishButton() {
        this.setState({isLoading: true});
        let currentExercise = ExoData[this.state.currentIndex + 1];
        //console.log(currentExercise);
        let currentExerciseType = currentExercise.typeExercice;
        let numberExercise = ExoData.length;
        let progressBarValue = (this.state.currentIndex + 1) / numberExercise;
        this.setState(
            {
                currentExercise,
                currentExerciseType,
                progressBarValue,
                currentIndex: this.state.currentIndex + 1,
                numberExercise,
                isLoading: false,
                disabledCheckButton: true,
                isSuccessCurrentExercise: false,
                currentExerciseIsFinish: false,
                userResponse: null
            }
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{width: '95%', alignSelf: 'center', flexDirection: 'row'}}>
                    <View style={{width: '10%', alignSelf: 'center'}}>
                        <TouchableOpacity onPress={() => alert("close")}>
                            <MaterialIcons name="close" size={40} color="red"/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: '85%', alignSelf: 'center', marginLeft: 10}}>
                        <ProgressBar progress={this.state.progressBarValue} color="#da002e"
                                     style={{backgroundColor: '#8c8d8f', height: 20, borderRadius: 20}}/>
                    </View>
                </View>
                <View style={styles.viewInstructionExercice}>
                    {this._renderEnonceExercice()}
                    <View style={{marginTop:10}}>
                        <View style={{flexDirection:'row', width: '95%'}}>
                            <WordToSelect word="toddddddto"/>
                            <WordToSelect word="tocdddddto"/>
                            <WordToSelect word="tocdddddto"/>
                            <WordToSelect word="tocdddddto"/>
                            <WordToSelect word="tocdddddto"/>
                        </View>

                        <Divider />
                    </View>
                </View>
                <View style={{alignSelf: 'center', marginTop: 50}}>
                    {this._renderResponseProposition()}
                </View>
                <View style={{
                    width: '100%',
                    alignSelf: 'center',
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bottom: Platform.OS === 'ios' ? 60 : 30,
                }}>
                    {this._renderCheckOrFinishButton()}
                </View>
                {this._displayLoading()}
            </SafeAreaView>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    },
    viewInstructionExercice: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 50
    },
    textInstructionExercice: {
        color: '#da002e',
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 10,
        marginTop: 10
    },
    textAtraduire: {
        fontSize: 18,
        fontWeight: '400',
    },

    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ExerciseScreen;
