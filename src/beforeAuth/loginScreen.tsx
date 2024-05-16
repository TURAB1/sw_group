import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import * as React from 'react';
import { TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setSignIn } from '../Global/reducers/sungwon_reducer';
import { Image } from '@rneui/themed';
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import imagePaths from '../constants/imagePaths';
import utils from '../constants/utils';

const LoginScreen = () => {
    const [id, setId] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [logedIn, setLogedIn] = React.useState(false);
    const [data, setData] = React.useState<any>(null);
    const sungwon = useSelector((state: any) => state.sungwon);
    const dispatch = useDispatch<any>()

    React.useEffect(() => {
        if (data != null && data.state == "true")
            dispatch(setSignIn(true));
    }, [data])
    const loginCheck = async () => {

        let url = `${utils.serverUrl}/api/member/member.php?action=login`;
        const customCookie = `LoginUser={"staff_id":"test"};os_type=null&company=CPCSW;`;
        let sendData = {
            staff_id: id,
            staff_pw: password,
            token: "sdshfgdfdjf",
            device_info: {
                "apiLevel": -1, "brand": "Apple", "buildNumber": "5",
                "deviceId": "iPhone13,2", "model": "iPhone 12", "osType": "ios", "systemVersion": "16.4",
                "uniqueId": "A69A1551-200F-4097-9C3A-6959F3181083", "version": "1.0.0"
            }

        };
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


                if (data.state == "true") {
                    setData(data);
                    console.log(JSON.stringify(data));
                } else {
                    Alert.alert("계정 정보가 올바르지 않습니다");
                }

            })
            .catch((error) => {
                console.log(error)
            })
            ;

    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <SafeAreaView style={styles.loginPage}>
            <View >
                <View style={styles.introImageContainer}>
                    <Image
                        style={styles.introImage}
                        source={imagePaths.introImage}
                        
                    />
                </View>
                <Text style={styles.account}>Account</Text>
                <TextInput
                    style={id ? styles.idInput : [styles.idInput, { opacity: 0.6 }]}
                    placeholder="Enter user ID "
                    keyboardType="ascii-capable"
                    value={id}
                    onChangeText={(text) => setId(text)}
                />
                <Text style={styles.password}>Password</Text>
                <View style={styles.passwordInputContainer}>
                    <TextInput
                        style={password ? styles.passwordInput : [styles.passwordInput, { opacity: 0.5 }]}
                        placeholder="Enter Password"
                        keyboardType="ascii-capable"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <MaterialCommunityIcons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24}
                        color="#aaa"
                        style={styles.eyeIcon}
                        onPress={toggleShowPassword}
                    />
                </View>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                <TouchableOpacity onPress={loginCheck}>
                    <View style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.otherOptions}>Or connect using</Text>

                <View style={styles.sns}>
                    <Image
                        style={styles.snsLogo}
                        source={imagePaths.facebookIcon}
                    />
                    <Image
                        style={styles.snsLogo}
                        source={imagePaths.googleIcon}
                    />
                    <Image
                        style={styles.snsLogo}
                        source={imagePaths.appleIcon}
                    />
                    <Image
                        style={styles.snsLogo}
                        source={imagePaths.xIcon}
                    />
                    <Image
                        style={styles.snsLogo}
                        source={imagePaths.kakaoIcon}
                    />

                </View>
                <View style={styles.signUp}>
                    <Text style={styles.noAccount}>Don't have an account?</Text>
                    <TouchableOpacity onPress={loginCheck}>
                    <Text style={styles.signUpText}>SingUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginPage: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "white",

    },
    title: {
        color: "blue",
        alignSelf: "center",
        fontWeight: "900"
    },
    introImageContainer: {
        flexDirection: "row",
        justifyContent: "center",

    },
    introImage: {
        width: 180,
        height: 80,

    },
    account: {
        marginTop: 20,
        fontFamily: "Roboto Light"
    },
    password: {
        marginTop: 10,
        fontFamily: "Roboto Light"
    },
    idInput: {
        fontSize: 15,
        backgroundColor: "#D1D1D1",
        width: 300,
        height: 50,
        borderRadius: 20,
    },
    passwordInputContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: "#D1D1D1",
        width: 300,
        height: 50,
        borderRadius: 20,

    },
    passwordInput: {
        fontSize: 15,
        backgroundColor: "#D1D1D1",
        width: 250,
        height: 50,
        borderRadius: 20,

    },
    eyeIcon: {

    },
    loginButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#004A94",
        borderRadius: 20,
        width: 300,
        height: 50,
        marginTop: 8

    },
    loginButtonText: {
        color: "white",
        fontWeight: "bold",
    },
    sns: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    snsLogo: {
        width: 40,
        height: 40
    },
    forgotPassword: {
        alignSelf: "flex-end",
        marginTop: 8,
        fontFamily: "Roboto Light"

    },
    otherOptions: {
        alignSelf: "center",
        marginTop: 10,
        fontFamily: "Roboto Light"
    },
    noAccount: {
        fontFamily: "Roboto Light"
    },
    signUp: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "center"
    },
    signUpText: {
        color: "#004A94",
        fontFamily: "Roboto Light"
    }
})