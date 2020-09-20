import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import Startscreen from './screens/startScreen'
import Registerscreen from './screens/registerScreen'
import Loginscreen from './screens/loginScreen'
import Onboardingscreen from './screens/homeScreen'

import store from './store'
const Stack = createStackNavigator()
export default function App() {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={Startscreen} options={{ headerShown: false, headerBackTitle: true }} />
          <Stack.Screen name="Register" component={Registerscreen} options={{ headerTransparent: true, headerTitle: false }} />
          <Stack.Screen name="Login" component={Loginscreen} options={{ headerTransparent: true, headerTitle: false }} />
          <Stack.Screen name="Onboarding" component={Onboardingscreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
