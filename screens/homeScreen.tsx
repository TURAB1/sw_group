import * as React from "react"
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  PixelRatio,
  Platform
} from "react-native";

import { ScaledSheet } from "react-native-size-matters";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import Skeleton from "@thevsstech/react-native-skeleton";
import { HeaderComponent } from "../components/headerComponent";
import { NavigationContainer } from '@react-navigation/native';
// import { data } from "../assets/information.ts";
import { UseDispatch, useDispatch } from "react-redux";
import { setNoticeData,setNoticeLoadingState, setTitle, setContent } from "../Global/reducers/sungwon_reducer.ts";
import { fetchStaffData } from "../Global/reducers/sungwon_reducer.ts";


export const HomeScreen = ({ navigation, screenName, props }: any) => {
  const [attendanceHour, setAttendanceHour] = React.useState(-1);
  const [attendanceMinute, setAttendanceMinute] = React.useState(-1);
  const [goHomeHour, setGoHomeHour] = React.useState(-1);
  const [goHomeMinute, setGoHomeMinute] = React.useState(-1);
  const [isButtonDisabled, setButtonDisabled] = React.useState(false);
  const [data, setData] = React.useState<any>()
  const [noticeLoading, setNoticeLoading] = React.useState(true);
  const dispatch = useDispatch<any>();
  React.useEffect(() => {
    const customCookie = `LoginUser={"staff_id":"test"};os_type=null&company=CPCSW;`;
    let returnCode = { code: '9999' };
    let url = "https://swerp.swadpia.co.kr/api/management/notice.php?action=findList";  //사내공지
    let page = 1
    let morePage = 10;
    let moreSkip = 0;
    let offset = 10;
    let sendData = {
      search_txt: "",
      category: "",
      skip: page == 0 ? "0" : moreSkip.toString(),
      take: page == 0 ? offset.toString() : morePage.toString(),
    };
    const initFetch = async () => {
      await fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
          'Cookie': customCookie
        }),
        body: JSON.stringify(sendData)
      })
        .then((response) => response.json())
        .then((data: any) => {
          console.log("data:" + JSON.stringify(data));
          setData(data);
          dispatch(setNoticeData(data))
          setNoticeLoading(false);
          dispatch(setNoticeLoadingState(false))
        });
    }
    initFetch();
  }, []);


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
  const handleAnnouncementClick = (newsTitle: any, newsContent: any) => {
    dispatch(setTitle(newsTitle));
    dispatch(setContent(newsContent));
    navigation.navigate("Announcement");
  }
  interface Props {
    title: any
    description: any
    publication_date: any
  }

  const AnnouncementItem: React.FC<Props> = ({ title, description, publication_date }) => {
    return (
      <TouchableOpacity onPress={() => handleAnnouncementClick(title, description)}>
        <View style={styles.announcementStyle}>
          <Text style={styles.titleStyle}> •{title}</Text>
          <Text style={styles.dateStyle}>{publication_date}</Text>

        </View>
      </TouchableOpacity>
    );
  }


  const displayAnnouncement = () => {
    return (
      data != null && !noticeLoading
        ?
        <FlatList
          data={data.row}
          renderItem={({ item, index }) =>
            index < 3 ? <AnnouncementItem
              key={index}
              title={item.subject}
              description={item.text}
              publication_date={item.enforcement_date}
            />
              :<></>

          }
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
        :             
         <Skeleton >
        <Skeleton.Item alignItems="center">
          <Skeleton.Item
            marginTop={6}
            width={300}
            height={50}
            borderRadius={4}
          />
          <Skeleton.Item
            marginTop={6}
            width={300}
            height={50}
            borderRadius={4}
          />
          <Skeleton.Item
            marginTop={6}
            width={300}
            height={50}
            borderRadius={4}
          />
        </Skeleton.Item>
      </Skeleton>
    )

  }



  return (
    <SafeAreaView>
      <HeaderComponent navigation={navigation} screenName="" />
      <View style={styles.homeScroll}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profile}>
            <Image
              style={styles.photo}
              source={require("../assets/photos/chris_photo.jpeg")}
            />
            <View>
              <Text style={styles.profileInfo}>[개발4팀] 크리스팀원</Text>
              <Text style={styles.profileInfo}>성원애드피아 </Text>
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
const styles = ScaledSheet.create({
  profile: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#004A94",
    height: "50@s",
    marginTop: "20@s",
    marginLeft: "10@s",
    marginRight: "10@s",
    borderRadius: "10@s"
  },
  photo: {
    width: "40@s",
    height: "40@s",
    // width:PixelRatio.getPixelSizeForLayoutSize(40),
    // height:PixelRatio.getPixelSizeForLayoutSize(40),
    borderRadius: "40@s",
  },
  profileInfo: {
    color: "white",
    fontSize: "16@s",
    fontWeight: "bold"
  },
  space: {
    height: "20@s",
    width: "20@s"
  },
  dateSection: {
    marginTop: "20@s",
    marginLeft: "10@s",
    marginRight: "10@s"
  },
  attendance: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "80@s",
    borderRadius: "5@s",
    borderWidth: "1@s",
    borderColor: "gray",
    marginTop: "15@s",
    marginLeft: "10@s",
    marginRight: "10@s"
  },
  attendanceStyle: {
    opacity: "0.4@s"
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
    height: "30@s",
    width: "160@s",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#004A94",
    marginTop: "15@s",

  },
  inactiveAttendanceCheckButton: {
    alignItems: "center",
    justifyContent: "center",
    height: "30@s",
    width: "160@s",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#004A94",
    marginTop: "15@s",
    opacity: 0.6

  },
  goHomeCheckButton: {
    alignItems: "center",
    justifyContent: "center",
    height: "30@s",
    width: "160@s",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#004A94",
    marginTop: "15@s"
  },
  separationLine: {
    backgroundColor: "#D1D1D1",
    height: "5@s",
    marginTop: "15@s"
  },
  separationLine2: {
    backgroundColor: "#D1D1D1",
    height: "5@s",
    marginTop: 10
  },
  annualLeave: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10@s",
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
  homeScroll: {
    height: Platform.OS == "ios" ? "580@s" : "560@s",


  },
  announcement: {
    marginTop: "20@s",
    marginLeft: "10@s",
    marginRight: "10@s",
    height: Platform.OS == "ios" ? "250@s" : "210@s",
    justifyContent: "space-between"
  },
  announcementStyle: {
    marginTop: Platform.OS == "ios" ? "25@s" : "13@s",
    marginLeft: "5@s",
    marginRight: "5@s",

  },
  titleStyle: {
    fontSize: "14@s",
    fontFamily: Platform.OS == "ios" ? "Noto Sans KR Regular" : "Noto Sans KR Extra Thin",
    // fontWeight:"600"
  },
  dateStyle: {
    opacity: "0.5@s"
  },
  bottomLine: {
    backgroundColor: "#D1D1D1",
    height: "5@s",
    marginTop: "35@s"
  },
  bottomSpace: {
    height: "85@s"
  }
});