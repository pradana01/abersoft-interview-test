import React, { Component, useEffect } from 'react'
import {View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, Alert, Keyboard } from 'react-native'
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
    const [togleKeyboard, setTogleKeyboard] = React.useState(false)
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

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    
        return () => {
          Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
          Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);
    

    const _keyboardDidShow = () => {
        setTogleKeyboard(true)
    };
    
    const _keyboardDidHide = () => {
        setTogleKeyboard(false)
    };
    

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

            <View style={togleKeyboard ? styles.cardTop : styles.cardBottom}>
                <View style={styles.textContainer}>
                    <Text style={{ fontFamily: 'roboto-bold', fontSize: 23, flex: 1 }}>Login</Text>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    cardBottom: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 51,
        height: 475,
        textAlign: 'left',
        top: 350,
        flex: 1,
    },
    cardTop: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 51,
        height: 475,
        textAlign: 'left',
        top: 180,
        flex: 1,
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
        top: 25,
        flex: 1,
        justifyContent: 'flex-end',
        padding: 24
    }
  });