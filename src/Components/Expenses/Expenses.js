import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const changeFilterHandler = (event) => {
    setFilteredYear(event);
  };

  const filterExpense = props.items.filter((any) => {
    return any.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpenseChart items={filterExpense} />
      <ExpenseList items={filterExpense} />
    </Card>
  );
};

export default Expenses;
