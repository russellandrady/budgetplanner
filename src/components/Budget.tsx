interface BudgetItems {
  id: string;
  task: string;
  amount: number;
  isEditing: boolean;
}
interface BudgetProps {
  budget: BudgetItems;
  editBudget: (task: string, amount: number, id: string) => void;
  deleteBudget: (id: string) => void;
}
const Budget:React.FC<BudgetProps> = ({budget,editBudget, deleteBudget}) => {
  return (
  
      <div className="input-group mb-3">
        <input
          type="text"
          value={budget.task}
          className="form-control"
        />
        <input
          type="text"
          value={budget.amount.toString()+"$"}
          className="form-control"
        />
        <button className="btn btn-outline-secondary" id="UpdateTaskBtn" onClick={()=>editBudget(budget.task, budget.amount, budget.id)}>
            Edit
        </button>
        <button className="btn btn-outline-secondary" id="DeleteTaskBtn" onClick={()=>deleteBudget(budget.id)}>
            Delete
        </button>
      </div>
   
  );
};

export default Budget;
