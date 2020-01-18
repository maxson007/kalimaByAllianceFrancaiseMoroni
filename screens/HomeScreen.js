import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import ButtonPrimary from '../components/ButtonPrimary';
import SplashAnimation from '../animations/SplashAnimation';
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        header: null,
        mode: 'modal',
      //  headerMode: 'none',
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.textViewApprendsGratuitement}>
                    <Text style={styles.apprendsGratuitement}>
                        Apprends gratuitement
                        les langues comoriennes et le français.
                    </Text>
                </View>
                <View style={styles.kLimaView}>
                    <Image style={{width: 100, height: 100, alignSelf: 'center'}}
                           source={require('../assets/logos/languageLogo.png')}/>
                    <Text style={styles.kLima}>
                        k@lima
                    </Text>
                </View>
                <View style={styles.buttonView}>
                    <ButtonPrimary onPress={() => this.props.navigation.navigate('ChoiceLanguage')} style={styles.button}
                                   title="Commencer"/>
                    <ButtonPrimary style={styles.button} title="J’ai déjà un compte"/>
                </View>
                <View style={styles.imageLogoView}>
                    <Image style={{width:200,resizeMode: 'contain'}} source={require('../assets/logos/logoalliance.png')}/>
                </View>
            </SafeAreaView>
        )
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textViewApprendsGratuitement: {
        marginTop: 50,
        flex: 1,
        width: '80%',
        alignSelf: 'center',
        justifyContent:'center'
    },
    apprendsGratuitement: {
        color: '#da002e',
        textAlign: 'center',
        //fontFamily: 'Malayalam MN',
        fontSize: 25,
        fontWeight: '700',
    },
    kLimaView: {
        marginTop:10,
        width: '100%',
        //height: 95,
        flex: 1
    },
    kLima: {
        color: '#da002e',
        textAlign: 'center',
        //fontFamily: 'Malayalam MN',
        fontSize: 29,
        fontWeight: '700',

    },
    buttonView: {
        top: 50,
        flex: 3,
        alignItems: 'center',
    },

    imageLogoView:{
        flex: 1,
        alignItems: 'center',
        width:'100%'
    }
});

export default HomeScreen;

