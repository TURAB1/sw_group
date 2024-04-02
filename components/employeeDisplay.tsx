import * as React from "react";
import { Alert, FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
//import data from "../assets/information.json";
import { data } from "../assets/information";


export const EmployeeDisplay = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [employeeName,setEmployeeName]=React.useState("");
    const [employeePhoto,setEmployeePhoto]=React.useState("")
    
    const handleEmployeeClick=(photo:any,name:any)=>{
       setEmployeeName(name);
       setEmployeePhoto(photo);
       setModalVisible(true)
   

    }
    type ItemProps = {
        photo: any
        name: any
    };

    const EmployeeItem = ({ photo, name }: ItemProps) => {
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
                            <Text style={styles.modalText}>{employeeName}</Text>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity onPress={()=>handleEmployeeClick(photo,name)}>
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
                    renderItem={({ item, index }) => <EmployeeItem key={index} photo={item.photo} name={item.name} />}
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
                    renderItem={({ item, index }) => <EmployeeItem key={index} photo={item.photo} name={item.name} />}
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
                    renderItem={({ item, index }) => <EmployeeItem key={index} photo={item.photo} name={item.name} />}
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
                    renderItem={({ item, index }) => <EmployeeItem key={index} photo={item.photo} name={item.name} />}
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },

}
)