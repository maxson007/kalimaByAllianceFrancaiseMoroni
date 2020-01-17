import React from 'react'
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, FlatList} from "react-native";
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {Ionicons, MaterialCommunityIcons, FontAwesome, EvilIcons} from '@expo/vector-icons';
import CardActivity from "../../components/CardActivity";


class ChooseActivityScreen extends React.Component {

    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        header: null,
        mode: 'modal',
        headerMode: 'none',
    };

    _handleOnPressCardActivity(){
        console.log( "=============>TEST<===============")
        this.props.navigation.navigate('ExerciseStack');
    }

    render() {
        const data = [
            {
                icon: require("../../assets/images/screens/activity/african-990326_640.jpg"),
                text: 'La Famille'
            },
            {
                icon: require("../../assets/images/screens/activity/pencil-crayons-1178979-638x468.jpg"),
                text: 'Les Couleurs'
            },
            {
                icon: require("../../assets/images/screens/activity/digits-4014181_640.jpg"),
                text: 'Les Chiffres'
            },
            {
                icon: require("../../assets/images/screens/activity/cat-4748329_640.jpg"),
                text: 'Les Animaux'
            },
        ];
        return (
            <SafeAreaView>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <CardActivity onPress={()=>this._handleOnPressCardActivity()} image={item.icon} title={item.text}/>
                    )}
            />

    </SafeAreaView>
    )
        ;
    }
}

export default ChooseActivityScreen;
