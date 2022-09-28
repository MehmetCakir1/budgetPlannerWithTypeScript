import { useSelector } from 'react-redux'
import { IStateProps } from '../../interfaces/interfaces'
import {useEffect} from "react"

const Spent = () => {
  let spent=useSelector((state:IStateProps)=>state.budget.spent)
  const expenses=useSelector((state:IStateProps)=>state.budget.expenses)  

spent=expenses.reduce((sum:number,item:any)=>sum+=+(item.cost),0)
  
  
    // console.log(spent)

  return (
    <div>Spent:${spent}</div>
  )
}

export default Spent