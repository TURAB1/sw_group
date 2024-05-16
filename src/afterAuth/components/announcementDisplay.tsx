import * as React from 'react'
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { RichEditor } from 'react-native-pell-rich-editor'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useDispatch, useSelector } from 'react-redux'

 const AnnouncementDisplay = ({ navigation,route }: any) => {
    //console.log("route==>>",route)
    const announcement = useSelector((state: any) => state.sungwon);

    const dispatch = useDispatch<any>();

    return (
        <SafeAreaView style={styles.announcementHeader}>
            <View style={styles.headerSection}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back-ios" size={30} />
                </TouchableOpacity>
                <Text>공지사항</Text>
                <View style={styles.space}></View>
            </View>

            <View
                style={styles.headerLine}>
            </View>
            <Text style={styles.title}>{announcement.title}</Text>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                        <RichEditor
                          initialContentHTML={announcement.content}
                           initialHeight={700}
                        />
                    </KeyboardAvoidingView>

                </ScrollView>
            </View>
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
    },
    title: {
        fontWeight: "bold",
        marginTop: 10,

    },
    content: {
        marginTop: 20,
    }
}

);
export default AnnouncementDisplay;
