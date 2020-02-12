import React from "react";
import {SafeAreaView, StyleSheet, View, Text, Image, ActivityIndicator, FlatList} from "react-native";
import ButtonChoiceTheme from "../components/ButtonChoiceTheme";

import {getThemeFromApi} from "../Api/MuhogoApi";

const data=[
    {
        icon: require("../assets/images/screens/theme/base.png"),
        libelle: 'J’apprends les bases'
    },
    {
        icon: require("../assets/images/screens/theme/handshake.png"),
        libelle: 'Se saluer et se présenter'
    },
    {
        icon: require("../assets/images/screens/theme/road.png"),
        libelle: 'Demander son chemin'
    },
    {
        icon: require("../assets/images/screens/theme/taxi.png"),
        libelle: 'Utiliser les transports'
    },
    {
        icon: require("../assets/images/screens/theme/give.png"),
        libelle: 'Déclarer sa flamme'
    },
    {
        icon: require("../assets/images/screens/theme/fast-food.png"),
        libelle: 'Commander au restaurant'
    },
    {
        icon: require("../assets/images/screens/theme/sports.png"),
        libelle: 'Parler de ses loisirs'
    }
];
export default class ChooseActivityThemeScreen extends  React.Component{
    constructor(props) {
        super(props);
        this.state ={ isLoading: true}

    }

    static navigationOptions = {
        title: 'Activité',

    };

    componentDidMount() {
        getThemeFromApi().then( data => {
            this.setState({
                isLoading: false,
                dataSource: data,
            });
        });

    }

    _displayChooseActivityScreen = (idTheme) => {
        this.props.navigation.navigate('ChooseActivity', {idTheme: idTheme})
    };

    render(){
        const {dataSource}=this.state;

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.choisiThematiqueTextView}>
                    <Text style={styles.choisiThematiqueText}>
                        Je choisis un une thématique
                    </Text>
                </View>

                <FlatList
                    style
                    data={dataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.buttonView}>
                            <ButtonChoiceTheme onPress={ ()=>this._displayChooseActivityScreen(item.id)} imageIcon={{uri: item.icon}} title={item.libelle} />
                        </View>
                    )}
                />
            </SafeAreaView>
        );
    }
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
        justifyContent: 'center',
        width: '80%',
        alignSelf: 'center'
    },
    choisiThematiqueText: {
        color: "#db002e",
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center'
    }
});
