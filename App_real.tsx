
import * as React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Button,
  Pressable,
  ImageBackground,
  StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScaledSheet, scale } from 'react-native-size-matters';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MD3DarkTheme, useTheme } from 'react-native-paper';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { HomeScreen } from './screens/homeScreen';
import { StaffContactsScreen } from './screens/staffContacts';
import { AnnouncementScreen } from './screens/announcementScreen';
import { SalaryManagementScreen } from './screens/salaryManagement';
import { AttendanceAndBonusScreen } from './screens/attendanceAndBonus';
import { AnnouncementDisplay } from './components/announcementDisplay';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'yellow',
          tabBarInactiveTintColor: "white",
          tabBarInactiveBackgroundColor: "#004A94",
          tabBarActiveBackgroundColor: "#004A94",
          tabBarStyle: {
            height: scale(80)
          },
          tabBarLabelStyle: {
            fontSize: 14,
            marginBottom: 10

          }
        }}

      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Entypo
                  name="home"
                  size={25}
                  color={focused ? "yellow" : "white"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="회사연락망"
          component={StaffContactsScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <FontAwesome5
                  name="user-friends"
                  size={25}
                  color={focused ? "yellow" : "white"}
                />
              );
            }
          }}
        />
        <Tab.Screen
          name="공지사항"
          component={AnnouncementScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Foundation
                  name="megaphone"
                  size={25}
                  color={focused ? "yellow" : "white"}
                />

              );
            },
          }}
        />
        <Tab.Screen
          name="급여관리"
          component={SalaryManagementScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <MaterialCommunityIcons
                  name="newspaper"
                  size={25}
                  color={focused ? "yellow" : "white"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="근태/수당"
          component={AttendanceAndBonusScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Fontisto
                  name="clock"
                  size={25}
                  color={focused ? "yellow" : "white"}
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

export function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
        />
        <Stack.Screen
          name="Announcement"
          component={AnnouncementDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  )



}

const styles = ScaledSheet.create({


});

export default App;

