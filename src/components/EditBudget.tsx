import { useState } from "react";
interface BudgetItems {
  id: string;
  task: string;
  amount: number;
  isEditing: boolean;
}
interface BudgetEditFormProps {
  budget: BudgetItems;
  editBudget: (task: string, amount:number, id: string) => void;
}
const EditBudget: React.FC<BudgetEditFormProps> = ({budget, editBudget}) => {
  const[value, setValue] = useState(budget.task);
  const[amount, setAmount] = useState(budget.amount);
  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();//prevent the page from refreshing
    editBudget(value, amount, budget.id);
    setValue("");
    setAmount(0);
  }
  return (
    <form onSubmit={handleEdit}>
      <div className="input-group mb-3">
        <input
          type="text"
          value={value}
          className="form-control"
          placeholder="Update the task"
          id="taskInput"
          onChange={(e)=>setValue(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          className="form-control"
          placeholder=""
          id="taskAmount"
          onChange={(e)=>setAmount(parseInt(e.target.value))}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" type="submit" id="addTaskBtn">
            Update Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditBudget;
