import React from 'react'
import {SafeAreaView, StyleSheet, View, Text, Image} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {Ionicons, MaterialCommunityIcons,FontAwesome,EvilIcons } from '@expo/vector-icons';


class ChooseActivityScreen extends React.Component {


    render() {
        return (
            <SafeAreaView>
                <Card style={{width:'90%', alignSelf: 'center',borderRadius: 15, borderWidth:1, borderColor:'#E6C4C4'}}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{height:150, borderTopEndRadius:15, borderTopStartRadius:15}}/>
                    <Card.Title
                        style={{marginTop: -15, marginBottom: -15}}
                        titleStyle={{ fontSize: 20, color:'#da002e',fontWeight: '700',}}
                        title="Vocabulaire"
                        right={(props) => <FontAwesome {...props} style={{ marginRight:20,color:'#da002e' }} name='download' size={20} />}
                    />
                </Card>
            </SafeAreaView>
        );
    }
}

export default ChooseActivityScreen;
