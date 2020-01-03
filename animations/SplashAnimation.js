import React from 'react';
import {Animated} from 'react-native';

export default class SplashAnimation extends React.Component{
    constructor(){
        super();
        this.state = {fadeAnim: new Animated.Value(2)};
    }
    componentWillMount(){
        Animated.spring(
            this.state.fadeAnim,
            {
                toValue: 200,
                friction: 1,
            }
        ).start();
    }
    render(){
        return (
            <Animated.View                 // Special animatable View
                style={{
                    //backgroundColor:'red',
                    height: this.state.fadeAnim
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}