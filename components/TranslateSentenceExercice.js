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


class TranslateSentenceExercise extends React.Component {

    constructor(props) {
        super(props);

        this._handlePressResponse = this._handlePressResponse.bind(this);
        this._handleOnPressCheckButton = this._handleOnPressCheckButton.bind(this);
    }


    _handlePressResponse(item) {
        this.props.handlePressResponse(item);
    }

    _handleOnPressCheckButton() {
        this.props._handleOnPressCheckButton();
    }

    _renderResponseProposition() {
        if (this.props.currentExercise == null) return null;

        return (
            <FlatList
                data={this.props.currentExercise.listeProposition}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                renderItem={({item}) => (
                    <WordToSelect word={item}/>
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

    _renderResponseView() {
        const wordArray = this.props.currentExercise.listeProposition;
        let lengthHalf = wordArray.length / 2;
        let part1 = wordArray.slice(0, lengthHalf);
        let part2 = wordArray.slice(lengthHalf, wordArray.length);

        return (
            <Fragment>
                <View style={{flexDirection: 'row', width: '95%', height: 60}}>
                    {
                        part1.map(
                            function (value) {
                                return <WordToSelect word={value}/>;
                            }
                        )
                    }
                </View>
                <Divider style={{borderWidth: 1, borderColor: '#97989a'}}/>
                <View style={{flexDirection: 'row', width: '95%', height: 60}}>
                    {
                        part2.map(
                            function (value) {
                                return <WordToSelect word={value}/>;
                            }
                        )
                    }
                </View>
                <Divider style={{borderWidth: 1, borderColor: '#97989a'}}/>
            </Fragment>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewInstructionExercice}>
                    {this._renderEnonceExercice()}
                </View>
                <View style={{marginTop: 20, width: '85%', alignSelf: 'center'}}>
                    {this._renderResponseView()}
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

export default TranslateSentenceExercise;
