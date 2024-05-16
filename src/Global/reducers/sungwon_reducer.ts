import { ToastAndroid, Platform, Alert } from "react-native";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const sungwonSlice = createSlice({
  name: "sungwon",
  initialState: {
    isSignedIn:false,
    isLoading: true,
    error: false,
    noticeData: null,
    noticeLoadingState: true,
    noticeError: false,
    title: "",
    content: "",


  },
  reducers: {
    setNoticeData: (state, action) => {
      state.noticeData = action.payload;

    },
    setNoticeLoadingState: (state, action) => {
      state.noticeLoadingState = action.payload;

    },
    setTitle: (state, action) => {
      state.title = action.payload;

    },
    setContent: (state, action) => {
      state.content = action.payload;


    },    
    setSignIn: (state, action) => {
      state.isSignedIn = action.payload;


    }

  }

})


export const { setSignIn,setNoticeData, setNoticeLoadingState,setTitle, setContent } = sungwonSlice.actions;
export default sungwonSlice.reducer;

