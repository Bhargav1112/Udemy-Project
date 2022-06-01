import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    };
    return (
        <li onClick={deleteHandler}>
            <div className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                </div>
                <div className="expense-item__price ">${props.amount}</div>
            </div>
        </li>
    );
};

export default ExpenseItem;
