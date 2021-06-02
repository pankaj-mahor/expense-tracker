import ExpenseItem from "./ExpenseItem"
import './ExpenseItem.css'
const Expenses = (props) => {

    return (
        <div className="all-expenses">
            <ExpenseItem
                name={props.items[0].title} 
                amount={props.items[0].amount}
                type={props.items[0].type} 
                date={props.items[0].date}
            />
            <ExpenseItem
                name={props.items[1].title} 
                amount={props.items[1].amount}
                date={props.items[1].date} 
                type={props.items[1].type}
            /> 
            <ExpenseItem 
                type={props.items[2].type}
                name={props.items[2].title}
                amount={props.items[2].amount} 
                date={props.items[2].date} 
            /> 
        </div>
    );
}
 
export default Expenses;