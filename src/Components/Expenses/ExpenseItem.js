import React from "react";
import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
  const [title, newtitle] = useState(props.title);

  const clickHandler = () => {
    newtitle("Pav Bhaji");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Me</button>
    </Card>
  );
};

export default ExpenseItem;
