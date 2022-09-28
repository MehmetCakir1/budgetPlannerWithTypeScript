import { nanoid } from '@reduxjs/toolkit'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewExpense,increaseSpentMoney} from './budgetSlice'
import { IStateProps } from '../../interfaces/interfaces'

const AddNewExpense = () => {
  const dispatch=useDispatch()
  const expenses=useSelector((state:IStateProps)=>state.budget.expenses)
  const [newExpense,setNewExpense]=useState("")
  const [newCost,setNewCost]=useState("")



  const handleAddNewExpense=(e:any)=>{
    e.preventDefault()
    if(newCost && newExpense){
       dispatch(addNewExpense({
      id:nanoid(),
      expense:newExpense,
      cost:newCost, //formatPrice 
    }))
    }
    setNewExpense("")
    setNewCost("")
    dispatch(increaseSpentMoney(newCost))
  }
  // console.log(expenses)
  // console.log(newExpense);
  // console.log(newCost);
  return (
    <form className='flex flex-col justify-center items-center container m-auto' onSubmit={handleAddNewExpense}>
      <h1 className="font-bold text-4xl text-blue-500 mt-2 text-center">Add A NEW EXPENSE</h1>
      <div className='flex flex-col justify-center items-center container my-1'>
        <label htmlFor="newexpenses" className='text-2xl'>Expense</label>
        <input type="text" id='newexpenses' name='newexpenses' value={newExpense} onChange={(e)=>setNewExpense(e.target.value)} className="border border-black p-1 w-full max-w-[600px]"/>
      </div>
      <div className='flex flex-col justify-center items-center container my-1'>
        <label htmlFor="newcost" className='text-2xl'>Cost</label>
        <input type="number" id='newcost' name='newcost' value={newCost} onChange={(e)=>setNewCost((e.target.value))} className="border border-black p-1 w-full max-w-[600px]"/>
      </div>
      <button type='submit' className='bg-cyan-800 py-1 px-9 font-bold text-white mt-3'>ADD</button>
    </form>
  )
}

export default AddNewExpense