import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'

const ExpenseList = ({expenses}) => {
    let expensesMessage = <p style={{color: 'white'}}>No Expenses Found</p>

    if(expenses.length > 0) {
        expensesMessage = expenses.map((expense)=>{
            return <ExpenseItem
                id={expense.id}
                title={expense.title} 
                date={expense.date} 
                amount={expense.amount} />
        })
    }

    return <ul className="expenses-list">
        {expensesMessage}
    </ul>
}

export default ExpenseList
