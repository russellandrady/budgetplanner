import { useEffect, useState } from "react";
import BudgetForm from "./BudgetForm";
import Budget from "./Budget";
import EditBudget from "./EditBudget";
import ShowTotal from "./ShowTotal";

interface Budget {
  id: string;
  task: string;
  amount: number;
  isEditing: boolean;
}
const BudgetWrapper = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [total, setTotal] = useState<number>(0);
  const addBudget = (task: string, amount: number) => {
    setBudgets([
      ...budgets,
      { id: Math.random().toString(), task, amount, isEditing: false },
    ]);
  };

  const deleteBudget = (id: string) =>
    setBudgets(budgets.filter((Budget) => Budget.id !== id));
  const editBudget = (task: string, amount: number, id: string) => {
    setBudgets(
      budgets.map((Budget) =>
        Budget.id === id
          ? { ...Budget, task, amount, isEditing: !Budget.isEditing }
          : Budget
      )
    );

  };
  useEffect(() => {
    const newTotal = budgets.reduce((acc, budget) => acc + budget.amount, 0);
    setTotal(newTotal);
  }, [budgets]);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center mb-4">Budget Planner</h2>
          <BudgetForm addBudget={addBudget} />
          {budgets.map((budget) =>
            budget.isEditing ? (
              <EditBudget budget={budget} editBudget={editBudget} />
            ) : (
              <Budget
                budget={budget}
                editBudget={editBudget}
                deleteBudget={deleteBudget}
              />
            )
          )}
          <ShowTotal total={total} />
        </div>
      </div>
    </div>
  );
};

export default BudgetWrapper;
