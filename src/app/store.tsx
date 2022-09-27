import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "./features/budget/budgetSlice"

const store = configureStore({
  reducer:{
    budget:budgetReducer
  }
})

export default store