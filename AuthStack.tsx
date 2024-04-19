import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainApp } from './MainApp'
import LoginScreen from './screens/loginScreen'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const sungwon=useSelector((state:any)=>state.sungwon)
  return (
    <NavigationContainer >
    
        {
    sungwon.isSignedIn ? 
          
     <MainApp/>
    
      : 
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      
    }
     
      </NavigationContainer>
  )
}

export default AuthStack

const styles = StyleSheet.create({})