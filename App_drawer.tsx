

import { Image, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from "./screens/homeScreen";
import { StaffContactsScreen } from "./screens/staffContacts";

const Drawer = createDrawerNavigator();

export const launchDrawer=(navigation:any)=>{
    navigation.openDrawer();
}
 function App(): React.JSX.Element{


  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator 
        screenOptions={
          {
            drawerPosition:"right",
            headerShown:false
          }
        }
       
      >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Staff" component={StaffContactsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
     );

    // return(
    //  <View>
    //     <View style={styles.headerSection}> 
    //         <Image 
    //           style={styles.swLogo}
    //           source={require("../assets/images/app_logo.png")}/>
    //         <Text> screen name</Text>
    //         <Image
    //           style={styles.menuIcon}
    //           source={require("../assets/images/menu_icon.png")}/>
    //         </View>
    //     <View 
    //     style={styles.headerLine}>
    //    </View>
    //  </View>

    // )
}
const styles=StyleSheet.create({
  headerSection:{
   marginTop:10,
   flexDirection:"row",
   justifyContent:"space-between"
  },
  headerLine:{
   marginTop:10, 
   backgroundColor:"black",
   height:0.3
  },
  swLogo:{
    marginLeft:5,
    height:28,
    width:35
  },
  menuIcon:{
    marginRight:5,
    height:28,
    width:28
  }
}

);
export default App;

