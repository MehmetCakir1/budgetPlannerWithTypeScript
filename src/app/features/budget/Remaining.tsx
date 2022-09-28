import { useSelector } from 'react-redux'
import { IStateProps } from '../../interfaces/interfaces'

const Remaining = () => {
  let spent=useSelector((state:IStateProps)=>state.budget.spent)
  const total=useSelector((state:IStateProps)=>state.budget.total)
  const remaining=+total-(+spent)


  return (
    <div className=" flex items-center py-7 px-5 bg-green-300 rounded-lg font-bold text-xl w-full max-w-[600px] m-auto">Remaining:${remaining}</div>
  )
}

export default Remaining