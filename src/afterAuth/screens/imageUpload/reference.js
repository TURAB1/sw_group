

// const fileUploadServer = "https://mobfile.swadpia.co.kr/";
// const fileServerAuthKey : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoX25hbWUiOiJzd2FkcGlhX25zbiIsImF1dGhfaWQiOiJzd2FkcGlhX25zbiIsImF1dGhfa2V5IjoiU3dhZHBpYTIwMjMxMTI0IyMifQ.cB5DtxjmQDir_1sCb3kA097PVbn0yzSppWDS1_EKioQ",

// const fn_fileUploadToServer = async(fileResponse) => {
//        try {
//            const url = mConst.fileUploadServer + "api/v1/fileupload/" + loginUserInfo.staff_id;
//            const thumbnail_new = await mUtils.SingleImageUpload(url,mConst.fileServerAuthKey,fileResponse[0]);
//            if ( mUtils.isEmpty(thumbnail_new?.filename)) {
//                mUtils.fn_call_toast('파일업로드중 오류가 발생하였습니다.');
//                setFileResponse([])
//                setLoading(false);
//                return;
//            }else{
//                const sendMessages = fileResponse[0]?.originalFileName ?? "파일";
//                const sendImageUrl =   mConst.fileUploadServer  + thumbnail_new?.filename
//                handleSend(sendMessages,sendImageUrl,fileResponse[0]?.isFile)
//                setFileResponse([])
//                setLoading(false);
//            }
//        }catch(e){
//            console.log("ee222",e)
//        }
//    }


// let formData = new FormData();
//      formData.append('file', imgData);
//      const FETCH_TIMEOUT = 30000;
//      const options = {
//          body: formData,
//          method: 'POST',
//          headers: {
//              "Content-Type": "multipart/form-data",
//              'Authorization' : token
//          },
//      };


// const SERVER_URL = 'http://localhost:3000';

// const createFormData = (photo, body = {}) => {
//   const data = new FormData();

//   data.append('photo', {
//     name: photo.fileName,
//     type: photo.type,
//     uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
//   });

//   Object.keys(body).forEach((key) => {
//     data.append(key, body[key]);
//   });

//   return data;
// };

  // const[name,setName]=React.useState("");
  // const[type,setType]=React.useState("");
  // const[uri,setUri]=React.useState("");



  // const handleUploadPhoto2 = () => {
  //  photoData=photo.assets[0];
  //  console.log(photoData)
  //   fetch(`${SERVER_URL}/api/upload`, {
  //     method: 'POST',
  //     body: JSON.stringify(createFormData(photoData, { userId: '123' })),
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log('response', response);
  //     })
  //     .catch((error) => {
  //       console.log('error', error);
  //     });
  // };


    // const handleUploadPhoto2 = async () => {
  //   const photoData = photo.assets[0];

  //   const fileUploadServer = "https://mobfile.swadpia.co.kr";
  //   const fileServerAuthKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoX25hbWUiOiJzd2FkcGlhX25zbiIsImF1dGhfaWQiOiJzd2FkcGlhX25zbiIsImF1dGhfa2V5IjoiU3dhZHBpYTIwMjMxMTI0IyMifQ.cB5DtxjmQDir_1sCb3kA097PVbn0yzSppWDS1_EKioQ";
  //   let formData = new FormData();
  //   formData.append('file', {
  //     uri: photo.assets[0].uri,
  //     name: photo.assets[0].fileName,
  //     //fileName: photo.assets[0].fileName,
  //     type: photo.assets[0].type
  //   });

  //   const FETCH_TIMEOUT = 30000;
  //   const controller = new AbortController();
  //   const options = {
  //     body: JSON.stringify(formData),
  //     method: 'POST',
  //     signal: controller.signal,
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       'Authorization': fileServerAuthKey,
  //     },
  //   };
   
  //   // await fetch(`${fileUploadServer}/api/v1/fileupload/chris`, options)
  //   //   .then((response) => response.json())
  //   //   .then((response) => {
  //   //     console.log('response', JSON.stringify(response));
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log('error', error);
  //   //   });

  //   const promise = fetch(`${fileUploadServer}/api/v1/fileupload/chris`, options);
  //   const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

  //   promise
  //     .then((response) => response.json())
  //     .then(response => {
  //       console.log('response', JSON.stringify(response));
  //     })
  //     .catch(error => console.error('timeout exceeded'));

  // };

