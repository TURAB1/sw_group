import { Image, SafeAreaView, StyleSheet, Text } from "react-native"
import { HeaderComponent } from "../components/headerComponent";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";

export const SalaryManagementScreen = ({ navigation, screenName }: any) => {

  return (
    <SafeAreaView>
      <HeaderComponent navigation={navigation} screenName="급여관리" />
      <RichEditor
        style={{width:300,height:"100%"}}
        initialContentHTML={'<p>Hello there !</p><img src="http://placehold.it/500x1000" />'}

      />
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({

});