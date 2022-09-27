import { createSlice } from "@reduxjs/toolkit";

const initialState={
  total:0,
}

const budgetSlice = createSlice({
  name:"budget",
  initialState,
  reducers:{
    editBudget(state,{payload}){
      state.total=payload
    }
  }
})

export default budgetSlice.reducer
export const {editBudget}=budgetSlice.actions