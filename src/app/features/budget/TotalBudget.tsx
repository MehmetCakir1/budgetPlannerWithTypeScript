import { useState } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { editBudget } from "./budgetSlice"
import { IStateProps } from "../../interfaces/interfaces"



const TotalBudget = () => {
  const dispatch=useDispatch()
  const total=useSelector((state:IStateProps)=>state.budget.total)
  // console.log(total)
  const [totalBudget,setTotalBudget]=useState(total)

  // console.log(total)

  const handleSubmit=(e:any)=>{
    e.preventDefault()
    dispatch(editBudget(totalBudget))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Type your budget" value={totalBudget} onChange={(e)=>setTotalBudget(e.target.value)}/>
        <button type="submit">SAVE</button>
      </form>
    </div>
  )
}

export default TotalBudget