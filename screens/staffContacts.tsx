import { StyleSheet, Text, View,SafeAreaView} from "react-native"
import { HeaderComponent } from "../components/headerComponent";



export const StaffContactsScreen=(navigation:any,screenName:any)=>{
  return(
   <SafeAreaView>
    <HeaderComponent navigation={navigation} screenName="회사연락망"/>
    <Text>staff contacts</Text>
    </SafeAreaView> 
  )

}
const styles=StyleSheet.create({

});