import ExpenseFilter from './ExpenseFilter';
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from './ExpensesChart';

const Expenses = ({expenses}) => {
    const [filterValue, setFilterValue] = useState('2022')

    const applyFilter = (value) => {
        setFilterValue(value)
    }

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filterValue
    })

    return <div>
        <div className="expenses">
            <ExpenseFilter selected={filterValue} onFilterChange={applyFilter} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpenseList expenses={filteredExpenses} />
        </div>
    </div>
}

export default Expenses
