import React from 'react';
import { View, Image, Button, Platform, SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { launchImageLibrary } from 'react-native-image-picker';
import utils from '../../../constants/utils';




const ImageUploadScreen = ({ navigation}:any) => {
  const [photo, setPhoto] = React.useState<any>();

  const handleChoosePhoto = () => {
    launchImageLibrary({mediaType: 'photo'}, (response:any) => {
      if (response) {
        setPhoto(response);
        console.log(response.assets[0].uri);
      }
    });
  };

  const handleUploadPhoto=async()=>{
    const photoData = photo.assets[0];
    console.log(photoData)
    const fileServerAuthKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoX25hbWUiOiJzd2FkcGlhX25zbiIsImF1dGhfaWQiOiJzd2FkcGlhX25zbiIsImF1dGhfa2V5IjoiU3dhZHBpYTIwMjMxMTI0IyMifQ.cB5DtxjmQDir_1sCb3kA097PVbn0yzSppWDS1_EKioQ";
    let formData = new FormData();
    formData.append('file', {
      uri: photo.assets[0].uri,
      name: photo.assets[0].fileName,
      //fileName: photo.assets[0].fileName,
      type: photo.assets[0].type
    }
    );
    axios({
      method: 'post',
      url: `${utils.fileUploadServer}/api/v1/fileupload/chris`,
      timeout: 30000,    
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': fileServerAuthKey,
      },
    })
    .then(response => {
      console.log("image upload successfully", response.data)
    })
    .catch(error => console.error('timeout exceeded'))
  }

  return (
    <SafeAreaView>
      <View style={styles.pageHeader}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={30} style={{padding:10}}/>
      </TouchableOpacity>
      <Text style={styles.pageTitle}>이미지 업로드</Text>
      <View></View>
      </View>
      <View style={{ marginTop: 40, alignItems: 'center', justifyContent: 'center' }}>

        {photo && (
          <>
            <Image
              source={{ uri: photo.assets[0].uri }}
              style={{ width: 300, height: 300 }}
            />
            <Button title="Upload Photo" onPress={handleUploadPhoto} />
          </>
        )}
        <Button title="Choose Photo" onPress={handleChoosePhoto} />
      </View>
    </SafeAreaView>
  );
};

export default ImageUploadScreen;

const styles=StyleSheet.create({
  pageHeader:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  pageTitle:{
    fontSize:25,opacity:0.5

  }
  
})