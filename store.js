import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './slices/searchSlice'
import dataReducer from "./slices/dataSlice";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        weatherData: dataReducer
    }
})