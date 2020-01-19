import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ChoiceLanguageScreen from './screens/survey/ChoiceLanguageScreen';
import  ChooseDialectScreen from './screens/survey/ChooseDialectScreen';
import WhyLearningScreen from './screens/survey/WhyLearningScreen';
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
import  Store from './Store/configureStore';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
import { enableScreens } from 'react-native-screens';
enableScreens();

export default class App extends React.Component {
    constructor(props) {
        super(props);
    };

    render(){

        let persistor = persistStore(Store);

        return (
            <Provider store={Store}>
                <PersistGate loading={ <KalimaSplashScreen/>} persistor={persistor} >
                  <AppNavigator/>
                </PersistGate>
            </Provider>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
