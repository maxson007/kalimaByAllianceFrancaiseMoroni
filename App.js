import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ChoiceLanguageScreen from './screens/ChoiceLanguageScreen';
import  ChooseDialectScreen from './screens/ChooseDialectScreen';
import WhyLearningScreen from './screens/WhyLearningScreen';
import ChooseActivityThemeScreen from './screens/ChooseActivityThemeScreen';
import TranslationScreen from './screens/TranslationScreen';
import ProfileScreen from './screens/profile/ProfileScreen';

import { AppLoading, SplashScreen } from 'expo';
import { Asset } from 'expo-asset';
import KalimaSplashScreen from './screens/KalimaSplashScreen';
import AppNavigator from "./ navigation/AppNavigator";
import ChooseActivityScreen from "./screens/activity/ChooseActivityScreen";
import ExerciseScreen from "./screens/activity/ExerciseScreen";
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSplashReady: false,
            isAppReady: false,
        };
    };

    render(){
        if (!this.state.isSplashReady) {
            return (
                <AppLoading
                    startAsync={this._cacheSplashResourcesAsync}
                    onFinish={() => this.setState({ isSplashReady: true })}
                    onError={console.warn}
                    autoHideSplash={false}
                />
            );
        }
        if (!this.state.isAppReady) {
            return (
                <KalimaSplashScreen onLoad={this._cacheResourcesAsync}/>
            )
        }
        return (
            <Provider store={Store}>
                <AppNavigator/>
            </Provider>
        );
    }

    _cacheSplashResourcesAsync = async () => {
        const gif = require('./assets/splash.png');
        return Asset.fromModule(gif).downloadAsync();
    };

    _cacheResourcesAsync = async () => {
        SplashScreen.hide();
        const images = [
            require('./assets/logos/languageLogo.png'),
            require('./assets/logos/kalimaLogo.png'),
        ];

        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync();
        });

        await Promise.all(cacheImages);
        this.setState({ isAppReady: true });
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
