
import * as React from "react";
import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity, TextInput} from "react-native"
import { HeaderComponent } from "../components/headerComponent";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather"
// import{ Searchbar } from "react-native-paper";
// import { SearchBar } from "react-native-elements";
import { SearchBar } from "@rneui/themed";



export const StaffContactsScreen=(navigation:any,screenName:any)=>{
  const [search, setSearch] = React.useState("");
  return(
   <SafeAreaView style={styles.staffContacts}>
    <HeaderComponent navigation={navigation} screenName="회사연락망"/>
    <View style={styles.topButtonSection}>
        <TouchableOpacity >
           <View style={styles.swButton}>
            <Text style={styles.swButtonText}>애드피아</Text>
           </View> 
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.mallButton}>
              <Text>몰</Text>
          </View> 
        </TouchableOpacity>  
        <TouchableOpacity >
          <View style={styles.mallButton}>
              <Text>푸드몰</Text>
          </View> 
        </TouchableOpacity> 
        <TouchableOpacity >
          <View style={styles.star}>
              <Entypo name="star" size={30} color={"#004A94"}/>
          </View> 
        </TouchableOpacity> 
     </View>
      <View style={styles.searchSection}>
        <Feather name="search" size={20} color="black" 
        style={{marginLeft:1,marginRight:4}}/>
        <TextInput style={{fontSize:15}} placeholder="검색하기"/>
      </View>
    </SafeAreaView> 
  )

}
const styles=StyleSheet.create({
  staffContacts:{
    marginLeft:10,
    marginRight:10
  },
  topButtonSection:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:10

  },
  swButton:{
    height:40,
    width:90,
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#004A94",
   
  },
  swButtonText:{
    color:"white",
    fontWeight:"bold",
  },
  mallButton:{
    alignItems:"center",
    justifyContent:"center",
    height:40,
    width:90,
    borderRadius:5,
    borderWidth:1,
    borderColor:"gray",
    
  },
  star:{
    alignItems:"center",
    justifyContent:"center",
    height:40,
    width:90,

  },
  searchSection:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#D1D1D1",
    borderRadius:5,
    padding:10,
    marginTop:10,
    height:40
  }
});