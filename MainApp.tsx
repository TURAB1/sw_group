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
  ImageBackground,
  TouchableOpacity
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
import { AnnouncementScreen } from './screens/announcementScreen';
import { SalaryManagementScreen } from './screens/salaryManagement';
import { AttendanceAndBonusScreen } from './screens/attendanceAndBonus';
import { AnnouncementDisplay } from './components/announcementDisplay';
import SplashScreen from 'react-native-splash-screen';
import { useSelector } from 'react-redux';
import LoginScreen from './screens/loginScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()



export const MainApp = ({ navigation, props }: any) => {
  const [screenName, setScreenName] = React.useState("Home")
  const sungwon = useSelector((state: any) => state.sungwon)

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
              height: "10%",
            },
            tabBarLabelStyle: {
              fontSize: 14,
              marginBottom: 10

            }
          }}
          initialRouteName="Home"

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
            name="Staff"
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

              }, tabBarLabel: "회사연락망"
            }
            }
          />
          <Tab.Screen
            name="Announcements"
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
              }, tabBarLabel: "공지사항"
            }}
          />
          <Tab.Screen
            name="SalaryManagemnt"
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
              }, tabBarLabel: "급여관리"
            }}
          />
          <Tab.Screen
            name="Attendance"
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
              }, tabBarLabel: "근태/수당"
            }
            }
          />
        </Tab.Navigator>

      </>
    );
  }

  function BottomTabsStack() {
    return (

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

    )
  }

  return (
    // <NavigationContainer >
      <Drawer.Navigator
        screenOptions={
          {
            drawerPosition: "right",
            headerShown: false
          }
        }
        drawerContent={({ navigation }) => (
          <SafeAreaView >
            <View style={styles.drawerHeader}>

              <Text style={[styles.headerTitle, [styles.drawerStyle]]}>성원그룹원그룹웍스</Text>

              <TouchableOpacity
                onPress={() => navigation.closeDrawer()}>
                <Entypo name="cross" size={30} color={"white"} />
              </TouchableOpacity>
            </View>
            <View style={styles.drawerStyle}>
              <View style={styles.profile}>
                <Image
                  style={styles.photo}
                  source={require("./assets/photos/chris_photo.jpeg")}
                />
                <View>
                  <Text>크리스팀원</Text>
                  <Text>개발4팀</Text>
                </View>
              </View>

              <Text
                onPress={() => navigation.navigate("Announcements")}
                style={styles.drawerItemStyle}
              >
                공지사항
              </Text>
              <View
                style={styles.line}>
              </View>

              <Text onPress={() => navigation.navigate("Staff")}
                style={styles.drawerItemStyle}>
                회사연락망
              </Text>
              <View
                style={styles.line}>
              </View>

              <Text onPress={() => navigation.navigate("Attendance")}
                style={styles.drawerItemStyle}>
                나의근태현황
              </Text>
              <View
                style={styles.line}>
              </View>

              <Text
                style={styles.drawerItemStyle}>
                커뮤니티
              </Text>

            </View>
          </SafeAreaView>
        )}
      >
        <Drawer.Screen
          name="Home_drawer"
          component={BottomTabsStack}
          listeners={({ navigation }) => ({
            drawerItemPress: () => {
              setScreenName("Home")
            },
          })}
        />
        <Drawer.Screen
          name="Staff_drawer"
          component={BottomTabsStack}
          listeners={({ navigation }) => ({
            drawerItemPress: () => {
              setScreenName("Staff")
            },
          })}
        />
      </Drawer.Navigator>
    //</NavigationContainer> 

  );



}

const styles = StyleSheet.create({
  drawerStyle: {
    marginLeft: 20
  },
  drawerHeader: {
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60
  },
  headerTitle: {
    color: "white",

  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  profile: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20
  },
  line: {
    marginTop: 10,
    backgroundColor: "#D1D1D1",
    height: 1
  },
  drawerItemStyle: {
    marginTop: 20
  }


});

















