import React, { Component, useEffect } from 'react'
import {View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, InteractionManager, Alert, KeyboardAvoidingView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import {userLogin} from '../store/actions'
import { useDispatch, useSelector } from 'react-redux';


const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf')
  });
};  

export default function Loginscreen (props) {
    const [ email, setEmail ] = React.useState('')
    const [ password, setPassword ] = React.useState('')
    const [dataLoaded, setDataLoaded] = React.useState(false)
    const dispatch = useDispatch()
    const navigate = props.navigation.navigate
    const token = useSelector((state) => state.token)

    const user_login = () => {
        let userData;
        if(!email || !password) {
            Alert.alert('Email or password cannot be empty')
        } else {
            userData = { email, password }
            dispatch(userLogin(userData))
        }
    }

    useEffect(() => {
        if(token) {
            navigate('Onboarding')
        }
    })

    if(!dataLoaded) {
        return (
          <AppLoading 
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
          />
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient
            // Background Linear Gradient
            colors={['rgba(53, 73, 251, 1)', 'rgba(78, 210, 218, 1)']}
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: 812,
            }}
          />
            <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1}}>
            <View style={styles.card}>
                <View style={styles.textContainer}>
                    <Text style={{ fontFamily: 'roboto-bold', fontSize: 23 }}>Login</Text>
                    <TextInput
                        style={{ borderBottomColor: 'red', borderBottomWidth: 2, width: 267, marginTop: 30 }}
                        onChangeText={text => setEmail(text)} 
                        value = {email}
                        placeholder = 'Email'
                    />
                    <TextInput
                        style={{ borderBottomColor: 'red', borderBottomWidth: 2, width: 267,marginTop: 30 }}
                        onChangeText={text => setPassword(text)} 
                        value={password}
                        placeholder = 'Password'
                        secureTextEntry = {true}
                    />
                    <TouchableOpacity style={styles.createAccountButton} onPress={user_login}>
                        <Text style={{ color: 'white' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //   alignItems: 'center',
    //   justifyContent: "flex-end",
    },
    card: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 51,
        height: 475,
        textAlign: 'left',
        top: 350,
        // flex: 1,
        // justifyContent: "flex-end",
        // padding: 24
    },
    createAccountButton: {
        backgroundColor: 'rgba(53, 73, 251, 1)',
        borderRadius: 25.5,
        alignItems: 'center',
        marginTop: 50,
        padding: 10
    },
    textContainer: {
        position: 'absolute',
        top: 20,
        flex: 1,
        justifyContent: 'flex-end',
        padding: 24
    }
  });