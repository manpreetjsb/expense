import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleChange, setTitleChange] = useState("");
  const [amountChange, setAmountChange] = useState("");
  const [dateChange, setDateChange] = useState("");
  /*   const [userInput, setUserInput] = useState({
    titleChange: "",
    amountChange: "",
    dateChange: "",
  }); */

  const titleChangeHandler = (event) => {
    /*     setUserInput((prevState) => {
      return { ...prevState, titleChange: event.target.value };
    }); */
    setTitleChange(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmountChange(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDateChange(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleChange,
      amout: amountChange,
      date: new Date(dateChange),
    };

    props.onSaveExpenseData(expenseData);
    setTitleChange("");
    setAmountChange("");
    setDateChange("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={titleChange}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amountChange}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={dateChange}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
