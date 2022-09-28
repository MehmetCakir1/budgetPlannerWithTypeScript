import { useSelector } from 'react-redux'
import { IStateProps } from '../../interfaces/interfaces'

const Spent = () => {
  let spent=useSelector((state:IStateProps)=>state.budget.spent)



  return (
    <div className=" flex items-center py-7 px-5 bg-red-300 rounded-lg font-bold text-xl w-full max-w-[600px] m-auto">Spent:${spent}</div>
  )
}

export default Spent