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
import {AnnouncementDisplay}from './components/announcementDisplay';
import { Fetchtest } from './screens/FetchTest';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer=createDrawerNavigator()

import { useRoute } from '@react-navigation/native';


//const {screenName}:any = route.params



export const MainApp=({navigation,props}:any)=> {
  const [screenName,setScreenName]=React.useState("Home")

  function BottomTabs(){
    //const route  = useRoute()
  //const  screenName :any = route.params.screenName
  
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
           initialRouteName={screenName}
          
        >
          <Tab.Screen  
            name="Home"
            component={Fetchtest}
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
            name="Announcements" 
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
              },tabBarLabel:"공지사항"
            }}  
          />             
          <Tab.Screen 
            name="SalaryManagemnt" 
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
              },tabBarLabel:"급여관리"
            }} 
          />
          <Tab.Screen 
            name="Attendance" 
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
              },tabBarLabel:"근태/수당"
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

  return (
    <NavigationContainer >
      <Drawer.Navigator 
        screenOptions={
          {
            drawerPosition:"right",
            headerShown:false
          }
        }
        drawerContent={({ navigation }) => (
    <SafeAreaView >
          <View style={styles.drawerHeader}>
        
        <Text style={[styles.headerTitle,[styles.drawerStyle]]}>성원그룹원그룹웍스</Text>
           
            <TouchableOpacity
              onPress={()=>navigation.closeDrawer()}>
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
         // initialParams={{ screenName: 'Home' }} 
         listeners={({ navigation }) => ({
          drawerItemPress: () => {
           // navigation.navigate('Home', { screen: 'Home' });
           setScreenName("Home")
          },
        })}
         />
          <Drawer.Screen 
          name="Staff_drawer" 
          component={BottomTabsStack} 
          listeners={({ navigation }) => ({
            drawerItemPress: () => {
             // navigation.navigate('Staff', { screen: 'Staff' });
             setScreenName("Staff")
            },
          })}
           />
      </Drawer.Navigator>
    </NavigationContainer>
   
     );



}

const styles = StyleSheet.create({
  drawerStyle:{
   marginLeft:20
  },
  drawerHeader:{
    backgroundColor:"blue",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    height:60
  },
  headerTitle:{
    color:"white",
    
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  profile:{
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    marginTop:20
  },
   line: {
    marginTop: 10,
    backgroundColor: "#D1D1D1",
    height: 1
  },
  drawerItemStyle:{
    marginTop:20
  }


});






// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Text, View, Button } from 'react-native';

// // Screen components
// const HomeScreen = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Home Screen</Text>
//   </View>
// );

// const ProfileScreen = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Profile Screen</Text>
//   </View>
// );

// const SettingsScreen = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Settings Screen</Text>
//   </View>
// );

// // Stack navigator for screens accessible from both drawer and bottom tabs
// const CommonStackNavigator = createStackNavigator();

// const CommonScreens = () => (
//   <CommonStackNavigator.Navigator>
//     <CommonStackNavigator.Screen name="Home" component={HomeScreen} />
//     <CommonStackNavigator.Screen name="Profile" component={ProfileScreen} />
//   </CommonStackNavigator.Navigator>
// );

// // Bottom tab navigator
// const Tab = createBottomTabNavigator();

// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={CommonScreens} />
//     <Tab.Screen name="Profile" component={ProfileScreen} />
//   </Tab.Navigator>
// );

// // Drawer navigator
// const Drawer = createDrawerNavigator();

// const DrawerNavigator = ({navigation}:any) => (
//   <Drawer.Navigator
//   // drawerContent={() => (
//   //   <View>
//   //     <Text onPress={() => console.log("clicked")}>
//   //       Go to Settings
//   //     </Text>
//   //     <Text onPress={() => console.log("clicked")}>
//   //       Go to Settings
//   //     </Text>
//   //   </View>
//   // )}
//    >
//     <Drawer.Screen name="Home" component={TabNavigator} />
//     <Drawer.Screen 
//     name="Settings" 
//     component={TabNavigator} 
//           listeners={({ navigation }) => ({
//             drawerItemPress: () => {
//               navigation.navigate('Profile', { screen: 'Profile' });
//             },
//           })}/>
          
//   </Drawer.Navigator>
// );

// // Main navigator combining bottom tab and drawer navigators
// const App = () => (
//   <NavigationContainer>
//     <DrawerNavigator />
//   </NavigationContainer>
// );

// export default App;













