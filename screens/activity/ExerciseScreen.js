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
import {ProgressBar, Divider} from 'react-native-paper';
import {MaterialIcons} from '@expo/vector-icons';
import CheckButton from "../../components/CheckButton";
import FinishButton from "../../components/FinishButton";
import Alert from "../../components/Alert";
import ChooseExactTranslationExercise from "../../components/ChooseExactTranslationExercise";
import TranslateSentenceExercise from "../../components/TranslateSentenceExercice";
import PairsTranslationExercise from "../../components/PairsTranslationExercise";

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
    }   , {
        identifier: 4,
        typeExercice: 'traductionPaires',
        enonceExercice: 'Tape sur les paires',
        listeMotComorien: ['Wami', 'mtru', 'mama', 'baba', 'coco', 'bahari', 'gari'],
        listeMotFrancais: ['Moi', 'personne', 'maman', 'papa', 'grand-mere', 'mer', 'voiture']
    },
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
            currentExerciseIsFinish: false,
            isUserSelectedResponse: false,
            userResponse: [],
            score: 0
        };
        this._handleOnPressResponse = this._handleOnPressResponse.bind(this);
        this._handleOnPressCheckButton = this._handleOnPressCheckButton.bind(this);
        this._handleOnPressPairs = this._handleOnPressPairs.bind(this);
    }
    static navigationOptions = {
        header: null,
        mode: 'modal',
        headerMode: 'none',
    };
    componentDidMount() {
        this.setState({isLoading: true});
        let currentExercise = ExoData[this.state.currentIndex];
        // console.log(currentExercise);
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

    _handleOnPressResponse(item) {

        if (this.state.currentExerciseType === "chooseExactTranslation") {
            let listeProposition = [item];
            let currentExercise = this.state.currentExercise;
            currentExercise.listeProposition = listeProposition;
            this.setState({
                currentExercise,
                userResponse: [item],
                disabledCheckButton: false,
                isUserSelectedResponse: true
            });
        }

        if (this.state.currentExerciseType === "translatesSentence") {
            let listeProposition = this.state.currentExercise.listeProposition;
            let index = listeProposition.indexOf(item);
            let removed = listeProposition.splice(index, 1);
            let userResponseTmp = [];
            if (this.state.userResponse === null || this.state.userResponse.length === 0) {
                userResponseTmp = [item];
            } else {
                userResponseTmp = this.state.userResponse;
                userResponseTmp.push(item)
            }
            this.setState({
                userResponse: userResponseTmp,
                disabledCheckButton: false,
                isUserSelectedResponse: true
            });
        }
    }

    _handleOnPressPairs(item) {
        let listeMotComorien = this.state.currentExercise.listeMotComorien;
        let listeMotFrancais = this.state.currentExercise.listeMotFrancais;
        let userResponseTmp = [];
        if (this.state.userResponse === null || this.state.userResponse.length === 0) {
            userResponseTmp = [item];
        } else {
            userResponseTmp = this.state.userResponse;
            userResponseTmp.push(item)
        }
        if (userResponseTmp.length < 2)
        this.setState({
            userResponse: userResponseTmp,
            isUserSelectedResponse: true
        });

        if (userResponseTmp.length === 2) {
            let index1;
            let index2;
            this.setState({
                userResponse: []
            });
            //lorsqu'on selection un mot comorien en premier
            if ((index1 = listeMotComorien.indexOf(userResponseTmp[0])) > -1) {
                let index_fr = listeMotFrancais.indexOf(userResponseTmp[1]);
                if (index1 === index_fr) {
                    listeMotComorien.splice(index1, 1);
                    listeMotFrancais.splice(index_fr, 1);
                    let currentExercise = this.state.currentExercise;
                    currentExercise.listeMotComorien = listeMotComorien;
                    currentExercise.listeMotFrancais = listeMotFrancais;
                    this.setState({
                        currentExercise,
                        isSuccessCurrentExercise: true,
                        currentExerciseIsFinish: listeMotComorien.length===0
                    });
                } else {
                    this.setState({
                        isSuccessCurrentExercise: false,
                    });
                }
            }
            //mot francais en premier
            if ((index2 = listeMotFrancais.indexOf(userResponseTmp[0])) > -1) {
                let index_km = listeMotComorien.indexOf(userResponseTmp[1]);
                if (index2 === index_km) {
                    listeMotComorien.splice(index_km, 1);
                    listeMotFrancais.splice(index2, 1);
                    let currentExercise = this.state.currentExercise;
                    currentExercise.listeMotComorien = listeMotComorien;
                    currentExercise.listeMotFrancais = listeMotFrancais;
                    this.setState({
                        currentExercise,
                        isSuccessCurrentExercise: true,
                        currentExerciseIsFinish: listeMotFrancais.length===0

                    });
                } else {
                    this.setState({
                        isSuccessCurrentExercise: false,
                    });
                }
            }
        }
    }

    _renderExercise() {
        if (this.state.currentExercise == null) return null;
        if (this.state.currentExerciseType === "chooseExactTranslation")
            return (
                <ChooseExactTranslationExercise
                    currentExercise={this.state.currentExercise}
                    handleOnPressResponse={this._handleOnPressResponse}
                    isUserSelectedResponse={this.state.isUserSelectedResponse}
                    handleOnPressCheckButton={this._handleOnPressCheckButton}
                />
            );
        if (this.state.currentExerciseType === "translatesSentence") {
            return (
                <TranslateSentenceExercise
                    currentExercise={this.state.currentExercise}
                    handleOnPressResponse={this._handleOnPressResponse}
                    isUserSelectedResponse={this.state.isUserSelectedResponse}
                    handleOnPressCheckButton={this._handleOnPressCheckButton}
                    userResponse={this.state.userResponse}
                />
            );
        }
        //traductionPaires
        if (this.state.currentExerciseType === "traductionPaires") {
            return (
                    <PairsTranslationExercise
                        currentExercise={this.state.currentExercise}
                        handleOnPressResponse={this._handleOnPressPairs}
                        isUserSelectedResponse={this.state.isUserSelectedResponse}
                        handleOnPressCheckButton={this._handleOnPressCheckButton}
                        userResponse={this.state.userResponse}
                        isPairsSuccess={this.state.isSuccessCurrentExercise}
                    />
            );
        }

    }


    _handleOnPressCheckButton() {
        this.setState({
            isSuccessCurrentExercise: (this.state.userResponse.join(" ") === this.state.currentExercise.reponseExercice),
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
                {
                     (this.state.currentExerciseType !== "traductionPaires")?
                         <Alert title={this.state.isSuccessCurrentExercise ? "Bonne réponse" : "Mauvaise réponse"}
                                type={this.state.isSuccessCurrentExercise ? "success" : "danger"}/>: null
                }

                <FinishButton onPress={() => this._handleOnPressFinishButton()}
                              isSuccess={this.state.isSuccessCurrentExercise}/>
            </Fragment>

        );
    }

    _scoringCalcule(){
        if(this.state.currentExerciseIsFinish && this.state.isSuccessCurrentExercise){
            this.setState(
                {
                    score: this.state.score+1
                }
            )
        }
    }

    _handleOnPressFinishButton() {
        this.setState({isLoading: true});
        this._scoringCalcule();
        let numberExercise = ExoData.length;
        let progressBarValue = (this.state.currentIndex + 1) / numberExercise;
        if((this.state.currentIndex + 1) >= this.state.numberExercise){
            console.log()
            this.props.navigation.navigate('ExerciseResult', {progressBarValue: progressBarValue, score:this.state.score})
            return;
        }
        let currentExercise = ExoData[this.state.currentIndex + 1];
        //console.log(currentExercise);
        let currentExerciseType = currentExercise.typeExercice;

        console.log(progressBarValue);
        this.setState(
            {
                currentExercise,
                currentExerciseType,
                progressBarValue,
                currentIndex: this.state.currentIndex + 1,
                numberExercise,
                isLoading: false,
                disabledCheckButton: true,
                isSuccessCurrentExercise: null,
                currentExerciseIsFinish: false,
                isUserSelectedResponse: false,
                userResponse: []
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

                {this._renderExercise()}

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
