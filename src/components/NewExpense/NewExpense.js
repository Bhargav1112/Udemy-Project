import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const onSaveInputData = (expense) => {
        const expenses = {
            ...expense,
            id: Math.trunc(Math.random() * 100 + 1),
        };
        props.onAddData(expenses);
    };

    const showFormHandler = () => {
        setIsEditing(true);
        console.log("newEx");
    };

    const cancelEditing = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && (
                <button type="button" onClick={showFormHandler}>
                    Add new Expense
                </button>
            )}
            {isEditing && (
                <ExpenseForm
                    onCancel={cancelEditing}
                    onDataSave={onSaveInputData}
                />
            )}
        </div>
    );
};

export default NewExpense;
