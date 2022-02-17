import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [userYear, setUserYear] = useState("2021");
  const saveUserYear = (userInput) => {
    setUserYear(userInput);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={userYear} getUserYear={saveUserYear} />
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </Card>
  );
};

export default Expenses;
