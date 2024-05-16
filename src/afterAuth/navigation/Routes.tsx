import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabsStack from "./BottomTabsStack";
import DrawerContent from "../components/drawerContent";

const Drawer = createDrawerNavigator();

const Routes = ({navigation,props}:any) => {
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
            <DrawerContent navigation={navigation} />
          )}
        >
          <Drawer.Screen
            name="HomeDrawer"
            component={BottomTabsStack}
          />
        </Drawer.Navigator>
        // </NavigationContainer> 
    
      );
    
}

export default Routes

