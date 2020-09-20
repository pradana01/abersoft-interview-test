import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf')
  });
};  

export default function Startscreen(props) {

  const [dataLoaded, setDataLoaded] = useState(false)
  const navigate = props.navigation.navigate

  if(!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }


  return (
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
          
      <View 
        style={{
          backgroundColor: 'white',
          borderRadius: 25.5,
          width: 267,
          height: 33,
          top: 175,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        
      >
        <Text style={{ fontFamily: 'roboto-regular' }} onPress={() => navigate('Register') }>Register Account</Text>

      </View>
      <View style={{
        backgroundColor: 'white',
        borderRadius: 25.5,
        width: 267,
        height: 33,
        top: 215,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{ fontFamily: 'roboto-regular' }} onPress={() => navigate('Login') }>Login</Text>
        {/* <StatusBar style="auto" /> */}
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});