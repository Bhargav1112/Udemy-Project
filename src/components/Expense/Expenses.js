import React, { useState } from "react";
import ExpenseChart from "./ExpenseChart";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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
            <ExpenseChart expenses={filterExpenses} />
            <ExpensesList filterExpense={filterExpenses} />
        </div>
    );
};

export default Expenses;
