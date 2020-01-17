import React, {Fragment} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Platform,
    ActivityIndicator,
    TouchableOpacity,
    FlatList
} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {ProgressBar} from "react-native-paper";


class ExerciseResultScreen extends React.Component {


    constructor(props) {
        super(props);

    }


    render() {
        return(
                <SafeAreaView style={styles.container}>
                    <View style={{width: '95%', alignSelf: 'center', flexDirection: 'row'}}>
                        <View style={{width: '10%', alignSelf: 'center'}}>
                            <TouchableOpacity onPress={() => alert("close")}>
                                <MaterialIcons name="close" size={40} color="red"/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '85%', alignSelf: 'center', marginLeft: 10}}>
                            <ProgressBar progress={this.props.navigation.state.params.progressBarValue} color="#da002e"
                                         style={{backgroundColor: '#8c8d8f', height: 20, borderRadius: 20}}/>
                        </View>
                    </View>
                    <View style={{alignSelf: 'center'}}>
                        <Text>
                            Votre note est de :  {this.props.navigation.state.params.score}
                        </Text>
                    </View>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    }
});

export default ExerciseResultScreen;
