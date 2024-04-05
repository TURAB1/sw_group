

// import { Image, StyleSheet, Text, View } from "react-native"
// import { SafeAreaView } from "react-native-safe-area-context";

// import { NavigationContainer } from '@react-navigation/native';
// import { HomeScreen } from "./screens/homeScreen";
// import { StaffContactsScreen } from "./screens/staffContacts";



import * as React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Pressable,
  ImageBackground
} from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MD3DarkTheme, useTheme } from 'react-native-paper';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { HomeScreen } from './screens/homeScreen';
import { StaffContactsScreen } from './screens/staffContacts';
import { AnnouncementScreen } from './screens/announcement';
import { SalaryManagementScreen } from './screens/salaryManagement';
import { AttendanceAndBonusScreen } from './screens/attendanceAndBonus';
import {AnnouncementDisplay}from './components/announcementDisplay';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer=createDrawerNavigator()

import { useRoute } from '@react-navigation/native';


//const {screenName}:any = route.params
function BottomTabs({route}:any){
  const route  = useRoute()
 const { screenName }:any = route.params
  return (
    <>
      <Tab.Navigator  
        screenOptions={{headerShown: false,
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor:"white",
        tabBarInactiveBackgroundColor:"#004A94",
        tabBarActiveBackgroundColor:"#004A94",
        tabBarStyle: {
          height:"10%",
        },
        tabBarLabelStyle:{
         fontSize:14,
         marginBottom:10
           
        }
         }} 
         initialRouteName="Staff"
        
      >
        <Tab.Screen  
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Entypo 
                 name="home" 
                 size={25} 
                 color={focused ?"yellow":"white"}
                />
              );
            },
          }} 
        />
        <Tab.Screen  
          name="Staff"
          component={StaffContactsScreen}
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return (
                <FontAwesome5 
                  name="user-friends" 
                  size={25} 
                  color={focused ?"yellow":"white"} 
                />
              );
              
            },tabBarLabel:"회사연락망"
          }
        } 
        />
        <Tab.Screen 
          name="공지사항" 
          component={AnnouncementScreen}
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Foundation 
                  name="megaphone" 
                  size={25} 
                  color={focused ?"yellow":"white"} 
                />
                
              );
            },
          }}  
        />             
        <Tab.Screen 
          name="급여관리" 
          component={SalaryManagementScreen}
          options={{
           tabBarIcon: ({size,focused,color}) => {
              return (
                <MaterialCommunityIcons 
                  name="newspaper" 
                  size={25} 
                  color={focused ?"yellow":"white"}
                />
              );
            },
          }} 
        />
        <Tab.Screen 
          name="근태/수당" 
          component={AttendanceAndBonusScreen}
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Fontisto 
                  name="clock" 
                  size={25} 
                  color={focused ?"yellow":"white"}
                />
              );
            },
          }
        } 
        />              
      </Tab.Navigator>
  
    </>
  );
}

function BottomTabsStack(){
  return(
  
     <Stack.Navigator
       screenOptions={{headerShown:false}}>
       <Stack.Screen 
         name="BottomTabs"
         component={BottomTabs}
       />
       <Stack.Screen 
       name="Announcement"
       component={AnnouncementDisplay}/>
     </Stack.Navigator>
    
  )



}


export function App(): React.JSX.Element {

  return (
    <NavigationContainer >
      <Drawer.Navigator 
        screenOptions={
          {
            drawerPosition:"right",
            headerShown:false
          }
        }
       
      >
          <Drawer.Screen name="Home" component={BottomTabsStack}
          initialParams={{ screenName: 'Staff' }} />
          <Drawer.Screen name="Staff" component={BottomTabsStack} 
          initialParams={{ screenName: 'Staff' }}/>
      </Drawer.Navigator>
    </NavigationContainer>
     );



}

const styles = StyleSheet.create({


});

export default App;











