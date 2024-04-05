import * as React from "react";
import { Alert, FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { data } from "../assets/information";


export const EmployeeDisplay = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [employeeName, setEmployeeName] = React.useState("");
    const [employeePhoto, setEmployeePhoto] = React.useState(1);
    const [employeePhoneNumber, setEmployeePhoneNumber] = React.useState("");
    const [employeeDepartment, setEmployeeDepartment] = React.useState("");

    const handleEmployeeClick = (photo: any, name: any, phoneNumber: any, department: any) => {
        setEmployeeName(name);
        setEmployeePhoto(photo);
        setEmployeePhoneNumber(phoneNumber);
        setEmployeeDepartment(department)
        setModalVisible(true);


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
                    animationType="slide"
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
                                    source={employeePhoto}
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
                            // source={require("../assets/photos/random_photo.png")}
                            source={photo}
                        />
                        <Text>{name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.department}>
                <Text style={styles.departmentText}>임원실</Text>
            </View>
            <View>

                <FlatList
                    data={data.employee.executive}
                    renderItem={
                        ({ item, index }) =>
                            <EmployeeItem
                                key={index}
                                photo={item.photo}
                                name={item.name}
                                phoneNumber={item.phone_number}
                                department={item.department}
                            />
                    }
                    numColumns={5}
                    scrollEnabled={false}
                />
            </View>
            <View style={styles.department}>
                <Text style={styles.departmentText}>감사</Text>
            </View>
            <View>

                <FlatList
                    data={data.employee.audit}
                    renderItem={
                        ({ item, index }) =>
                            <EmployeeItem
                                key={index}
                                photo={item.photo}
                                name={item.name}
                                phoneNumber={item.phone_number}
                                department={item.department}
                            />
                    }
                    numColumns={5}
                    scrollEnabled={false}
                />
            </View>
            <View style={styles.department}>
                <Text style={styles.departmentText}>경영지원본부</Text>
            </View>
            <View>

                <FlatList
                    data={data.employee.finance}
                    renderItem={
                        ({ item, index }) =>
                            <EmployeeItem
                                key={index}
                                photo={item.photo}
                                name={item.name}
                                phoneNumber={item.phone_number}
                                department={item.department}
                            />
                    }
                    numColumns={5}
                    scrollEnabled={false}
                />
            </View>
            <View style={styles.department}>
                <Text style={styles.departmentText}>IT연구소</Text>
            </View>
            <View>

                <FlatList
                    data={data.employee.it_research}
                    renderItem={
                        ({ item, index }) =>
                            <EmployeeItem
                                key={index}
                                photo={item.photo}
                                name={item.name}
                                phoneNumber={item.phone_number}
                                department={item.department}
                            />
                    }
                    numColumns={5}
                    scrollEnabled={false}
                />
            </View>

        </ScrollView>
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