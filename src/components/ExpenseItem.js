import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {


    return (  
        <div className="expense-list">
            <div className="expense-desc">    
                <h2>{props.name}<span className="small tag">{props.type}</span></h2> 
                <ExpenseDate date={props.date}/>
            </div>
            <div className="amount-section">
                <p className="amount">₹{props.amount}</p>
                <p className="esmall">{props.fromacc}</p>

            </div>
        </div>
    );
}
 
export default ExpenseItem;