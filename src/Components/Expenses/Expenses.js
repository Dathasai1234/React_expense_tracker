import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css"
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState("2022");

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpences = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    // 1st method in ExpensesList.js Component (Logic)

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                <ExpenseChart expenses={filteredExpences} />

                {/* 1st method in ExpensesList.js Component */}
                {/* {expensesContent} */}
                <ExpensesList items={filteredExpences} />

                {/* 2nd method, Conditional statement : dynamic code */}
                {/* {filteredExpences.length === 0 ?
                    <p>There are no Expenses.</p> :
                    (filteredExpences.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))
                } */}


                {/* static code */}
                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
            </Card>
        </div>
    )
}

export default Expenses;