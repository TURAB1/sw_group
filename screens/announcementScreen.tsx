import * as React from "react"
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native"
import { HeaderComponent } from "../components/headerComponent";
import { useDispatch, useSelector } from "react-redux";
import { setTitle, setContent } from "../Global/reducers/sungwon_reducer";
import Skeleton from "@thevsstech/react-native-skeleton";
import { setNoticeData } from "../Global/reducers/sungwon_reducer";


export const AnnouncementScreen = ({ navigation, screenName }: any) => {
  const [data, setData] = React.useState<any>()
  const [noticeLoading, setNoticeLoading] = React.useState(true);
  // const sungwon = useSelector((state: any) => state.sungwon);
  const dispatch = useDispatch<any>()
 
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
         
          setData(data);
          //dispatch(setNoticeData(data))
          setNoticeLoading(false);
           //dispatch(setNoticeLoadingState(false))
          // console.log("fetch notice successful");
        });
    }
   initFetch();
  }, );


  const handleAnnouncementClick = (newsTitle: any, newsContent: any) => {
    dispatch(setTitle(newsTitle));
    dispatch(setContent(newsContent));
    navigation.navigate("Announcement");
  }
  interface Props {
    title: any
    description: any
    publication_date: string
  }

  const AnnouncementItem: React.FC<Props> = ({ title, description, publication_date }) => {
    return (
      <TouchableOpacity onPress={() => handleAnnouncementClick(title, description)}>
        <View style={styles.announcementStyle}>
          <Text style={styles.titleStyle}> {title}</Text>
          <View style={styles.publicationDate}>
            <View style={styles.dateDisplay}>
              <Text style={styles.dateStyle}>{"작성일:"}</Text>
              <Text style={styles.dateStyle}>{publication_date}</Text>
            </View>
            <View style={styles.dateDisplay}>
              <Text style={styles.dateStyle}>{"시행일:"}</Text>
              <Text style={styles.dateStyle}>{publication_date}</Text>
            </View>
          </View>
          <View style={styles.line}></View>
        </View>
      </TouchableOpacity>
    );
  }

  const _renderDisplayAnnouncement = () => {
    return (
      data!== null && !noticeLoading
        ?
        <FlatList
          data={data.row}
          renderItem={
            ({ item, index }) =>
              <AnnouncementItem
                key={index}
                title={item.subject}
                description={item.text}
                publication_date={item.enforcement_date}
              />
          }
          showsVerticalScrollIndicator={false}
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
    <SafeAreaView style={styles.announcementSection}>
      <HeaderComponent navigation={navigation} screenName="공지사항" />
      <View style={styles.topButtonSection}>
        <TouchableOpacity>
          <View style={styles.allButton}>
            <Text style={styles.allButtonText}>전체</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.button}>
            <Text>공지</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.button}>
            <Text>인사</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.button}>
            <Text>근태</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.button}>
            <Text>연락망</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          //onChangeText={setContent}
          // value={content}
          placeholder='검색어'
          keyboardType="ascii-capable" />
        <TouchableOpacity >
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>검색</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ height: "80%" }}>
        {
          _renderDisplayAnnouncement()
        }
      </View>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  announcementSection: {
    marginLeft: 10,
    marginRight: 10
  },
  topButtonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10

  },
  allButton: {
    height: 30,
    width: 60,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004A94",

  },
  allButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
  searchSection: {
    marginTop: 10,
    flexDirection: "row",
  },
  searchInput: {
    backgroundColor: "white",
    width: "83%",
    height: 40
  },
  searchButton: {
    height: 40,
    width: 60,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004A94",

  },
  searchButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  announcementStyle: {
    marginLeft: 5,
    marginRight: 5
  },
  publicationDate: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dateDisplay: {
    flexDirection: "row"
  },
  line: {
    backgroundColor: "#D1D1D1",
    height: 2,
    marginTop: 13,
    marginBottom: 13
  },
  titleStyle: {
    fontSize: 16,

  },
  dateStyle: {
    opacity: 0.5
  }
});