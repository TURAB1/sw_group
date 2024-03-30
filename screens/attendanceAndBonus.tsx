import { SafeAreaView, StyleSheet, Text } from "react-native"
import { HeaderComponent } from "../components/headerComponent";

export const AttendanceAndBonusScreen=(navigation:any,screenName:any)=>{
  return(
   <SafeAreaView> 
    <HeaderComponent navigation={navigation} screenName="근태/연차/수당관리"/>
    <Text>attendance and bonus</Text>
   </SafeAreaView> 
  );

}
const styles=StyleSheet.create({

});