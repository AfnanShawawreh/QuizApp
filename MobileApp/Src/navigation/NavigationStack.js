import React from 'react';
import Home from '../Screens/Home';
import Quiz from '../Screens/Quiz';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const NavigationStack=() => {
 return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options= {{headerShown: false ,hardwareBackButton: {popStackOnPress:false}}} component={Home} />
      <Stack.Screen name="Quiz" options= {{headerShown: false ,hardwareBackButton: {popStackOnPress:false},}} component={Quiz} />
    </Stack.Navigator>
  </NavigationContainer>
 )
};



export default NavigationStack;
