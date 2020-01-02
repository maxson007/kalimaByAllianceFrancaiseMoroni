import React from "react";
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, FlatList} from "react-native";
import ButtonChoiceTheme from "../components/ButtonChoiceTheme";
const data=[
    {
        icon: require("../assets/images/screens/theme/base.png"),
        text: 'J’apprends les bases'
    },
    {
        icon: require("../assets/images/screens/theme/handshake.png"),
        text: 'Se saluer et se présenter'
    },
    {
        icon: require("../assets/images/screens/theme/road.png"),
        text: 'Demander son chemin'
    },
    {
        icon: require("../assets/images/screens/theme/taxi.png"),
        text: 'Utiliser les transports'
    },
    {
        icon: require("../assets/images/screens/theme/give.png"),
        text: 'Déclarer sa flamme'
    },
    {
        icon: require("../assets/images/screens/theme/fast-food.png"),
        text: 'Commander au restaurant'
    },
    {
        icon: require("../assets/images/screens/theme/sports.png"),
        text: 'Parler de ses loisirs'
    }
];
export default function ChooseThemeScreen(props){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.choisiThematiqueTextView}>
                <Text style={styles.choisiThematiqueText}>
                    Je choisis un une thématique
                </Text>
            </View>

                <FlatList
                    style
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.buttonView}>
                        <ButtonChoiceTheme imageIcon={item.icon} title={item.text} />
                        </View>
                    )}
                />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonView: {
        flex: 3,
        width: '100%',
        alignItems: 'center',
    },
    choisiThematiqueTextView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    choisiThematiqueText: {
        color: "#db002e",
        fontSize: 35,
        fontWeight: '700',
        textAlign: 'center'
    }
});