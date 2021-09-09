import React, { Component } from 'react'
import { TextInput, StyleSheet, View, Button, TouchableOpacity, Text, StatusBar } from 'react-native'

export default class LogInForm extends Component {
    render() {
        return (
            <View style={styles.container}>
               <StatusBar 
               barStyle = 'light-content'
               />
               <TextInput 
               placeholder= 'Username or Email'
               placeholderTextColor = 'rgba(255,255,255,0.7)'
               returnKeyType= "next"
               keyboardType= "email-address"
               onSubmitEditing = {()=>this.passwordInput.focus()}
               style= {styles.input}   />
               <TextInput 
               placeholder= 'Password'
               placeholderTextColor = 'rgba(255,255,255,0.7)'
               secureTextEntry
               returnKeyType= "go"
               ref={(input)=> this.passwordInput = input}
               style= {styles.input}   />
               <TouchableOpacity style= {styles.buttonContainer}>
                   <Text style={styles.buttonText}>
                       LogIn
                   </Text>
               </TouchableOpacity>
              

              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginBottom: 20,
        color: '#4b6584',
        paddingHorizontal:10
        
    },
    buttonContainer:{
        backgroundColor: '#6a89cc',
        paddingVertical: 10

    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: '700'
    }


})
