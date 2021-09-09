import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Splash extends Component{
    render(){
        return(
            <View style={styles.Wrapper}>
                <View style={styles.titleWrapper}>
                <Text style={styles.title}>First App</Text>
                </View>
                <View >
                <Text style={styles.subtitle}>Powered by React Native</Text>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    Wrapper: {
        backgroundColor: '#A3CB38',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    subtitle: {
        color: 'white',
        paddingBottom: 20,
        fontWeight: 'bold'
    }
    

})