import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './loginScreen'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Routes from '../afterAuth/navigation/Routes';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const sungwon = useSelector((state: any) => state.sungwon)
  return (
    <NavigationContainer >

      {
        sungwon.isSignedIn ?
          <Routes />

          :
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>

      }

    </NavigationContainer>
  )
}

export default AuthStack

const styles = StyleSheet.create({})