import { SafeAreaView, StyleSheet, Text } from "react-native"
import { HeaderComponent } from "../components/headerComponent";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const SalaryManagementScreen = ({navigation, screenName}:any) => {

  return (
    <SafeAreaView>
      <HeaderComponent navigation={navigation} screenName="급여관리" />
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({

});