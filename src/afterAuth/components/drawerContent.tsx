import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo";
import imagePaths from '../../constants/imagePaths';
import navigationStrings from '../../constants/navigationStrings';

const DrawerContent = ({ navigation }: any) => {
  return (
    <View>
      <SafeAreaView >
        <View style={styles.drawerHeader}>

          <Text style={[styles.headerTitle, [styles.drawerStyle]]}>성원그룹원그룹웍스</Text>

          <TouchableOpacity
            onPress={() => navigation.closeDrawer()}>
            <Entypo name="cross" size={30} color={"white"} />
          </TouchableOpacity>
        </View>
        <View style={styles.drawerStyle}>
          <View style={styles.profile}>
            <Image
              style={styles.photo}
              source={imagePaths.chrisPhoto}
            />
            <View>
              <Text>크리스팀원</Text>
              <Text>개발4팀</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.ANNOUNCEMENT)}>
            <Text style={styles.drawerItemStyle}>
              공지사항
            </Text>
          </TouchableOpacity>

          <View
            style={styles.line}>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.STAFF)}>
            <Text style={styles.drawerItemStyle}>
              회사연락망
            </Text>
          </TouchableOpacity>

          <View style={styles.line}>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.ATTENDANCE)}>
            <Text style={styles.drawerItemStyle}>
              나의근태현황
            </Text>
          </TouchableOpacity>
          <View
            style={styles.line}>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.IMAGE_UPLOAD)}>
            <Text style={styles.drawerItemStyle}>
              이미지 업로드
            </Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
  drawerStyle: {
    marginLeft: 20
  },
  drawerHeader: {
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60
  },
  headerTitle: {
    color: "white",

  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  profile: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20
  },
  line: {
    marginTop: 10,
    backgroundColor: "#D1D1D1",
    height: 1
  },
  drawerItemStyle: {
    marginTop: 20
  }
})