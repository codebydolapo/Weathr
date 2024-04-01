import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
}

export const dataSlice = createSlice({
    name: "weatherData",
    initialState,
    reducers: {
        setWeatherData: (state, action) => {
            state.weatherData = action.payload
        },
    }
})

export const { setWeatherData, setLocationData } = dataSlice.actions


export const selectWeatherData = (state) => {
    return state.weatherData.weatherData?.current
}

export const selectLocationData = (state) => {
    return state.weatherData.weatherData?.location
}



export default dataSlice.reducer