import React, {useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [userYear, setUserYear] = useState("2021");
  const saveUserYear = (userInput) => {
    setUserYear(userInput);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === userYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={userYear} getUserYear={saveUserYear} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
