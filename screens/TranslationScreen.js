import React from 'react';
import {StyleSheet, Text, Image, View, SafeAreaView, TextInput, TouchableOpacity, Picker, Platform} from 'react-native';

export default class TranslationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sourceLanguage: null
        }
    }
    static navigationOptions = {
        title: 'Traduction'
    };
    render() {


        return (
            <SafeAreaView style={styles.container}>
                <View style={{width: '100%', marginTop: Platform.OS === 'ios' ? 20 : 40}}>
                    <Text style={{color: '#da002e', fontSize: 20, fontWeight: '700', marginLeft: 41}}>
                        Français
                    </Text>
                    <View style={styles.textInputView}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Entrez du text"
                            multiline={true}
                            numberOfLines={4}
                        >
                        </TextInput>
                    </View>
                </View>
                <View style={{width:'100%',  alignItems:'center', marginBottom:10}}>
                    <Picker
                        selectedValue={this.state.language}
                        mode='dropdown'
                        style={{width: '80%', height:50, color: "#da002e",  marginTop: Platform.OS === 'ios' ?-5:0, marginBottom: Platform.OS === 'ios' ?20: 0 }}
                        itemStyle={{color:'#da002e', height:100 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="Anjouanais" value="anjouanais" />
                        <Picker.Item label="Grand-Comorien" value="grand-comorien" />
                        <Picker.Item label="Mahorais" value="mahorais" />
                        <Picker.Item label="Mohélien" value="mohelien" />
                    </Picker>
                </View>
                <View style={{alignItems:'center', margin: 20}}>
                    <TouchableOpacity style={styles.button}>
                        <View style={{ flex:1, flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.buttonText}> Traduire </Text>
                        <Image style={{marginLeft:10}} source={require('../assets/images/screens/translate/two-way-arrows.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{width: '100%' }}>
                    <Text style={{color: '#8C8D8F', fontSize: 20, fontWeight: '700', marginLeft: 41}}>
                        Anjouanais
                    </Text>
                    <View style={styles.textInputView}>
                        <TextInput
                            style={styles.textInputResult}
                            multiline={true}
                            editable={false}
                        >
                        </TextInput>
                    </View>
                </View>
                <View style={{alignItems:'center', margin: 20}}>
                    <TouchableOpacity style={styles.buttonGrey}>
                        <View style={{ flex:1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.buttonText}> Ecouter </Text>
                            <Image style={{marginLeft:10}} source={require('../assets/images/screens/translate/audio-speaker-on.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInputView: {
        alignItems: 'center',
    },
    button: {
        margin:5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 281,
        height: 46,
        borderRadius: 15,
        backgroundColor: '#da002e',
    },
    buttonGrey: {
        margin:5,
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
        height: 140,
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