import React from "react";

import ExpenseItem from "./ExpenseItem";
import "../Expenses/ExpensesList.css"

const ExpensesList = (props) => {
    {/* 1st method, Conditional statement : dynamic code */ }

    let expensesContent = <p>There are no Expenses.</p>

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no Expenses</h2>
    }

    return (
        <ul className="expenses-list">
            {(props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))}
        </ul>
    )
}

export default ExpensesList;