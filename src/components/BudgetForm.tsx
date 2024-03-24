import { useState } from "react";

interface BudgetFormProps {
  addBudget: (task: string, amount: number) => void;
}
const BudgetForm: React.FC<BudgetFormProps> = ({ addBudget }) => {
  const[value, setValue] = useState("");
  const[amount, setAmount] = useState(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();//prevent the page from refreshing
    addBudget(value, amount);
    setValue("");
    setAmount(0);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          value={value}
          className="form-control"
          placeholder="Add a new task"
          id="taskInput"
          onChange={(e)=>setValue(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          className="form-control"
          placeholder="Add the amount"
          id="taskAmount"
          onChange={(e)=>setAmount(parseInt(e.target.value))}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" type="submit" id="addTaskBtn">
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default BudgetForm;
