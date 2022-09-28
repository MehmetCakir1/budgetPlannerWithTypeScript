import { createSlice } from "@reduxjs/toolkit";
import { IInitialStateTypes } from "../../interfaces/interfaces";


const initialState:IInitialStateTypes={
  total:0,
  expenses:[],
  spent:0,
}

const budgetSlice = createSlice({
  name:"budget",
  initialState,
  reducers:{
    editBudget(state,{payload}){
      state.total=payload
    },
    addNewExpense(state,action){
      state.expenses.push(action.payload)
    },
    deleteItem(state,{payload}){
      state.expenses=state.expenses.filter((item)=>item.id!==payload)
    },

  }
})

export default budgetSlice.reducer
export const {editBudget,addNewExpense,deleteItem}=budgetSlice.actions