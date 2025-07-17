import { createSlice } from "@reduxjs/toolkit";

export  const appSlice = createSlice({
    name:'appSlice',
    initialState:{
        count:0,
        firstName:'Pamilerin ',
        lastName:'',
        friends:[]
    },

    reducers:{}

})

export default appSlice.reducer