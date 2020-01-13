import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, MaterialCommunityIcons, FontAwesome, MaterialIcons} from '@expo/vector-icons';

// type success, danger, warning
class Alert extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <View style={ this.props.type=='success' ? styles.alertSuccess: styles.alertDanger}>
                {
                    this.props.type=='success' ?
                        <AntDesign name="checkcircleo" size={32} color="white"/>
                    :
                        <MaterialIcons name="error-outline" size={32} color="white"/>
                }
                <Text style={this.props.type=='success' ? styles.textSuccess: styles.textDanger}>
                    {this.props.title}
                </Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({


    alertSuccess: {
        flexDirection:'row',
        width: '95%',
        backgroundColor: '#16d817',
        borderRadius: 10,
        borderColor: '#16d817',
        justifyContent:'center',
        paddingTop: 12,
        paddingRight:20,
        paddingBottom: 12,
        paddingLeft: 20,
        marginTop:16,
        marginBottom: 16
    },
    textSuccess: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 10,
        alignSelf: 'center'
    },

    alertDanger: {
        flexDirection:'row',
        width: '95%',
        backgroundColor: '#da002e',
        borderRadius: 10,
        borderColor: '#da002e',
        justifyContent:'center',
        paddingTop: 12,
        paddingRight:20,
        paddingBottom: 12,
        paddingLeft: 20,
        marginTop:16,
        marginBottom: 16
    },
    textDanger: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 10,
        alignSelf: 'center'
    }

});

export default Alert;
