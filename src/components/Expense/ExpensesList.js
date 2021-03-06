import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    if (props.filterExpense.length === 0) {
        return <h2 className="expenses-list__fallback">No Expense Found ☹️</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.filterExpense.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    id={expense.id}
                    onDelete={props.onDelete}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;
