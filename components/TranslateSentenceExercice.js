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

        this._handleOnPressResponse = this._handleOnPressResponse.bind(this);
        this._handleOnPressCheckButton = this._handleOnPressCheckButton.bind(this);
        this._handleOnPressCancelSelectedElement=this._handleOnPressCancelSelectedElement.bind(this);
    }


    _handleOnPressResponse(item) {
        this.props.handleOnPressResponse(item);
    }


    _handleOnPressCancelSelectedElement(selected) {  this.props.handleOnPressCancelSelectedElement(selected)}
    _handleOnPressCheckButton() {
        this.props.handleOnPressCheckButton();
    }

    _renderResponseProposition() {
        if (this.props.currentExercise == null) return null;

        return (
            <FlatList
                data={this.props.currentExercise.listeProposition}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                renderItem={({item}) => (
                    <WordToSelect onPress={()=>this._handleOnPressResponse(item)} word={item}/>
                )}
            />
        );
    }

    _renderEnonceExercice() {
        if (this.props.currentExercise != null)
            return (
                <Fragment>
                    <Text style={styles.textInstructionExercice}>{this.props.currentExercise.enonce}</Text>
                    <Text style={styles.textAtraduire}>
                        {this.props.currentExercise.phraseTraduire}
                    </Text>
                </Fragment>
            )
    }

    _renderResponseView(){
        let wordArray = this.props.userResponse;
        //console.log(wordArray);
        if(wordArray==null)return;
        let lengthHalf = wordArray.length / 2;
        let part1=[];
        let part2=[];
        if(lengthHalf>2){
             part1 = wordArray.slice(0, lengthHalf);
             part2 = wordArray.slice(lengthHalf, wordArray.length);
        }else{
            part1 = wordArray;
        }
        return (
            <Fragment>
                <View style={{flexDirection: 'row', width: '95%', height: 60}}>
                    {
                        part1.map(
                            (value, index)=> {
                                return <WordToSelect key={index} onPress={()=>this._handleOnPressCancelSelectedElement(value)}  word={value}/>;
                            }
                        )
                    }
                </View>
                <Divider style={{borderWidth: 1, borderColor: '#97989a'}}/>
                <View style={{flexDirection: 'row', width: '95%', height: 60}}>
                    {
                        part2.map(
                            (value, index)=> {
                                return <WordToSelect key={index} onPress={()=>this._handleOnPressCancelSelectedElement(value)}  word={value}/>;
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
