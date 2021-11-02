import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        preschool: false,
        park: false,
        theatre: false,
        cinema: false,
        school: false,
        sportGround: false,
        shoppingMall: false
    },
    reducers: {

    }
})

export default filterSlice.reducer
