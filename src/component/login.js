import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import LogInForm from './loginForm'

export default class Login extends Component {
    render() {
        return (
            <View style= {styles.Container}>
                <View style = {styles.logoContainer}>
                    <Image style= {styles.logo}
                    source={require('../Images/icons8-customer-50.png')}/>
                    <Text style={styles.imgtext}>App Made for First App</Text>
                </View>
                <View style={styles.formContainer} >
                <LogInForm/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
        
    },

    formContainer: {

    },

    Container: {
        backgroundColor: '#26de81',
        flex: 1
    },
    logo: {
        width: 100,
        height: 100
    },
    imgtext: {
        color: 'white',
        marginTop: 0

    }
})
