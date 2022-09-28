import { useDispatch, useSelector } from 'react-redux'
import { IStateProps } from '../../interfaces/interfaces'
import { deleteItem } from './budgetSlice'

const Expenses = () => {
  const dispatch=useDispatch()
  const expenses=useSelector((state:IStateProps)=>state.budget.expenses)

  // console.log(expenses);


  return (
    <div>
      <h1>EXPENSES</h1>
      <section>
        {expenses.map((item:any)=>{
          const {id,expense,cost}=item;
          return(
            <div key={id}>
              <span>{expense}</span>
              <span>${cost}</span>
              <button onClick={()=>dispatch(deleteItem(id))}>DELETE</button>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Expenses