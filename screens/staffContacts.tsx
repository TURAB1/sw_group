
import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView } from "react-native"
import { useDispatch } from "react-redux";
import { HeaderComponent } from "../components/headerComponent";
import { EmployeeDisplay } from "../components/employeeDisplay";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather"
import { fetchStaffData } from "../Global/reducers/sungwon_reducer";

export const StaffContactsScreen = ({ navigation, screenName }: any) => {
  const [input, setInput] = React.useState("");
  const [data, setData] = React.useState<any>()
  const [staffLoading, setStaffLoading] = React.useState(true);
  const dispatch = useDispatch<any>();


  // React.useEffect(() => {

  // dispatch(fetchStaffData());

  // }, []);

  return (
    <SafeAreaView style={styles.staffContacts}>
      <HeaderComponent navigation={navigation} screenName="회사연락망" />
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
            <Entypo name="star" size={30} color={"#004A94"} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.searchSection}>
        <Feather name="search" size={25} color="black"
          style={{ marginLeft: 1, marginRight: 4 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="검색하기"
          keyboardType="default"
          multiline={true}
          value={input}
          onChangeText={(text) => setInput(text)} />
      </View>
      <EmployeeDisplay/>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  staffContacts: {
    marginLeft: 10,
    marginRight: 10
  },
  topButtonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10

  },
  swButton: {
    height: 35,
    width: 90,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004A94",

  },
  swButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  mallButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 90,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",

  },
  star: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 90,

  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 6,
    height: 40
  },
  searchInput: {
    fontSize: 15,
  }


});