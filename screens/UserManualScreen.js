import React from 'react';
import {Text, View,SafeAreaView} from 'react-native';

export default class UserManualScreen extends React.Component {
    static navigationOptions = {
        title: 'Guide d’utilisation'
    };
    render() {
        return (
            <SafeAreaView>
                <Text>
                    Guide d’utilisation de l’application.
                </Text>
            </SafeAreaView>
        );
    }
}

