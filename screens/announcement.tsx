import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { HeaderComponent } from "../components/headerComponent";
import { data } from "../assets/information";

export const AnnouncementScreen = ({navigation, screenName}:any) => {

  interface Props {
    title: any
    description: any
    publication_date: any
  }

  const AnnouncementItem: React.FC<Props> = ({ title, description, publication_date }) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate("Announcement")}>
        <View style={styles.announcementStyle}>
          <Text style={styles.titleStyle}> {title}</Text>
          <View style={styles.publicationDate}>
            <Text style={styles.dateStyle}>작성일:{publication_date}</Text>
            <Text style={styles.dateStyle}>시행일:{publication_date}</Text>
          </View>
          <View style={styles.line}></View>
        </View>
      </TouchableOpacity>
    );
  }

  const displayAnnouncement = () => {
    // return data.announcement.map((item:any,index:any)=>{
    //  return(
    //   <AnnouncementItem key={index} title={item.title} description={item.description} publication_date={item.publication_date}/>
    //   )
    //  }
    // )
    return (
      <FlatList
        data={data.announcement}
        renderItem={({ item, index }) => <AnnouncementItem key={index} title={item.title} description={item.description} publication_date={item.publication_date} />}
        showsVerticalScrollIndicator={false}
      />
    )

  }

  return (
    <SafeAreaView style={styles.announcementSection}>
      <HeaderComponent navigation={navigation} screenName="공지사항" />
      <View style={styles.topButtonSection}>
        <TouchableOpacity >
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
      <View
        style={styles.searchSection}>
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
          displayAnnouncement()
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
  line: {
    backgroundColor: "#D1D1D1",
    height: 2,
    marginTop: 13,
    marginBottom: 13
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 16
  },
  dateStyle: {
    fontWeight: "normal"
  }
});