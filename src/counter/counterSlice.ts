import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState : any = {
  datas: {},
  datanumber : {}

};

export const counterSlice = createSlice({
  name: 'dataemployee',
  initialState,
  reducers: {
   
    getdatas: (state, action) => {
      state.datas += action.payload
    },
    getdatanumber: (state, action) => {
      state.datanumber = action.payload
    }

    // getDataChangePage: (state, action) => {
    //   state.datas = action.payload
    // }/

   
  }
})

// Action creators are generated for each case reducer function
export const {  getdatas, getdatanumber} = counterSlice.actions

export default counterSlice.reducer