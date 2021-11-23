import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showButton, setShowButton] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expanseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expanseData);
    setShowButton(false);
  };

  const startExpenseForm = () => {
    setShowButton(true);
  };

  const stopExpenseFrom = () => {
    setShowButton(false);
  };

  return (
    <div className="new-expense">
      {!showButton && (
        <button onClick={startExpenseForm}>Add New Expense</button>
      )}
      {showButton && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopExpenseFrom}
        />
      )}
    </div>
  );
};

export default NewExpense;
