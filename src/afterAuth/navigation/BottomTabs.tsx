
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from "../../constants/navigationStrings";
import { HomeScreen } from '../screens/homeScreen';
import { StaffContactsScreen } from '../screens/staffContacts';
import { AnnouncementScreen } from '../screens/announcementScreen';
import { SalaryManagementScreen } from '../screens/salaryManagement';
import { AttendanceAndBonusScreen } from '../screens/attendanceAndBonus';



const Tab = createBottomTabNavigator();

const BottomTabs = () => {
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
              name={navigationStrings.HOME}
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
              name={navigationStrings.STAFF}
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
              name={navigationStrings.ANNOUNCEMENT}
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
              name={navigationStrings.SALARY_MANAGEMENT}
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
              name={navigationStrings.ATTENDANCE}
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

export default BottomTabs

