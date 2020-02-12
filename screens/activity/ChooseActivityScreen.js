import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Platform,
    ActivityIndicator
} from "react-native";
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {Ionicons, MaterialCommunityIcons, FontAwesome, EvilIcons} from '@expo/vector-icons';
import CardActivity from "../../components/CardActivity";
import {getActivityByIdTheme} from "../../Api/MuhogoApi";


class ChooseActivityScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state ={ isLoading: true}
    }
    static navigationOptions = {
        //header: null,
       // mode: 'modal',
        //headerMode: 'none',
    };

    componentDidMount() {
        const idTheme=this.props.navigation.state.params.idTheme;
        getActivityByIdTheme(idTheme).then( data => {
            this.setState({
                isLoading: false,
                dataActivity: data,
            });
        });
    }

    _handleOnPressCardActivity(idActivity){
        this.props.navigation.navigate('ExerciseScreen', {idActivity: idActivity});
    }

    render() {
        const {dataActivity}=this.state;

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <SafeAreaView style={styles.container}>
                <FlatList style={{ marginTop: Platform.OS === 'ios' ? 10 : 40}}
                    data={dataActivity}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <CardActivity onPress={()=>this._handleOnPressCardActivity(item.id)} image={{uri: item.image}} title={item.libelle}/>
                    )}
            />
            </SafeAreaView>
    )
        ;
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
export default ChooseActivityScreen;
