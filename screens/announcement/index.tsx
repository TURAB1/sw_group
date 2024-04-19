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
import { HeaderComponent } from "../../components/headerComponent";
import { useDispatch, useSelector } from "react-redux";
import { setTitle, setContent } from "../../Global/reducers/sungwon_reducer";
import Skeleton from "@thevsstech/react-native-skeleton";
import { setNoticeData } from "../../Global/reducers/sungwon_reducer";
import * as style from "./style"


export const AnnouncementScreen = ({ navigation, screenName }: any) => {
  const sungwon = useSelector((state: any) => state.sungwon);
  const dispatch = useDispatch<any>()


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
        <View style={style.styles.announcementStyle}>
          <Text style={style.styles.titleStyle}> {title}</Text>
          <View style={style.styles.publicationDate}>
            <View style={style.styles.dateDisplay}>
              <Text style={style.styles.dateStyle}>{"작성일:"}</Text>
              <Text style={style.styles.dateStyle}>{publication_date}</Text>
            </View>
            <View style={style.styles.dateDisplay}>
              <Text style={style.styles.dateStyle}>{"시행일:"}</Text>
              <Text style={style.styles.dateStyle}>{publication_date}</Text>
            </View>
          </View>
          <View style={style.styles.line}></View>
        </View>
      </TouchableOpacity>
    );
  }

  const _renderDisplayAnnouncement = () => {
    return (
      sungwon.noticeData !== null && !sungwon.noticeLoadingState
        ?
        <FlatList
          data={sungwon.noticeData.row}
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
    <SafeAreaView style={style.styles.announcementSection}>
      <HeaderComponent navigation={navigation} screenName="공지사항" />
      <View style={style.styles.topButtonSection}>
        <TouchableOpacity>
          <View style={style.styles.allButton}>
            <Text style={style.styles.allButtonText}>전체</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={style.styles.button}>
            <Text>공지</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={style.styles.button}>
            <Text>인사</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={style.styles.button}>
            <Text>근태</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={style.styles.button}>
            <Text>연락망</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={style.styles.searchSection}>
        <TextInput
          style={style.styles.searchInput}
          //onChangeText={setContent}
          // value={content}
          placeholder='검색어'
          keyboardType="ascii-capable" />
        <TouchableOpacity >
          <View style={style.styles.searchButton}>
            <Text style={style.styles.searchButtonText}>검색</Text>
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
