import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const [isEditing, setisEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        //--------------------------------------------------

        // Sending the above object data to Parent Component (App.js)
        props.onAddExpense(expenseData)

        stopEditingHandler(false)
    }

    const startEditingHandler = () => {
        setisEditing(true);
    }

    const stopEditingHandler = () => {
        setisEditing(false);
    }

    return (<div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
    )
}

export default NewExpense