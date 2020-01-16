import React, {Fragment} from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from "react-native";
import ResponseButton from "./ResponseButton";
import {ProgressBar, Divider} from 'react-native-paper';
import WordToSelect from "./WordToSelect";


class PairsTranslationExercise extends React.Component {

    constructor(props) {
        super(props);

        this._handleOnPressResponse = this._handleOnPressResponse.bind(this);
        this._handleOnPressCheckButton = this._handleOnPressCheckButton.bind(this);
    }


    _handleOnPressResponse(item) {
        this.props.handleOnPressResponse(item);
    }

    _handleOnPressCheckButton() {
        this.props._handleOnPressCheckButton();
    }

    _isWordSelected(item){
        if(this.props.userResponse===null) return false;
        if(this.props.userResponse.indexOf(item)!==-1) return true;
        return false;
    }

    _renderResponseProposition() {
        if (this.props.currentExercise == null) return null;
        let listePropositionTmp=this.props.currentExercise.listeMotComorien;
        let listeProposition=listePropositionTmp.concat(this.props.currentExercise.listeMotFrancais);
        listeProposition.sort(() => Math.random() - 0.5);

        console.log(listeProposition);
        return (
            <FlatList
                data={listeProposition}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                renderItem={({item}) => (
                    <WordToSelect onPress={()=>this._handleOnPressResponse(item)} word={item} isSelected={this._isWordSelected(item)}/>
                )}
            />
        );
    }

    _renderEnonceExercice() {
        if (this.props.currentExercise != null)
            return (
                <Fragment>
                    <Text style={styles.textInstructionExercice}>{this.props.currentExercise.enonceExercice}</Text>
                    <Text style={styles.textAtraduire}>
                        {this.props.currentExercise.phraseTraduire}
                    </Text>
                </Fragment>
            )
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewInstructionExercice}>
                    {this._renderEnonceExercice()}
                </View>

                <View style={{alignSelf: 'center', marginTop: 50}}>
                    {this._renderResponseProposition()}
                </View>
            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    }
});

export default PairsTranslationExercise;