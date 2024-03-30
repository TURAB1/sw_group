import { Image, StyleSheet, Text,View ,TouchableOpacity, ScrollView ,SafeAreaView} from "react-native"
import * as React from "react"
import { HeaderComponent } from "../components/headerComponent";
import { NavigationContainer } from '@react-navigation/native';
import data from "../assets/information.json";





export const HomeScreen=(navigation:any,screenName:any)=>{
  // React.useEffect(()=>{
  //   console.log(data.employee.it_research);
  // });
  let dateToday=new Date();
  let year=dateToday.getFullYear();
  let month=dateToday.getMonth()+1;
  let date=dateToday.getDate();
  let day=new Date().toLocaleDateString("kor-KOR", { weekday: 'short' })


  return(
   <SafeAreaView>
    <HeaderComponent navigation={navigation} screenName=""/>
     <View style={styles.profile}>
      <Image
        style={styles.photo}
        source={require("../assets/photos/chris_photo.jpeg")}
      />
      <View>
        <Text style={styles.profileInfo}>[개발4팀] 크리스팀원</Text>
        <Text style={styles.profileInfo}>성원애드피아</Text>
      </View>
     </View>
     <View style={styles.dateSection}>
       <Text>{year.toString()}-{month.toString()}-{date.toString()}({day.toString()})</Text>
     </View>
     <View style={styles.attendance}>
       <View>
         <Text >출근시간</Text>
         <Text style={styles.attendanceTime}>-</Text>
       </View>
       <View>
         <Text>퇴근시간</Text>
         <Text style={styles.attendanceTime}>-</Text>
       </View>
     </View>
     <View style={styles.checkButtonSection}>
        <TouchableOpacity >
           <View style={styles.checkButton}>
            <Text >출근하기</Text>
           </View> 
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.checkButton}>
              <Text>퇴근하기</Text>
          </View> 
        </TouchableOpacity>  
     </View>
     <View style={styles.separationLine}></View>
     <View style={styles.annualLeave}>
       <Text>연차계획(0/10)</Text>
       <View style={styles.annualLeaveManagement}>
        <Text style={styles.annualLeaveManagementText}>연차계획관리</Text>
       </View>
     </View>
     <View style={styles.separationLine}></View>
     <View style={styles.announcement}>
       <Text>최근 공지사항</Text>
       <ScrollView>
        
       </ScrollView>
     </View>
    </SafeAreaView> 
  )

}
const styles=StyleSheet.create({
  profile:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:"#004A94",
    height:90,
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    borderRadius:5
  },
  photo:{
    width:60,
    height:60,
    borderRadius:60
  },
  profileInfo:{
    color:"white",
    fontSize:18,
    fontWeight:"bold"
  },
  dateSection:{
    marginTop:20,
    marginLeft:10,
    marginRight:10
  },
  attendance:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    height:80,
    borderRadius:5,
    borderWidth:1,
    borderColor:"gray",
    marginTop:20,
    marginLeft:10,
    marginRight:5
  },
  attendanceTime:{
    alignSelf:"center"
  },
  checkButtonSection:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginLeft:10,
    marginRight:10
  },
  checkButton:{
    alignItems:"center",
    height:30,
    width:180,
    borderRadius:5,
    borderWidth:1,
    borderColor:"gray",
    marginTop:10
  },
  separationLine:{
    backgroundColor:"#D1D1D1",
    height:5,
    marginTop:10
  },
  annualLeave:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:10,
    marginLeft:10,
    marginRight:10 
  },
  annualLeaveManagement:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#004A94",
    borderRadius:2,
    width:90,
    height:25
    
  },
  annualLeaveManagementText:{
    color:"white",
    fontWeight:"bold",

    
  },
  announcement:{
    marginTop:10,
    marginLeft:10,
    marginRight:10
  },
});