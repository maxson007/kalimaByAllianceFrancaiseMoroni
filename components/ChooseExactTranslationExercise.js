import React, {Fragment} from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from "react-native";
import ResponseButton from "./ResponseButton";


class ChooseExactTranslationExercise extends React.Component {

    constructor(props) {
        super(props);

        this._handleOnPressResponse=this._handleOnPressResponse.bind(this);
        this._handleOnPressCheckButton=this._handleOnPressCheckButton.bind(this);
    }


    _handleOnPressResponse(item) {
        this.props.handleOnPressResponse(item);
    }
    _handleOnPressCheckButton(){
        this.props._handleOnPressCheckButton();
    }

    _renderResponseProposition() {
        if (this.props.currentExercise == null) return null;
console.log(this.props.currentExercise.listeProposition);
        return (
            <FlatList
                data={this.props.currentExercise.listeProposition}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <ResponseButton isSuccess={this.props.isUserSelectedResponse} title={item}
                                    onPress={() => this._handleOnPressResponse(item)}
                                    disabled={this.props.isUserSelectedResponse}/>
                )}
            />
        );
    }

    _renderEnonceExercice() {
        if (this.props.currentExercise!= null)
            return (
                <Fragment>
                    <Text style={styles.textInstructionExercice}>{this.props.currentExercise.enonce}</Text>
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

export default ChooseExactTranslationExercise;
