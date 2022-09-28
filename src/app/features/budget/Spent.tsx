import { useSelector } from 'react-redux'
import { IStateProps } from '../../interfaces/interfaces'
import {useEffect} from "react"

const Spent = () => {
  let spent=useSelector((state:IStateProps)=>state.budget.spent)
  const expenses=useSelector((state:IStateProps)=>state.budget.expenses)  

spent=expenses.reduce((sum:number,item:any)=>sum+=+(item.cost),0)
  
  
    // console.log(spent)

  return (
    <div className=" flex items-center py-7 px-5 bg-red-300 rounded-lg font-bold text-xl w-full max-w-[600px] m-auto">Spent:${spent}</div>
  )
}

export default Spent