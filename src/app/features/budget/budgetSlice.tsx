import { createSlice } from "@reduxjs/toolkit";
import { IInitialStateTypes } from "../../interfaces/interfaces";


let initialState:IInitialStateTypes={
  total:0,
  expenses:[],
  spent:0,
}


if(localStorage.getItem("budget")){
  initialState={...(JSON.parse(localStorage.getItem("budget")!))}
}else{
  initialState={
    total:0,
    expenses:[],
    spent:0,
  }
}

const budgetSlice = createSlice({
  name:"budget",
  initialState,
  reducers:{
    editBudget(state,{payload}){
      state.total=payload
      localStorage.setItem("budget",JSON.stringify(state))
    },
    addNewExpense(state,{payload}){
      state.expenses.push(payload)
      localStorage.setItem("budget",JSON.stringify(state))
    },
    deleteItem(state,{payload}){
      state.expenses=state.expenses.filter((item)=>item.id!==payload)
      localStorage.setItem("budget",JSON.stringify(state))
    },
    increaseSpentMoney(state,{payload}){
      state.spent+=+payload
      localStorage.setItem("budget",JSON.stringify(state))
    },
    decreaseSpentMoney(state,{payload}){
      state.spent-=+payload
      localStorage.setItem("budget",JSON.stringify(state))
    }
  }
})

export default budgetSlice.reducer
export const {editBudget,addNewExpense,deleteItem,increaseSpentMoney,decreaseSpentMoney}=budgetSlice.actions