import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf')
  });
};  

export default function Onboardingscreen () {
    const [dataLoaded, setDataLoaded] = React.useState(false)

    if(!dataLoaded) {
        return (
          <AppLoading 
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
          />
        )
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Screenshot_3.png')} style={{ height: 225, width: 390}} />
            <Text style={{ fontFamily: 'roboto-bold', fontSize: 25, margin: 20 }} >Welcome to the app</Text>
            <Text style={{ fontFamily: 'roboto-regular', textAlign: 'center', marginLeft: 50, marginRight: 50, }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, lorem at iaculis posuere, quam felis feugiat ex, non vestibulum lorem enim eu libero. Nulla consectetur et est sit amet posuere. Maecenas porta sapien nisl, nec sagittis odio porttitor nec. Curabitur convallis elit nisi. Ut tempus sodales fermentum. Donec id accumsan nibh. Fusce consectetur suscipit metus vel posuere. Integer id rutrum sem, eu vehicula odio. Donec efficitur libero non nunc tempor ultricies. Cras accumsan quis lectus non pulvinar. Suspendisse eget risus sed ipsum egestas porttitor nec vitae nisi.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
    }
})