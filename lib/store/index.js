import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "@/lib/store/slices/dataSlice";


const store = configureStore({
  reducer: {
    data: dataSlice
  },
});

export default store;
