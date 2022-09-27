import { useSelector } from "react-redux/es/exports"

type StateType={
  state:any,
  budget:{},
}

const TotalBudget = () => {
  const total=useSelector((state:StateType)=>state.budget)

  // console.log(total)

  return (
    <div>mm</div>
  )
}

export default TotalBudget