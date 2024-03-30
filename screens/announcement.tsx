import { SafeAreaView, StyleSheet, Text } from "react-native"
import { HeaderComponent } from "../components/headerComponent";

export const AnnouncementScreen=(navigation:any,screenName:any)=>{
  return(
    <SafeAreaView>
      <HeaderComponent navigation={navigation} screenName="공지사항"/>
      <Text>Announcements</Text>
    </SafeAreaView>
  )

}
const styles=StyleSheet.create({

});