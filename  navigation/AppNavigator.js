import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "../screens/HomeScreen";
import ChoiceLanguageScreen from "../screens/ChoiceLanguageScreen";
import ChooseActivityThemeScreen from "../screens/ChooseActivityThemeScreen";
import ChooseDialectScreen from "../screens/ChooseDialectScreen";
import WhyLearningScreen from "../screens/WhyLearningScreen";
import TabNavigator from "./TabNavigator";

const AppNavigator = createStackNavigator({
        Home: {
            screen: HomeScreen,
        },
        ChoiceLanguage: {
            screen: ChoiceLanguageScreen
        }
        ,
        ChooseDialect: {
            screen: ChooseDialectScreen
        }        ,
        WhyLearning: {
            screen: WhyLearningScreen
        }
        ,
        AppTabNavigator: {
            screen: TabNavigator
        }
    }
    , {
        mode: 'modal',
        headerMode: 'none',
    }
);

export default createAppContainer(AppNavigator);
