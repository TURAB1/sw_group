import * as React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useDispatch, useSelector } from 'react-redux'

export const AnnouncementDisplay = ({ navigation }: any) => {
    const announcement= useSelector((state: any) => state.sungwon);

    const dispatch = useDispatch<any>();

    return (
        <SafeAreaView style={styles.announcementHeader}>
            <View style={styles.headerSection}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back-ios" size={30} />
                </TouchableWithoutFeedback>
                <Text>공지사항</Text>
                <View style={styles.space}></View>
            </View>

            <View
                style={styles.headerLine}>
            </View>
            <Text style={{fontWeight:"bold",marginTop:10}}>{announcement.title}</Text>
            {/* <View style={{marginTop:20}}>
              <Text>{announcement.content}</Text>
            </View> */}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    announcementHeader: {
        marginLeft: 10,
        marginRight: 10
    },
    headerSection: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    space: {
        height: 30,
        width: 30
    },
    headerLine: {
        marginTop: 10,
        backgroundColor: "#D1D1D1",
        height: 0.3
    }

}

);
