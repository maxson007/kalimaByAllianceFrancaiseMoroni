import React from 'react'
import {SafeAreaView, StyleSheet, View, Text, Platform, Image, TouchableOpacity, FlatList} from "react-native";
import {Avatar, Card, Title, Paragraph, ProgressBar, Colors} from 'react-native-paper';
import {Ionicons, MaterialCommunityIcons, FontAwesome, MaterialIcons} from '@expo/vector-icons';

class ExerciseScreen extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const ExoData = [
            {
                identifier: 1,
                typeExercice: 'traduction-exacte',
                enonceExercice: 'Choisis la traduction exacte',
                phraseTraduire: 'Je suis une fille',
                listeProposition: ['Wami mtru mama', 'Wami mtru baba', 'Wami mama', 'Wami baba'],
                reponseExercice: 'Wami mtru mama'
            },
            {
                identifier: 2,
                typeExercice: 'traduction-exacte',
                enonceExercice: 'Choisis la traduction exacte',
                phraseTraduire: 'Je suis un garcon',
                listeProposition: ['Wami mtru baba', 'Wami mtru baba', 'Wami mama', 'Wami baba'],
                reponseExercice: 'Wami mtru baba'
            },
            {
                identifier: 3,
                typeExercice: 'traduction',
                enonceExercice: 'Traduis cette phrase. ',
                phraseTraduire: 'Je suis un garcon',
                listeProposition: ['Wami', 'mtru', 'mama', 'baba', 'coco', 'bahari', 'gari'],
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
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ width:'95%', alignSelf: 'center', flexDirection: 'row'}}>
                    <View style={{width: '10%', alignSelf: 'center'}}>
                        <TouchableOpacity onPress={()=>alert("close")}>
                            <MaterialIcons name="close" size={40} color="red"/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'85%', alignSelf: 'center',marginLeft:10}}>
                        <ProgressBar progress={0.5} color="#da002e" style={{backgroundColor: '#8c8d8f', height: 20, borderRadius: 20}}/>
                    </View>
                </View>
                <View style={styles.viewInstructionExercice}>
                    <Text style={styles.textInstructionExercice}>Choisis la traduction exacte</Text>
                    <Text style={styles.textAtraduire}>
                        Je suis une fille
                    </Text>
                </View>
                <View style={{alignSelf: 'center', marginTop: 50}}>
                    <FlatList
                        data={ExoData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.chooseResponseButton}>
                                <View>
                                    <Text style={styles.textChooseResponseButton}>
                                        Wami mtru mama
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={{
                    width: '100%',
                    alignSelf: 'center',
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bottom: Platform.OS === 'ios' ? 60 : 30,
                }}>
                    <TouchableOpacity style={styles.checkButton} disabled={true}>
                        <Text style={{color: '#424d3f', fontSize: 20, fontWeight: '700'}}>Vérifier</Text>
                    </TouchableOpacity>
                </View>

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
        marginTop:50
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
    chooseResponseButton: {
        width: 294,
        height: 60,
        borderColor: '#97989a',
        borderStyle: 'solid',
        borderWidth: 2,
        margin: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        borderRadius: 15,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: {height: 12, width: 4}, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 6, //IOS
        elevation: 6, // Android
    },
    textChooseResponseButton: {
        fontSize: 15,
        fontWeight: '700',
        alignSelf: 'center',
        color: '#8c8d8f'
    },
    checkButton: {
        width: 294,
        height: 60,
        backgroundColor: '#97989a',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
});

export default ExerciseScreen;
