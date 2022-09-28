import { nanoid } from '@reduxjs/toolkit'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewExpense } from './budgetSlice'
import { IStateProps } from '../../interfaces/interfaces'

const AddNewExpense = () => {
  const dispatch=useDispatch()
  // const expenses=useSelector((state:IStateProps)=>state.budget.expenses)
  const [newExpense,setNewExpense]=useState("")
  const [newCost,setNewCost]=useState("")



  const handleAddNewExpense=(e:any)=>{
    e.preventDefault()
    dispatch(addNewExpense({
      id:nanoid(),
      expense:newExpense,
      cost:newCost, //formatPrice 
    }))
    setNewExpense("")
    setNewCost("")
  }
  // console.log(expenses)
  // console.log(newExpense);
  // console.log(newCost);
  return (
    <form className='flex flex-col justify-center items-center' onSubmit={handleAddNewExpense}>
      <div className='flex flex-col justify-center items-center'>
        <label htmlFor="newexpenses">Expense</label>
        <input type="text" id='newexpenses' name='newexpenses' value={newExpense} onChange={(e)=>setNewExpense(e.target.value)} className="border border-black"/>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <label htmlFor="newcost">Cost</label>
        <input type="number" id='newcost' name='newcost' value={newCost} onChange={(e)=>setNewCost((e.target.value))} className="border border-black"/>
      </div>
      <button type='submit'>ADD</button>
    </form>
  )
}

export default AddNewExpense