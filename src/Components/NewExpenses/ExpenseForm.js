import React, { useState } from "react";
import "./ExpenseForm.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const [error, setError] = useState(null);

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      userInput.enteredTitle.trim().length === 0 ||
      userInput.enteredAmount.trim().length === 0 ||
      userInput.enteredDate.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message:
          "Please enter a valid title, amount or date (non-empty values).",
      });
      return;
    }

    if (+userInput.enteredAmount < 1) {
      setError({
        title: "Invalid amount",
        message: "Please enter a valid amount (> 1).",
      });
      return;
    }

    const userData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
    props.onSaveData(userData);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={userInput.enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={userInput.enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={userInput.enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <Button type="submit">Add Expense</Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ExpenseForm;
