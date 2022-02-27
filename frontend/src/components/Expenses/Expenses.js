import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from './ExpenseFilter';
import { useState } from "react";

const Expenses = ({expenses}) => {
    const [filterValue, setFilterValue] = useState('2022')

    const applyFilter = (value) => {
        setFilterValue(value)
    }
    return <div>
        <div className="expenses">
            <ExpenseFilter selected={filterValue} onFilterChange={applyFilter} />
            {expenses.map((expense)=>(
                <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount}></ExpenseItem>    
            ))}
        </div>
    </div>
}

export default Expenses
