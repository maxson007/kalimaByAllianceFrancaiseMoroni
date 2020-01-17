import React from "react";
import { TouchableOpacity,TouchableNativeFeedback,Platform} from "react-native";
import {Card,Button} from 'react-native-paper';
import {FontAwesome} from '@expo/vector-icons';

export default function (props) {

    const Touchable = Platform.OS === 'ios' ?
        TouchableOpacity :
        TouchableNativeFeedback;

    return (
        <Touchable onPress={props.onPress}>
            <Card style={{
                width: '90%',
                alignSelf: 'center',
                borderRadius: 15,
                borderWidth: 1,
                borderColor: '#E6C4C4',
                margin: 10
            }}>
                <Card.Cover source={props.image}
                            style={{height: 150, borderTopEndRadius: 15, borderTopStartRadius: 15}}/>
                <Card.Title
                    style={{marginTop: -15, marginBottom: -15}}
                    titleStyle={{fontSize: 20, color: '#da002e', fontWeight: '400',}}
                    title={props.title}
                    right={(props) => <TouchableOpacity {...props} onPress={() => alert("cool")}><FontAwesome
                        style={{marginRight: 20, color: '#da002e'}} name='download'
                        size={20}/></TouchableOpacity>}
                />
            </Card>
        </Touchable>
    );
}
