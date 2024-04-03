import { SafeAreaView, StyleSheet, Text } from "react-native"
import { HeaderComponent } from "../components/headerComponent";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const SalaryManagementScreen = (navigation1: any, screenName: any) => {
  const navigation=useNavigation()
  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' }, tabBarVisible: false });
    return () =>
      navigation.getParent()?.setOptions({ tabBarStyle: undefined, tabBarVisible: undefined });
  }, [navigation]);
  return (
    <SafeAreaView>
      <HeaderComponent navigation={navigation1} screenName="급여관리" />
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({

});