import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';

import KalimaSplashScreen from './screens/KalimaSplashScreen';

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
                  <HomeScreen/>
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
