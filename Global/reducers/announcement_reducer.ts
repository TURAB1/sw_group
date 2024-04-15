import {  ToastAndroid,Platform,Alert } from "react-native";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";




const announcementSlice=createSlice({
  name:"anouncement",
  initialState: {
  title:"",
  content:""
    

  },
  reducers:{
   setTitle:(state,action)=>{
    state.title=action.payload;

   },
   setContent:(state,action)=>{
    state.content=action.payload;


   }

  }

})

  
export const {setTitle,setContent}=announcementSlice.actions;
export default announcementSlice.reducer;
 
  