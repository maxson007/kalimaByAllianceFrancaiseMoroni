import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ChooseActivityThemeScreen from "../screens/ChooseActivityThemeScreen";
import TranslationScreen from "../screens/TranslationScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import {Ionicons, MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import UserManualScreen from "../screens/UserManualScreen";
import {createStackNavigator} from "react-navigation-stack";
import ChooseActivityScreen from "../screens/activity/ChooseActivityScreen";

const ChooseActivityStackNavigator = createStackNavigator({
    ChooseActivityTheme: {
        screen: ChooseActivityThemeScreen,
        navigationOptions: {
            title: 'Thèmes',
        }
    },
    ChooseActivity: {
        screen: ChooseActivityScreen,
        navigationOptions: {
            title: 'Activités',
        }
    },

});

const TabNavigator = createBottomTabNavigator(

    {
        ChooseActivity: {
            screen: ChooseActivityStackNavigator,
            navigationOptions: {
                title: 'Activité'
            }
        },
        Translation: TranslationScreen,
        Profile: ProfileScreen,
        UserManual: UserManualScreen
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'ChooseActivity') {
                    iconName = 'ios-school';
                } else if (routeName === 'Translation') {
                    iconName = 'translate';
                    return <MaterialCommunityIcons name={iconName} size={25} color={tintColor}/>;
                } else if (routeName === 'Profile') {
                    iconName = `user${focused ? '' : '-o'}`;
                    return <FontAwesome name={iconName} size={25} color={tintColor}/>;
                } else if (routeName === 'UserManual') {
                    iconName = `file-document-box-multiple${focused ? '' : '-outline'}`;
                    return <MaterialCommunityIcons name={iconName} size={25} color={tintColor}/>;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor}/>;
            },
            tabBarColor: '#8c8d8f',
        }),
        tabBarOptions: {
            activeTintColor: '#db002e',
            inactiveTintColor: '#8c8d8f'
        },
    }
);

export default createAppContainer(TabNavigator);