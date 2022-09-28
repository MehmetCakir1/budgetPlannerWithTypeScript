import { useSelector } from 'react-redux'
import { IStateProps } from '../../interfaces/interfaces'

const Remaining = () => {
  let spent=useSelector((state:IStateProps)=>state.budget.spent)
  const total=useSelector((state:IStateProps)=>state.budget.total)
  const expenses=useSelector((state:IStateProps)=>state.budget.expenses)
  spent=expenses.reduce((sum:number,item:any)=>sum+=+(item.cost),0)

  const remaining=+total-(+spent)
  // console.log("total",total);
  // console.log("remaining",remaining);
  console.log("spent",spent);
  return (
    <div className=" flex items-center py-7 px-5 bg-green-300 rounded-lg font-bold text-xl w-full max-w-[600px] m-auto">Remaining:${remaining}</div>
  )
}

export default Remaining