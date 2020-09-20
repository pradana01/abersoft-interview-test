import React, { Component } from 'react'
import {View, Text, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import {userRegister} from '../store/actions'
import { useDispatch } from 'react-redux';

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf')
  });
};  

export default function Registerscreen () {
    const [ email, setEmail ] = React.useState('')
    const [ password, setPassword ] = React.useState('')
    const [dataLoaded, setDataLoaded] = React.useState(false)

    const dispatch = useDispatch()
    const user_register = () => {
        let userData = { email, password }
        dispatch(userRegister(userData))
    }

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
            <View style={styles.card}>
                <View style={styles.textContainer}>
                    <Text style={{ fontFamily: 'roboto-bold', fontSize: 23 }}>Register New Account</Text>
                    <TextInput
                        style={{ borderBottomColor: 'red', borderBottomWidth: 2, width: 267, marginTop: 30 }}
                        onChangeText={text => setEmail(text)} 
                        placeholder = 'Email'
                        value={email}
                    />
                    <TextInput
                        style={{ borderBottomColor: 'red', borderBottomWidth: 2, width: 267,marginTop: 30 }}
                        onChangeText={text => setPassword(text)} 
                        placeholder = 'Password'
                        value={password}
                        secureTextEntry = {true}
                    />
                    <TouchableOpacity style={styles.createAccountButton} onPress={user_register}>
                        <Text style={{ color: 'white' }}>Create account</Text>
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
    card: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 51,
        height: 475,
        textAlign: 'left',
        top: 350
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
        top: 50
    }
  });