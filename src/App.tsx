import { Provider } from "react-redux"
import AddNewExpense from "./app/features/budget/AddNewExpense"
import Expenses from "./app/features/budget/Expenses"
import Remaining from "./app/features/budget/Remaining"
import Spent from "./app/features/budget/Spent"
import TotalBudget from "./app/features/budget/TotalBudget"
import store from "./app/store"

const App = () => {
  return (
      <Provider store={store}>
        <div className="flex flex-col justify-center items-center mt-4">
          <h1 className="font-bold text-4xl text-blue-500 my-3">MY BUDGET</h1>
          <div className="grid lg:grid-cols-3 gap-4 container ">
            <TotalBudget/>
            <Remaining/>
            <Spent/>
          </div>
          
        </div>
        <section>
          <Expenses/>
        </section>
        <section>
          <AddNewExpense/>
        </section>
      </Provider>
  )
}

export default App