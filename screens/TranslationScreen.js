import React from 'react';
import {StyleSheet, Text, Image, View, SafeAreaView, TextInput, FlatList, ActivityIndicator, Platform} from 'react-native';
import {translateWordFrenchInComorian} from "../Api/swadriiApi";
import { Searchbar ,List} from 'react-native-paper';
import * as Speech from 'expo-speech';

export default class TranslationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.searchedWord = "";

        this.state = {
            shikomoriWords: []
        }
    }
    listen(word) {
        Speech.speak(word);
    }
    static navigationOptions = {
        title: 'Traduction'
    };

    _loadTranslate() {
        if (this.searchedWord.length > 0) {
            this.setState({ isLoading: true })
            translateWordFrenchInComorian(this.searchedWord).then(data => {
                this.setState({
                    shikomoriWords: data.swadrii.word.ShikomoriWord,
                    isLoading: false
                })
            })
        }
    }

    _searchTextInputChanged(word) {
        this.searchedWord = word;
    }
    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <View style={{width: '100%', marginTop: Platform.OS === 'ios' ? 20 : 40}}>
                    <Text style={{color: '#da002e', fontSize: 20, fontWeight: '700', marginLeft: 41}}>
                        Mot Français
                    </Text>

                    <View style={styles.textInputView}>
                        <Searchbar
                            style={styles.textInput}
                            placeholder="Entrez un mot"
                            onChangeText={(text) => this._searchTextInputChanged(text)}
                            onSubmitEditing={() => this._loadTranslate()}
                        />
                    </View>
                </View>

                <View style={{width: '100%', marginTop:40}}>
                    <Text style={{color: '#8C8D8F', fontSize: 20, fontWeight: '700', marginLeft: 41}}>
                        Mots Comoriens
                    </Text>
                    <View style={{marginLeft: 30}}>
                        <List.Section>
                            <List.Subheader >Résultat</List.Subheader>
                        <FlatList
                            data={this.state.shikomoriWords}
                            renderItem={({ item }) =>  <List.Item
                                title={item.word}
                                onPress={()=>this.listen(item.word)}
                                description={item.category}
                            />}
                            keyExtractor={item => item.id.toString()}
                        />
                        </List.Section>
                        {this._displayLoading()}
                    </View>
                </View>
{/*                <View style={{alignItems: 'center', marginTop: 40}}>
                    <TouchableOpacity style={styles.button}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.buttonText}> Traduire </Text>
                            <Image style={{marginLeft: 10}}
                                   source={require('../assets/images/screens/translate/two-way-arrows.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', margin: 10}}>
                    <TouchableOpacity style={styles.buttonGrey}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.buttonText}> Ecouter </Text>
                            <Image style={{marginLeft: 10, width:25}}  resizeMode="contain"
                                   source={require('../assets/images/screens/translate/audio-speaker-on.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>*/}
            </SafeAreaView>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInputView: {
        alignSelf: 'center',
    },
    button: {
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 281,
        height: 46,
        borderRadius: 15,
        backgroundColor: '#da002e',
    },
    buttonGrey: {
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 281,
        height: 46,
        borderRadius: 15,
        backgroundColor: '#8C8D8F',
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
    },
    textInputLabel: {
        fontSize: 20,
        fontWeight: '700',
        color: '#da002e'
    },
    textInput: {
        height: 40,
        width: '80%',
        borderColor: '#da002e',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff'
    },
    textInputResult: {
        height: 140,
        width: '80%',
        borderColor: '#8C8D8F',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff'
    }
});
