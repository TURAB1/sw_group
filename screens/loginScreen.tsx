import { Alert, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import * as React from 'react';
import { TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setSignIn } from '../Global/reducers/sungwon_reducer';

const LoginScreen = () => {
    const [loginInput, setLoginInput] = React.useState("");
    const sungwon=useSelector((state:any)=>state.sungwon)
    const dispatch = useDispatch<any>()

    const authCheck=()=>{

        console.log(loginInput)
        if(loginInput=="chris"){
         dispatch(setSignIn(true));
        }else{
            Alert.alert("아이드가 올바르지 않습니다")
        }
    }
    return (
        <SafeAreaView style={styles.loginPage}>
            <View >
                <Text style={styles.title}>성원그룹웨어</Text>
                <Text style={styles.id}>ID</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="아이드 입력"
                    keyboardType="ascii-capable"
                    value={loginInput}
                    onChangeText={(text) => setLoginInput(text)}
                />
               <TouchableWithoutFeedback onPress={authCheck}>
                <View style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginPage: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 300

    },
    title: {
        color: "blue",
        alignSelf:"center",
        fontWeight:"900"
    },
    id: {
        marginTop: 20
    },
    searchInput: {
        fontSize: 15,
        borderColor: "black",
        borderWidth: 2,
        width: 200,
        height: 50

    },
    loginButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#004A94",
        borderRadius: 2,
        width: 200,
        height: 50,
        marginTop: 20

    },
    loginButtonText: {
        color: "white",
        fontWeight: "bold",


    },
})