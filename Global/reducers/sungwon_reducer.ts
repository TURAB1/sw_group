import { ToastAndroid, Platform, Alert } from "react-native";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStaffData = createAsyncThunk("fetchData", async () => {


  let url = "https://swerp.swadpia.co.kr/api/management/organization.php?action=find_group_total";  //조긱도
  const customCookie = `LoginUser={"staff_id":"test"};os_type=null&company=CPCSW;`;
  let returnCode = { code: '9999' };
  let sendData = {
    a: 10,
    b: 20,
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      'Cookie': customCookie
    }),
    body: JSON.stringify(sendData)
  })
  const final = await res.json();
  return final;
});


const sungwonSlice = createSlice({
  name: "sungwon",
  initialState: {
    isSignedIn:false,
    staffData: null,
    isLoading: true,
    error: false,
    noticeData: null,
    noticeLoadingState: true,
    noticeError: false,
    title: "",
    content: "",


  },
  extraReducers: (builder) => {
    builder.addCase(fetchStaffData.pending, (state, action) => {
      state.isLoading = true
    });
    builder.addCase(fetchStaffData.fulfilled, (state: any, action) => {
      state.isLoading = false
      state.staffData = action.payload
      console.log("staff fetch successful")

    })
    builder.addCase(fetchStaffData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      console.log("staff fetch error ");
    })

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


export const { setSignIn,setNoticeData, setNoticeLoadingState, setTitle, setContent } = sungwonSlice.actions;
export default sungwonSlice.reducer;

