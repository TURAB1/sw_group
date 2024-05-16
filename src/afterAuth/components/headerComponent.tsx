import * as React from "react";
import { Image, Text, View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { HomeScreen } from "../screens/homeScreen";
import { StaffContactsScreen } from "../screens/staffContacts";
import imagePaths from "../../constants/imagePaths";

const Drawer = createDrawerNavigator();

interface Props {
  navigation: any
  screenName: any

}
export const HeaderComponent: React.FC<Props> = ({ navigation, screenName }) => {

  return (

    <View style={styles.headerContainer}>
      <View style={styles.headerSection}>
        <Image
          style={styles.swLogo}
          source={imagePaths.appLogo} />
        <Text style={styles.screenName}> {screenName}</Text>

        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.menuIcon}
            source={imagePaths.menuIcon}
          />
        </TouchableWithoutFeedback>
      </View>
      <View
        style={styles.headerLine}>
      </View>
    </View>

  )


}
 const styles = ScaledSheet.create({

  headerContainer: {
    marginTop: "10@s",
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  headerLine: {
    marginTop: "10@s",
    backgroundColor: "#D1D1D1",
    height: "0.3@s"
  },
  swLogo: {
    marginLeft: "5@s",
    height: "28@s",
    width: "35@s"
  },
  screenName: {
    fontSize: "25@s",
    opacity: "0.5@s"
  },
  menuIcon: {
    marginRight: "5@s",
    height: "28@s",
    width: "28@s"
  }
}

);
