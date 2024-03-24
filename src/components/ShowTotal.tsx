
interface BudgetProps {
  total: number;
}
const ShowTotal: React.FC<BudgetProps> = ({ total }) => {
  return (
    <div>
      <label className="text-center">Total</label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control text-center"
          placeholder="Your total will be shown here"
          aria-describedby="basic-addon1"
          value={total.toString()+"$"}
        />
      </div>
    </div>
  );
};

export default ShowTotal;
