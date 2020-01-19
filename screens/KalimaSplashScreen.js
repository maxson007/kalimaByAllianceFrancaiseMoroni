import React, { Component } from 'react';
import { View, Text, Image,Animated } from 'react-native';
import SplashAnimation from '../animations/SplashAnimation';
import FadeIn from "../animations/FadeIn";

export default class KalimaSplashScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    //flexDirection: 'row',
                    justifyContent: 'center',
                   // marginHorizontal: 40,
                }}>
                <SplashAnimation>
                    <Image
                        source={require('../assets/logos/languageLogo.png',
                        )}
                        style={{ width: 100 ,height:100, alignSelf: 'center'}}
                    />
                </SplashAnimation>
                <FadeIn>
                    <Image style={{marginTop:-100}} source={ require('../assets/logos/kalimaLogo.png')}/>
                </FadeIn>

            </View>
        );
    }
}
