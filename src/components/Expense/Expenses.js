import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const onFilteredYear = (year) => {
        setFilteredYear(year);
    };

    const filterExpenses = props.items.filter(
        (expense) => expense.date.getFullYear() === Number(filteredYear)
    );

    return (
        <div className="expenses">
            <ExpensesFilter value={filteredYear} onFilter={onFilteredYear} />
            {filterExpenses.length === 0 && <p>No Expense Found ☹️</p>}
            {filterExpenses.length > 0 &&
                filterExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
        </div>
    );
};

export default Expenses;
