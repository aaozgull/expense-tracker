import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";
function AllExpenses() {
  const expenseCtx = useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expenses={expenseCtx.expenses}
      expensePeriod="total"
      fallBackText="No registered
     expense found"
    />
  );
}

export default AllExpenses;
