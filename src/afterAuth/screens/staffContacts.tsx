import * as React from "react";
import {
    Alert,
    FlatList,
    Image,
    Modal,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "@thevsstech/react-native-skeleton";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import utils from "../../constants/utils";
import { StaffContactsTop } from "../components/staffContactsTop";
import { HeaderComponent } from "../components/headerComponent";

export const StaffContactsScreen = ({ navigation }: any) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [employeeName, setEmployeeName] = React.useState("");
    const [employeePhoto, setEmployeePhoto] = React.useState("");
    const [employeePhoneNumber, setEmployeePhoneNumber] = React.useState("");
    const [employeeDepartment, setEmployeeDepartment] = React.useState("");
    const [data, setData] = React.useState<any>()
    const [staffLoading, setStaffLoading] = React.useState(true);
    const [isOpen, setIsOpen] = React.useState(false);
    const dispatch = useDispatch<any>();

    React.useEffect(() => {
        let url = `${utils.serverUrl}/api/management/organization.php?action=find_group_total`;  //조긱도
        const customCookie = `LoginUser={"staff_id":"test"};os_type=null&company=CPCSW;`;
        let returnCode = { code: '9999' };
        let sendData = {
            a: 10,
            b: 20,
        }

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
                    setStaffLoading(false);
                    console.log(JSON.stringify(data));

                });
        }
        initFetch();
    }, []);

    const handleEmployeeClick = (photo: any, name: any, phoneNumber: any, department: any) => {
        setModalVisible(true);
        setEmployeeName(name);
        setEmployeePhoto(photo);
        setEmployeePhoneNumber(phoneNumber);
        setEmployeeDepartment(department)

    }
    const handleCloseModal = () => {
        setModalVisible(!modalVisible);
    }
    type ItemProps = {
        photo: any
        name: any
        phoneNumber: any
        department: any
    };
    const ModalDisplay = () => {
        return (
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <View style={styles.departmentSection}>
                            <Text style={styles.team}>[성원애드피아]{employeeDepartment}</Text>
                            <TouchableOpacity
                                onPress={handleCloseModal}>
                                <Entypo name="cross" size={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imageSection}>
                            <Image
                                style={styles.employeePhoto}
                                source={{ uri: "https://swerp.swadpia.co.kr/uploads/staff_photo/" + employeePhoto }}
                            />
                            <View>
                                <Text style={styles.modalText}>{employeePhoneNumber}</Text>
                                <Text style={styles.modalText}>{employeeName}</Text>
                            </View>

                        </View>
                        <View style={styles.contactSection}>
                            <FontAwesome6 name="square-phone" size={30} color={"green"} />
                            <Entypo name="old-phone" size={30} color={"gray"} />
                            <FontAwesome name="envelope" size={30} color={"blue"} />
                            <Entypo name="star-outlined" size={30} color={"blue"} />
                        </View>

                    </View>
                </View>
            </Modal>
        )
    }

    const EmployeeItem = ({ photo, name, phoneNumber, department }: ItemProps) => {
        return (
            <View>
                <View style={styles.employee}>
                    <Image
                        style={styles.profilePhoto}
                        source={{ uri: "https://swerp.swadpia.co.kr/uploads/staff_photo/" + photo }}
                    />
                    <Text>{name}</Text>
                </View>


            </View>
        )
    };
    return (
        <SafeAreaView style={{ backgroundColor: modalVisible ? "#999999" : "white", flex: 1 }}>
            <View style={styles.headerContainer}>
                <HeaderComponent navigation={navigation} screenName="회사연락망" />
            </View>
            <StaffContactsTop />
            {
                data != null && !staffLoading
                    ?
                    <ScrollView style={{ marginLeft: 10, marginRight: 10 }}>
                        <ModalDisplay />
                        {
                            data.row.sw.map((item: any, index: any) => {
                                let department=item.text;
                                return (
                                    <View key={index} >
                                        <View key={index} style={styles.department}>
                                            <Text key={index} style={styles.departmentText}>{item.text}</Text>
                                        </View>
                                        <View style={styles.container} >
                                            {
                                                item.children.map((item: any, index: any) => {
                                                    let team=item.text;
                                                    return (
                                                        <View key={index} >
                                                            {
                                                                item.children == "" ?
                                                                    // item.leaf=="true"?
                                                                    <TouchableOpacity onPress={() => handleEmployeeClick(item.photo, item.text, item.mobile,department)}>
                                                                        <EmployeeItem
                                                                            key={index}
                                                                            photo={item.photo}
                                                                            name={item.text}
                                                                            phoneNumber={item.mobile}
                                                                            department={department}
                                                                        />
                                                                    </TouchableOpacity>
                                                                    :
                                                                    <View style={styles.innerContainer}>
                                                                        {
                                                                            item.children.map((item: any, index: any) => {
                                                                                return (
                                                                                    <View key={index} >
                                                                                        <TouchableOpacity onPress={() => handleEmployeeClick(item.photo, item.text, item.mobile, team)}>
                                                                                            <EmployeeItem
                                                                                                key={index}
                                                                                                photo={item.photo}
                                                                                                name={item.text}
                                                                                                phoneNumber={item.mobile}
                                                                                                department={team}
                                                                                            />
                                                                                        </TouchableOpacity>
                                                                                    </View>
                                                                                )
                                                                            }
                                                                            )
                                                                        }
                                                                    </View>
                                                            }
                                                        </View>
                                                    )
                                                }
                                                )
                                            }
                                        </View>
                                    </View>
                                )
                            }
                            )
                        }
                    </ScrollView>

                    :
                    <FlatList
                        data={[1, 1, 1, 1, 1, 1, 1]}
                        showsVerticalScrollIndicator={false}
                        renderItem={(item) =>
                            <Skeleton >
                                <Skeleton.Item alignItems="center">
                                    <Skeleton.Item
                                        marginTop={6}
                                        width={340}
                                        height={40}
                                        borderRadius={4}
                                    />
                                    <Skeleton.Item flexDirection="row">
                                        <Skeleton.Item
                                            marginTop={6}
                                            width={80}
                                            height={80}
                                            borderRadius={7}
                                            marginRight={5}

                                        />
                                        <Skeleton.Item
                                            marginTop={6}
                                            width={80}
                                            height={80}
                                            borderRadius={7}
                                            marginRight={5}
                                        />
                                        <Skeleton.Item
                                            marginTop={6}
                                            width={80}
                                            height={80}
                                            borderRadius={7}
                                            marginRight={5}

                                        />
                                        <Skeleton.Item
                                            marginTop={6}
                                            width={80}
                                            height={80}
                                            borderRadius={7}
                                            marginRight={5}
                                        />
                                    </Skeleton.Item>
                                </Skeleton.Item>
                            </Skeleton>
                        }
                    />
            }
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    staffContacts: {
        backgroundColor: "white",
        flex: 1,

    },
    headerContainer:{
        marginLeft: 10,
        marginRight: 10,
      },
    
    department: {
        height: 30,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#004A94",
        marginTop: 10,

    },
    departmentText: {
        color: "white",
        fontWeight: "bold",
    },
    employee: {
        alignItems: "center",
        justifyContent: "center",
        height: 95,
        width: 65,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "gray",
        marginTop: 10,
        marginRight: 9
    },
    team: {
        fontFamily: "Noto Sans KR Bold"
    },
    profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    employeePhoto: {
        width: 130,
        height: 130,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    modalView: {

        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: 340,
        height: 280,
        justifyContent: "space-between",

    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    departmentSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10

    },
    imageSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    },
    container: {
        marginTop: 10,
        flexDirection: "row",
        flexWrap: "wrap"

    },
    innerContainer: {

        flexDirection: "row",
        // flexWrap: "wrap"

    },
    contactSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,

    }

}
)