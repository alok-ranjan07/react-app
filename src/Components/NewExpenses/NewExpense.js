import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveDataHandler = (event) => {
    const userData = { ...event, 
        id: Math.random().toString() };
        props.onAddData(userData);
  };
 
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveDataHandler} />
    </div>
  );
};

export default NewExpense;
