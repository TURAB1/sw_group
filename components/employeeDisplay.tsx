import * as React from "react";
import {
    Alert,
    FlatList,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useSelector } from "react-redux";
import Skeleton from "@thevsstech/react-native-skeleton";


export const EmployeeDisplay = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [employeeName, setEmployeeName] = React.useState("");
    const [employeePhoto, setEmployeePhoto] = React.useState("");
    const [employeePhoneNumber, setEmployeePhoneNumber] = React.useState("");
    const [employeeDepartment, setEmployeeDepartment] = React.useState("");
    // const sungwon = useSelector((state: any) => state.sungwon);
    const [data, setData] = React.useState<any>()
    const [staffLoading, setStaffLoading] = React.useState(true);
   
  
    React.useEffect(() => {
      let url = "https://swerp.swadpia.co.kr/api/management/organization.php?action=find_group_total";  //조긱도
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
           
          });
      }
     initFetch();
    }, );

    const handleEmployeeClick = (photo: any, name: any, phoneNumber: any, department: any) => {
        setModalVisible(true);
        setEmployeeName(name);
        setEmployeePhoto(photo);
        setEmployeePhoneNumber(phoneNumber);
        setEmployeeDepartment(department)



    }
    type ItemProps = {
        photo: any
        name: any
        phoneNumber: any
        department: any
    };

    const EmployeeItem = ({ photo, name, phoneNumber, department }: ItemProps) => {
        return (
            <View>
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
                                <Text>[성원애드피아]{employeeDepartment}</Text>
                                <TouchableOpacity
                                    onPress={() => setModalVisible(!modalVisible)}>
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

                        </View>
                    </View>
                </Modal>
                <TouchableOpacity onPress={() => handleEmployeeClick(photo, name, phoneNumber, department)}>
                    <View style={styles.employee}>
                        <Image
                            style={styles.profilePhoto}
                            source={{ uri: "https://swerp.swadpia.co.kr/uploads/staff_photo/" + photo }}
                        />
                        <Text>{name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    };
    return (
        data!= null && !staffLoading
            ?
            <FlatList
                data={data.row.sw}
                renderItem={
                    ({ item, index }) =>
                        <>
                            <View style={styles.department}>
                                <Text style={styles.departmentText}>{item.text}</Text>
                            </View>
                            <FlatList
                                data={item.children}
                                renderItem={
                                    ({ item, index }) =>
                                        <EmployeeItem
                                            key={index}
                                            photo={item.photo}
                                            name={item.text}
                                            phoneNumber={item.mobile}
                                            department={""}
                                        />
                                }
                                numColumns={5}
                                scrollEnabled={false}
                            />
                        </>
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

const styles = StyleSheet.create({
    department: {
        height: 30,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#004A94",
        marginTop: 10

    },
    departmentText: {
        color: "white",
        fontWeight: "bold",
    },
    employee: {
        alignItems: "center",
        justifyContent: "center",
        height: 85,
        width: 65,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "gray",
        marginTop: 10,
        marginRight: 10
    },
    profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    employeePhoto: {
        width: 120,
        height: 100,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,

        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 20,
        },
        shadowOpacity: 0.8,

    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    departmentSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    imageSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    }

}
)