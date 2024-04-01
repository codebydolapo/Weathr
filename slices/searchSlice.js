import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shown: true,
    query: "",
    keyboardActive: false
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchState: (state, action) => {
            state.shown = action.payload
        },
        setKeyboardActive: (state, action) => {
            state.keyboardActive = action.payload
        },
        setSearchQuery: (state, action) => {
            state.query = action.payload
        },
    }
})

export const { setSearchState, setKeyboardActive, setSearchQuery } = searchSlice.actions


export const selectSearchState = (state) => state.search.shown

export const selectSearchQuery = (state) => state.search.query

export const selectKeyboardState = (state) => state.search.keyboardActive

export default searchSlice.reducer