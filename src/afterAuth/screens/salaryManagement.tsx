import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { HeaderComponent } from "../components/headerComponent";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Skeleton from "@thevsstech/react-native-skeleton";
import { SectionGrid, SimpleGrid } from "react-native-super-grid";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { height } from "react-native-size-scaling";


export const SalaryManagementScreen = ({ navigation, screenName }: any) => {

  const [photo, setPhoto] = useState<any>();


  
  
  return (

    <SafeAreaView style={{flex:1,justifyContent:"space-between",backgroundColor:"white"}}>
      <HeaderComponent navigation={navigation} screenName="급여관리" />
      <View style={{height:200,backgroundColor:"blue",justifyContent:"flex-end"}}>
      
        <View style={{backgroundColor:"yellow",}}></View>
      </View>

    </SafeAreaView>

  )

}
const styles = StyleSheet.create({
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
    backgroundColor: "red"
  },
  row: {
    flexDirection: "row"
  },
  container: {
    flexDirection:"row",
    flexWrap:"wrap"

  },
  item: {
    backgroundColor: '#f9c2ff',
     width:100,
     height:50,
     
  },
  title: {
    fontSize: 10,
  },

});