import React from 'react'
import { StyleSheet, Text, View, FlatList, Modal, Alert, TouchableOpacity, Image } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo";


export const SearchFilter = ({ data, input, setInput }: any) => {
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
                    <View style={styles.filteredSection}>
                        <Image
                            style={styles.profilePhoto}
                            source={photo}
                        />
                        <View>
                            <Text style={styles.filteredName}>{name}</Text>
                            <Text style={styles.filteredDepartment}>[성원애드피아]{department}</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        )
    };


    return (
        <View>
            <FlatList
                data={data}
                renderItem={
                    ({ item, index }) =>
                        input !== ""
                            ?
                            item.name.toLowerCase().includes(input.toLowerCase())
                                ?
                                <EmployeeItem
                                    key={index}
                                    photo={item.photo}
                                    name={item.name}
                                    phoneNumber={item.phone_number}
                                    department={item.department}
                                />
                                :
                                <></>
                            : <></>


                }
            />
        </View>
    )

}


const styles = StyleSheet.create({
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
    },
    filteredSection: {
        flexDirection: "row",
        alignItems: "center",
        marginTop:5,
        borderColor:"#D1D1D1",
        borderRadius:5,
        borderWidth:2
    },
    filteredName:{
     marginLeft:5,

    },
    filteredDepartment:{
      marginLeft:5,
      marginTop:2,
      opacity:0.6  
    }

})