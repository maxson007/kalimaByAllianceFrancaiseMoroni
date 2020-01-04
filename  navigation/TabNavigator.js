import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ChooseActivityThemeScreen from "../screens/ChooseActivityThemeScreen";
import TranslationScreen from "../screens/TranslationScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import {Ionicons, MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import UserManualScreen from "../screens/UserManualScreen";

const TabNavigator = createBottomTabNavigator(
    {
        ChooseActivityTheme: ChooseActivityThemeScreen,
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
                if (routeName === 'ChooseActivityTheme') {
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
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(TabNavigator);
