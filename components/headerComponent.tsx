import * as React from "react";
import { Image, StyleSheet, Text, View,TouchableWithoutFeedback } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer ,DrawerActions} from '@react-navigation/native';
import { HomeScreen } from "../screens/homeScreen";
import { StaffContactsScreen } from "../screens/staffContacts";
import  launchDrawer  from "../App";



const Drawer = createDrawerNavigator();

interface Props{
 navigation:any 
 screenName:any

}
export const HeaderComponent:React.FC<Props>=({navigation,screenName})=>{
 
  return(
      
    <View>
       <View style={styles.headerSection}> 
           <Image 
             style={styles.swLogo}
             source={require("../assets/images/app_logo.png")}/>
           <Text> {screenName}</Text>

           <TouchableWithoutFeedback onPress={launchDrawer}>
           <Image
             style={styles.menuIcon}
             source={require("../assets/images/menu_icon.png")}
             />
           </TouchableWithoutFeedback>  
           </View>
       <View 
       style={styles.headerLine}>
      </View>
    </View>

   )
  // return (
  //   <NavigationContainer independent={true}>
  //     <Drawer.Navigator 
  //       screenOptions={
  //         {
  //           drawerPosition:"right"
  //         }
  //       }
  //     >
  //         <Drawer.Screen name="Home" component={HomeScreen} />
  //         <Drawer.Screen name="Staff" component={StaffContactsScreen} />
  //     </Drawer.Navigator>
  //   </NavigationContainer>
  //    );


}
const styles=StyleSheet.create({
  headerSection:{
   marginTop:10,
   flexDirection:"row",
   justifyContent:"space-between"
  },
  headerLine:{
   marginTop:10, 
   backgroundColor:"#D1D1D1",
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