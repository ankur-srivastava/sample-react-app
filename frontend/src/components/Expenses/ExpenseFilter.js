import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const filterHandler = (event) => {
        props.onFilterChange(event.target.value)
    }
    
    return <div className="expenses-filter">
        <div className="expenses-filter__control">
            <label>Filter</label>
            <select onChange={filterHandler} value={props.selected}>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
    </div>
}

export default ExpenseFilter
