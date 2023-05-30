import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState : any = {
  datas: []

};

export const counterSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
   
    getDataTable: (state, action) => {
      state.datas = action.payload
    },

    getDataChangePage: (state, action) => {
      state.datas = action.payload
    }

   
  }
})

// Action creators are generated for each case reducer function
export const {  getDataTable, getDataChangePage } = counterSlice.actions

export default counterSlice.reducer