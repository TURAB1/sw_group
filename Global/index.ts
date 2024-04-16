import { configureStore } from "@reduxjs/toolkit";
import sungwonReducer from "./reducers/sungwon_reducer";

export const store =configureStore({
  reducer:{ 
    sungwon:sungwonReducer
   
  }

})