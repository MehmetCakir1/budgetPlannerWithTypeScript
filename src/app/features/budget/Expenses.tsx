import { useDispatch, useSelector } from 'react-redux'
import { IStateProps } from '../../interfaces/interfaces'
import { deleteItem ,decreaseSpentMoney} from './budgetSlice'
import {FaTrashAlt} from "react-icons/fa"

const Expenses = () => {
  const dispatch=useDispatch()
  const expenses=useSelector((state:IStateProps)=>state.budget.expenses)

  // console.log(expenses);
  const removeItem=(id:string)=>{
    dispatch(deleteItem(id))
    expenses.find((item:any)=>item.id==id && dispatch(decreaseSpentMoney(item.cost))) 
  }


  return (
    <div className='container m-auto'>
      <h1 className="font-bold text-4xl text-blue-500 my-3 text-center">EXPENSES</h1>
      <section className='w-full max-w-[700px] m-auto text-xl'>
        {expenses.map((item:any)=>{
          const {id,expense,cost}=item;
          return(
            <div key={id} className="flex justify-between items-center p-2 border border-gray-300">
              <span className='capitalize'>{expense}</span>
              <div className='flex justify-between items-center'>
              <span className='mx-5'>${cost}</span>
              <button onClick={()=>removeItem(id)} className="text-slate-600 bg-transparent"><FaTrashAlt/></button>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Expenses