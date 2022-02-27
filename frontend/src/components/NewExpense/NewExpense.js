import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const postSaveExpense = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(`In New Expense and expenseData = ${JSON.stringify(expenseData)}`)
        props.onExpenseSave(expenseData)
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={postSaveExpense}/>
    </div>
}

export default NewExpense
