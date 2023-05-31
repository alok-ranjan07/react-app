import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";



const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addDataHandler = (event) => {
    setExpenses((prevState) => {
      return [event, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddData={addDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
