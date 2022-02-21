import ExpenseItem from "./ExpenseItem"

function Expenses({expenses}) {
    return expenses.map((expense)=>(
        <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount}></ExpenseItem>    
    ))
}

export default Expenses
