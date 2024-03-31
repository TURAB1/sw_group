import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { HeaderComponent } from "../components/headerComponent";

export const AnnouncementScreen=(navigation:any,screenName:any)=>{

  // interface Props2{
  //   day:any
  //   icon:any
  //   maxTemp:any
  //   minTemp:any 
  //   details:any
  // }

  // const ForecastComingDays:React.FC<Props2>=({day,icon,maxTemp,minTemp,details})=>{
  //   return(
  //         <View  style={styles.weatherStyle}>
  //           <Text>{new Date(day).toLocaleDateString("en-EN", { weekday: 'long' })}</Text> 
  //           <Text>{new Date(day).getMonth()+1}/{new Date(day).getDate()}</Text>    
  //           <Image 
  //             style={styles.weatherIcon}
  //             source={{uri:"https:"+icon}}/>
  //           <Text>Max Temp:{maxTemp}°C</Text> 
  //           <Text>Min Temp:{minTemp}°C</Text>  
  //           <Text>{details}</Text>
  //         </View>
  //     );
  // }

  // const getComingDaysForecast=()=>{

  //   if (data !==null){
  //    return  data.forecast.forecastday.map((item:any, index:any) => {
  //      if(index!==0){ 
        
  //       return (
  //       <ForecastComingDays key={index} day={item.date} icon={item.day.condition.icon} maxTemp={item.day.maxtemp_c} minTemp={item.day.mintemp_c} details={item.day.condition.text}/>
  //           );

  //         }
    
  //     });
  //   }
  // }
  return(
    <SafeAreaView style={styles.announcementSection}>
      <HeaderComponent navigation={navigation} screenName="공지사항"/>
      <View style={styles.topButtonSection}>
        <TouchableOpacity >
           <View style={styles.allButton}>
            <Text style={styles.allButtonText}>전체</Text>
           </View> 
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.button}>
              <Text>공지</Text>
          </View> 
        </TouchableOpacity>  
        <TouchableOpacity >
          <View style={styles.button}>
              <Text>인사</Text>
          </View> 
        </TouchableOpacity> 
        <TouchableOpacity >
          <View style={styles.button}>
              <Text>근태</Text>
          </View> 
        </TouchableOpacity>  
        <TouchableOpacity >
          <View style={styles.button}>
              <Text>연락망</Text>
          </View> 
        </TouchableOpacity> 
     </View>
     <View 
        style={styles.searchSection}>
          <TextInput
            style={styles.searchInput}
            //onChangeText={setContent}
            // value={content}
            placeholder='검색어'
            keyboardType="ascii-capable" />
          <TouchableOpacity >
            <View style={styles.searchButton}>
              <Text style={styles.searchButtonText}>검색</Text>
            </View> 
          </TouchableOpacity>
      </View>
    </SafeAreaView> 
  )

}
const styles=StyleSheet.create({
  announcementSection:{
    marginLeft:10,
    marginRight:10
  },
  topButtonSection:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:10

  },
  allButton:{
    height:30,
    width:60,
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#004A94",
   
  },
  allButtonText:{
    color:"white",
    fontWeight:"bold",
  },
  button:{
    alignItems:"center",
    justifyContent:"center",
    height:30,
    width:60,
    borderRadius:5,
    borderWidth:1,
    borderColor:"gray",  
  },
  searchSection:{
    marginTop: 10,
    flexDirection:"row",
  },
  searchInput:{
    backgroundColor:"white",
    width:"83%",
    height:40
  },
  searchButton:{
    height:40,
    width:60,
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#004A94",
   
  },
  searchButtonText:{
    color:"white",
    fontWeight:"bold",
  },
});