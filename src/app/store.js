import { configureStore } from "@reduxjs/toolkit";
import userDetails from "../features/slice/curdSlice";


export const store = configureStore({
    reducer: {
        userDetails: userDetails,
    }
})