import { Provider } from "react-redux"
import AddNewExpense from "./app/features/budget/AddNewExpense"
import Expenses from "./app/features/budget/Expenses"
import Remaining from "./app/features/budget/Remaining"
import Spent from "./app/features/budget/Spent"
import TotalBudget from "./app/features/budget/TotalBudget"
import store from "./app/store"

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <TotalBudget/>
          <Remaining/>
          <Spent/>
        </div>
        <section>
          <Expenses/>
        </section>
        <section>
          <AddNewExpense/>
        </section>
      </Provider>
    </div>
  )
}

export default App