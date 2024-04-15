import { configureStore } from "@reduxjs/toolkit";
import announcementReducer from "./reducers/announcement_reducer";

export const store =configureStore({
  reducer:{ 
    announcement:announcementReducer
   
  }

})