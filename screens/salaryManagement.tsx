import { SafeAreaView, StyleSheet, Text } from "react-native"
import { HeaderComponent } from "../components/headerComponent";

export const SalaryManagementScreen=(navigation:any,screenName:any)=>{
  return(
   <SafeAreaView>
     <HeaderComponent navigation={navigation} screenName="급여관리"/>
   </SafeAreaView>  
  )

}
const styles=StyleSheet.create({

});