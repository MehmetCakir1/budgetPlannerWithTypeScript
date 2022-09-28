import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { editBudget } from "./budgetSlice";
import { IStateProps } from "../../interfaces/interfaces";

const TotalBudget = () => {
  const dispatch = useDispatch();
  const total = useSelector((state: IStateProps) => state.budget.total);
  // console.log(total)
  const [totalBudget, setTotalBudget] = useState(total);
  const [isOpen, setIsOpen] = useState(false);

  // console.log(total)

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(editBudget(totalBudget));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex justify-between py-7 px-5 bg-cyan-300 rounded-lg w-full max-w-[600px] m-auto"
    >
      {!isOpen ? (
        <div className="font-bold text-xl">Budget:${total}</div>
      ) : (
        <input
          type="number"
          placeholder="Type your budget"
          value={totalBudget}
          onChange={(e) => setTotalBudget(e.target.value)}
          className="w-10/12 p-1"
        />
      )}

      <button
        type="submit"
        className="w-2/12 bg-blue-700 font-bold text-white p-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "SAVE" : "EDIT"}
      </button>
    </form>
  );
};

export default TotalBudget;
