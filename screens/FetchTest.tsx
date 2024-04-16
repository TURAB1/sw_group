import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Fetchtest = () => {
    React.useEffect(  ()=>{
        const customCookie = `LoginUser={"staff_id":"test"};os_type=null&company=CPCSW;`;
            let returnCode = {code:'9999'};
            //let url="https://new-dev-erp.swadpia.co.kr/api/management/new_recruit.php?action=findList";
            //let url="https://swerp.swadpia.co.kr/api/management/new_recruit.php?action=findList";
            //let url="https://new-dev-erp.swadpia.co.kr/api/management/organization.php?action=find_group_total";
            
            //let url="https://swerp.swadpia.co.kr/api/management/organization.php?action=find_group_total";  //조긱도
           let url="https://swerp.swadpia.co.kr/api/management/notice.php?action=findList&category=notice";  //사내공지
            let sendData={
                a: 10,
                b: 20,
              }
           const initFetch=async()=>{
             await fetch(url,{
                method: 'POST', 
                headers: new Headers({
                    'Accept': 'application/json',                
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Cookie' : customCookie
                }), 
                body: JSON.stringify(sendData)
              })
              .then((response) => response.json())
              .then((data) => {
                console.log(JSON.stringify(data));
              });
            }
            initFetch();
      },[]);
  return (
    <SafeAreaView>
      <Text>Fetchtest</Text>
      <Image
      style={{width:70,height:70}}
     // source={{uri:"https://cdn.weatherapi.com/weather/64x64/night/113.png"}}
     //source={{uri:"https://swerp.swadpia.co.kr/uploads/staff_photo/staff_photo1695601909.JPG"}}
     />
    
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({})