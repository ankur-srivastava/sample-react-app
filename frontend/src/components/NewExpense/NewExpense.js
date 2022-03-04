import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false)

    const postSaveExpense = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(`In New Expense and expenseData = ${JSON.stringify(expenseData)}`)
        props.onExpenseSave(expenseData)
        setShowExpenseForm(false)
    }

    const onCancelHandler = () => {
        setShowExpenseForm(false)
    }

    const showFormHandler = () => {
        setShowExpenseForm(true)
    }
    return <div className="new-expense">
        {showExpenseForm ? 
            <ExpenseForm onSaveExpenseData={postSaveExpense} onCancelClick={onCancelHandler}/> : 
            <button onClick={showFormHandler}>Add new Expense</button>}
    </div>
}

export default NewExpense
