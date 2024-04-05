import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, FlatList, Dimensions, Platform } from "react-native"
import * as React from "react"
import { HeaderComponent } from "../components/headerComponent";
import { NavigationContainer } from '@react-navigation/native';
import {data }from "../assets/information";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
const { width, height } = Dimensions.get("window");
let screenHeight:number=height;





export const HomeScreen = ({ navigation, screenName }: any) => {
  const [attendanceHour, setAttendanceHour] = React.useState(-1);
  const [attendanceMinute, setAttendanceMinute] = React.useState(-1);
  const [goHomeHour, setGoHomeHour] = React.useState(-1);
  const [goHomeMinute, setGoHomeMinute] = React.useState(-1);
  const [isButtonDisabled, setButtonDisabled] = React.useState(false);
  // React.useEffect(()=>{
  //   console.log(data.employee.it_research);
  // });
  let dateToday = new Date();
  let year = dateToday.getFullYear();
  let month = dateToday.getMonth() + 1;
  let date = dateToday.getDate();
  let day = new Date().toLocaleDateString("ko-KR", { weekday: 'short' })



  const getAttendanceTime = () => {
    let timeAndDate = new Date();
    let attendanceHour = timeAndDate.getHours();
    let attendanceMinute = timeAndDate.getMinutes();
    setAttendanceHour(attendanceHour);
    setAttendanceMinute(attendanceMinute);
    setButtonDisabled(true);
  }

  const getGoHomeTime = () => {
    let timeAndDate = new Date();
    let goHomehour = timeAndDate.getHours();
    let goHomeMinute = timeAndDate.getMinutes();
    setGoHomeHour(goHomehour);
    setGoHomeMinute(goHomeMinute);
  }
  interface Props {
    title: any
    description: any
    publication_date: any
  }

  const AnnouncementItem: React.FC<Props> = ({ title, description, publication_date }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Announcement")}>
        <View style={styles.announcementStyle}>
          <Text style={styles.titleStyle}> •{title}</Text>
          <Text style={styles.dateStyle}>{publication_date}</Text>

        </View>
      </TouchableOpacity>
    );
  }

  // const displayAnnouncement = () => {
  //   return data.announcement.map((item: any, index: any) => {
  //     if (index < 3)
  //       return (
  //         <AnnouncementItem key={index} title={item.title} description={item.description} publication_date={item.publication_date} />
  //       )
  //   }
  //   )

  // }
  const displayAnnouncement=()=>{
    return (
      <FlatList
        data={data.announcement}
        renderItem={({ item, index }) =>
         index < 3?<AnnouncementItem 
         key={index} 
         title={item.title} 
         description={item.description} 
         publication_date={item.publication_date} 
         />:<></>
        }
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    )

  }



  return (
    <SafeAreaView>
      <HeaderComponent navigation={navigation} screenName="" />
      {/* <View style={{ height: 620}}> */}
      <View  style={styles.homeScroll}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profile}>
            <Image
              style={styles.photo}
              source={require("../assets/photos/chris_photo.jpeg")}
            />
            <View>
              <Text style={styles.profileInfo}>[개발4팀] 크리스팀원</Text>
              <Text style={styles.profileInfo}>성원애드피아</Text>
            </View>
            <View style={styles.space}>

            </View>
          </View>
          <View style={styles.dateSection}>
            <Text>{year.toString()}-{month.toString()}-{date.toString()}({day.toString()})</Text>
          </View>
          <View style={styles.attendance}>
            <View>
              <Text style={styles.attendanceStyle}>출근시간</Text>
              {
                attendanceHour == -1 ?
                  <Text style={styles.attendanceTime}>-</Text>
                  :
                  <Text style={styles.attendanceTime}>{attendanceHour}:{attendanceMinute}</Text>
              }

            </View>
            <View>
              <Text style={styles.attendanceStyle}>퇴근시간</Text>
              {
                goHomeHour == -1 ?
                  <Text style={styles.attendanceTime}>-</Text>
                  :
                  <Text style={styles.attendanceTime}>{goHomeHour}:{goHomeMinute}</Text>
              }
            </View>
          </View>
          <View style={styles.checkButtonSection}>
            <TouchableOpacity
              onPress={getAttendanceTime}
              disabled={isButtonDisabled}>
              <View style={isButtonDisabled ? styles.inactiveAttendanceCheckButton : styles.activeAttendanceCheckButton}>
                <Text style={{ color: "#004A94" }}>출근하기</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={getGoHomeTime}>
              <View style={styles.goHomeCheckButton}>
                <Text style={{ color: "#004A94" }}>퇴근하기</Text>
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
          <View style={styles.separationLine2}></View>
          <View style={styles.announcement}>
            <Text style={styles.titleStyle}>최근 공지사항</Text>
            {
              displayAnnouncement()
            }
          </View>
          <View style={styles.bottomLine}></View>
          <View style={styles.bottomSpace}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#004A94",
    height: "8%",
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  profileInfo: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  space: {
    height: 20,
    width: 20
  },
  dateSection: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  attendance: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 5
  },
  attendanceStyle: {
    opacity: 0.4
  },
  attendanceTime: {
    alignSelf: "center"
  },
  checkButtonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10
  },
  activeAttendanceCheckButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 180,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#004A94",
    marginTop: 15,

  },
  inactiveAttendanceCheckButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 180,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#004A94",
    marginTop: 15,
    opacity: 0.6

  },
  goHomeCheckButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 180,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#004A94",
    marginTop: 15
  },
  separationLine: {
    backgroundColor: "#D1D1D1",
    height: 5,
    marginTop: 15
  },
  separationLine2: {
    backgroundColor: "#D1D1D1",
    height: 5,
    marginTop: 10
  },
  annualLeave: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  annualLeaveManagement: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004A94",
    borderRadius: 2,
    width: 90,
    height: 25

  },
  annualLeaveManagementText: {
    color: "white",
    fontWeight: "bold",


  },
  homeScroll:{
    height:Platform.OS==="ios"?650:610,
   
  },
  announcement: {
    marginTop: Platform.OS === 'ios'?50:20,
    marginLeft: 10,
    marginRight: 10,
   // backgroundColor:"blue",
    height:"40%",
    justifyContent: "space-between"
  },
  announcementStyle: {
    marginTop: Platform.OS==="ios"?25:15,
    marginLeft: 5,
    marginRight: 5,
    
  },
  titleStyle: {
    //fontWeight: "bold",
    fontSize: 16
  },
  dateStyle: {
    //fontWeight: "100"
    opacity:0.5
  },
  bottomLine: {
    backgroundColor: "#D1D1D1",
    height: 5,
    marginTop: Platform.OS==="ios"?10:35
  },
  bottomSpace: {
    //backgroundColor:"white",
    height: 85
  }
});